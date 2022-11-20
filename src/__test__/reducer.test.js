import Reducer from "./../currency/reducer";

describe("Currency converter reducer", () => {
  test("Initial value of reducer", () => {
    expect(Reducer(undefined, { type: "INIT", payload: undefined })).toEqual({
      value: "",
      currencies: [],
    });
  });
});
