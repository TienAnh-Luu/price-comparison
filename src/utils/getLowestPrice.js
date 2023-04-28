import { getLazadaPriceInUSD } from "./getLazadaPrice";

export const getLowestAmazonPrice = (data) => {
  if (data) {
    let res = data[0];
    for (let i = 1; i < data.length; i++) {
      if (data[i].price.current_price < res.price.current_price) {
        res = data[i];
      }
    }
    return res;
  }
  return null;
};

export const getLowestLazadaPrice = (data) => {
  if (data) {
    let res = data[0];
    for (let i = 1; i < data.length; i++) {
      if (getLazadaPriceInUSD(data[i]) < getLazadaPriceInUSD(res)) {
        res = data[i];
      }
    }
    return res;
  }
  return null;
};

export const getLowestBestBuyPrice = (data) => {
  if (data) {
    let res = data[0];
    for (let i = 1; i < data.length; i++) {
      if (Number(data[i].price.slice(1)) < Number(res.price.slice(1))) {
        res = data[i];
      }
    }
    return res;
  }
  return null;
};
