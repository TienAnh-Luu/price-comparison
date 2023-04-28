import { useQuery } from "react-query";
import axios from "axios";

const fetchAmazonData = (query) => {
  //   const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://amazon23.p.rapidapi.com/product-search",
    params: {
      query: query,
      country: "US",
    },
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "ce0743435dmsh71270b5177bc7fep190754jsn81e765116dbe",
      "X-RapidAPI-Host": "amazon23.p.rapidapi.com",
    },
  };

  return axios.request(options);
};

export const useAmazonData = (query) => {
  return useQuery("amazon-query", () => fetchAmazonData(query), {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      alert("Amazon: " + error);
    },
    enabled: false,
  });
};

// ======================================================================

const fetchLazadaData = (query) => {
  const options = {
    method: "GET",
    url: "https://lazada-datahub.p.rapidapi.com/item_search",
    params: {
      q: query,
      region: "VN",
      page: "1",
    },
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "ce0743435dmsh71270b5177bc7fep190754jsn81e765116dbe",
      "X-RapidAPI-Host": "lazada-datahub.p.rapidapi.com",
    },
  };

  return axios.request(options);
};

export const useLazadaData = (query) => {
  return useQuery("lazada-query", () => fetchLazadaData(query), {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      alert("Walmart: " + error);
    },
    enabled: false,
  });
};

// =================================================================================

const fetchBestBuyData = (query) => {
  // const axios = require('axios');

  const options = {
    method: "GET",
    url: "https://bestbuy-product-data.p.rapidapi.com/bestbuy/",
    params: {
      page: "1",
      keyword: query,
    },
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "ce0743435dmsh71270b5177bc7fep190754jsn81e765116dbe",
      "X-RapidAPI-Host": "bestbuy-product-data.p.rapidapi.com",
    },
  };

  return axios.request(options);
};

export const useBestBuyData = (query) => {
  return useQuery("bestbuy-query", () => fetchBestBuyData(query), {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      alert("BestBuy: " + error);
    },
    enabled: false,
  });
};
