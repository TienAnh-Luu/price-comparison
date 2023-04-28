import "./App.css";
import { useState } from "react";
import Card from "./components/Card";
import {
  useAmazonData,
  useLazadaData,
  useBestBuyData,
} from "./hooks/useECommerceData";
import {
  cleanAmazonData,
  cleanLazadaData,
  cleanBestBuyData,
} from "./utils/cleanData";
import {
  getLowestAmazonPrice,
  getLowestLazadaPrice,
  getLowestBestBuyPrice,
} from "./utils/getLowestPrice";

function App() {
  const [query, setQuery] = useState();

  const {
    data: amazonData,
    isLoading: amazonDataIsLoading,
    isFetching: amazonDataIsFetching,
    refetch: amazonDataRefetch,
  } = useAmazonData(query);

  const {
    data: lazadaData,
    isLoading: lazadaDataIsLoading,
    isFetching: lazadaDataIsFetching,
    refetch: lazadaDataRefetch,
  } = useLazadaData(query);

  const {
    data: bestBuyData,
    isLoading: bestBuyDataIsLoading,
    isFetching: bestBuyDataIsFetching,
    refetch: bestBuyDataRefetch,
  } = useBestBuyData(query);

  const handleOnClick = () => {
    amazonDataRefetch();
    lazadaDataRefetch();
    bestBuyDataRefetch();
  };

  return (
    <div className='app'>
      <h1 className='headline'>PRICE COMPARISON</h1>
      <div className='form-container'>
        <input
          type='text'
          className='form-input'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Searching for any device...'
        />
        <button className='form-submit-btn' onClick={handleOnClick}>
          Search
        </button>
      </div>
      <div className='results-container'>
        <Card
          key='amazon'
          data={cleanAmazonData(getLowestAmazonPrice(amazonData?.data.result))}
          isLoading={amazonDataIsLoading || amazonDataIsFetching}
        />
        <Card
          key='lazada'
          data={cleanLazadaData(
            getLowestLazadaPrice(lazadaData?.data.result.resultList)
          )}
          isLoading={lazadaDataIsLoading || lazadaDataIsFetching}
        />
        <Card
          key='bestbuy'
          data={cleanBestBuyData(getLowestBestBuyPrice(bestBuyData?.data))}
          isLoading={bestBuyDataIsLoading || bestBuyDataIsFetching}
        />
      </div>
    </div>
  );
}

export default App;
