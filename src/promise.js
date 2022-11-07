function auth() {
  return new Promise((resolve, reject) => {
    resolve({ access_token: "alkdjflasdjflksdjflkj" });
    //     reject("Username password is incorrect");
  });
}

//.then().catch()
//async await

// auth().then((data) => {
//   console.log('data',data);
// }).catch((err) => {
//    console.log('error',err)
// });

const authUser = async () => {
  try {
    const data = await auth();
    console.log("data", data);
  } catch (err) {
    console.log("err", err);
  }
};

authUser();
