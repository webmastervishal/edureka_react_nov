import React from "react";
import Item from "./Item";
import { connect } from "react-redux";
import { fetchCurrencies } from "./actions";
class List extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    // const res = await fetch(
    //   "https://webmaster-fake-api.herokuapp.com/currencies",
    //   {
    //     method: "GET",
    //     headers: {
    //       Authorization: `Bearer ${Cookies.get("token")}`,
    //     },
    //   }
    // );

    // const result = await res.json();
    // this.setState({
    //   ...this.state,
    //   currencies: result,
    // });
    // this.props.storeCurrencies(result);
    this.props.fetchCurrencies();
  }

  render() {
    return (
      <>
        {this.props.currencies.map((currency) => (
          <Item currency={currency} value={this.props.value} />
        ))}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.currency.value,
    currencies: state.currency.currencies,
  };
};

const mapDispatchToProps = {
  fetchCurrencies: fetchCurrencies,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
