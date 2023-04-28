import { getLazadaPriceInUSD } from "./getLazadaPrice";

export const cleanAmazonData = (data) => {
  if (data) {
    const title = data.title;
    const thumbnail = data.thumbnail;
    const rating = data.reviews.rating;
    const price = "$" + data.price.current_price;
    const link = data.url;
    const from = "Amazon";

    return { thumbnail, title, rating, price, link, from };
  }

  return {};
};

export const cleanLazadaData = (data) => {
  if (data) {
    const title = data.item.title;
    const thumbnail = data.item.image;
    const rating = data.item.sku.averageStarRate;
    const price = "$" + getLazadaPriceInUSD(data);
    const link = data.item.itemUrl;
    const from = "Lazada";

    return { thumbnail, title, rating, price, link, from };
  }

  return {};
};

const parseBestBuyRating = (ratingString) => {
  return ratingString.split(" ")[1];
};

export const cleanBestBuyData = (data) => {
  if (data) {
    const title = data.title;
    const thumbnail = data.image_url;
    const rating = parseBestBuyRating(data.rating);
    const price = data.price;
    const link = data.product_url;
    const from = "BestBuy";

    return { thumbnail, title, rating, price, link, from };
  }

  return {};
};
