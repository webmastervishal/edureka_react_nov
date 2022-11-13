import React, { useState, useEffect, useContext, useRef, useMemo } from "react";
import Layout from "./../layout";
import Cookies from "js-cookie";
import { UserContext } from "./../context/UserContext";

function Counter() {
  const [count, setCount] = useState(10);
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 4]);
  const [show, setShow] = useState(true);
  const [currencies, setCurrencies] = useState([]);
  const [user, setUser] = useState({
    name: "vishal",
    city: "pune",
  });
  const data = useContext(UserContext);
  // console.log("data", data);
  const inputRef = useRef();

  async function fetchAPI() {
    const res = await fetch(
      "https://webmaster-fake-api.herokuapp.com/currencies",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
    const result = await res.json();
    setCurrencies(result);
  }

  useEffect(() => {
    //mouting/updating
    //open ws connection server
    fetchAPI();

    inputRef.current.focus();
    inputRef.current.style.height = "25px";

    console.log("mounting phase...");
    // let time = 1;

    // const timer = setInterval(() => {
    //   time = time + 1;
    //   console.log("timer...", time);
    // }, 1000);

    //unmounting

    return () => {
      //closing ws connection to server
      //   clearInterval(timer);
      console.log("unmounting phase....");
    };
  }, []);

  useEffect(() => {
    //call api that fetches user id : 1
    console.log("updating phase");
  }, [count]);

  function displayMessage() {
    console.log("calling display message...");
    return <h1>Displaying message...</h1>;
  }

  return (
    <Layout>
      <h1>Welcome : {data.user}</h1>
      {show && (
        <>
          <h1>Count: {count}</h1>
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
        </>
      )}

      <button onClick={() => setShow(!show)}>Show/Hide</button>
      <button onClick={() => data.setUser("Vishal")}>Change user</button>

      {/* {numbers.map((num) => (
        <p>{num}</p>
      ))} */}

      {currencies.map((currency) => (
        <p key={currency.name}>{currency.name}</p>
      ))}

      <input ref={inputRef} type="text" name="test" />

      {useMemo(() => displayMessage(), [count])}
    </Layout>
  );
}

// class Counter extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       count: 0,
// name: 'vishal',
//age: 32
//     };

//     this.handleIncrement = this.handleIncrement.bind(this);
//   }

//   static getDerivedStateFromProps() {
//     //call api this
//   }

//   componentDidMount() {
//     //calling api fetchting data
//     //open connection to the ws server
//   }

//   componentDidUpdate() {
//     //calling api fetching data
//   }

//   componentWillUnmount() {
//     //go and close connection to the server
//   }

//   handleIncrement() {
//     console.log("this", this);
//     this.setState({ count: this.state.count + 1 });
//   }

//   handleDecrement() {
//     this.setState({ count: this.state.count - 1 });
//   }

//   render() {
//     return (
//       <Layout>
//         <h1>Count: {this.state.count}</h1>
//         <button onClick={this.handleIncrement}>+</button>
//         <button onClick={this.handleDecrement}>-</button>
//       </Layout>
//     );
//   }
// }

export default Counter;
