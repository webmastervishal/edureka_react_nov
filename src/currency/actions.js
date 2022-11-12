//action creators
export function storeValue(data) {
  //action
  return {
    type: "STORE_VALUE",
    payload: data,
  };
}

export function fetchCurrencies(data) {
  return {
    type: "FETCH_CURRENCIES",
    payload: data,
  };
}

export function storeCurrencies(data) {
  return {
    type: "STORE_CURRENCIES",
    payload: data,
  };
}
