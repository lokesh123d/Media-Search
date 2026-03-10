import React, { useEffect } from "react";
import {
  setActiveTab,
  setClearResult,
  setError,
  setLoading,
  setQuery,
  setResult,
} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchGIF, fetchPhotos, fetchVideos } from "../api/mediaApi";
import ResultCard from "./ResultCard";
import Tabs from "./Tabs";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, result } = useSelector((state) => state.search);

  useEffect(() => {
    async function fetchData() {
      let response;
      if (activeTab == "gif") {
        response = await fetchGIF(query);
      } else if (activeTab == "photos") {
        response = await fetchPhotos(query);
      } else {
        response = await fetchVideos(query);
      }
      dispatch(setResult(response));
    }
    fetchData();
  }, [query, activeTab]);
  return <div className="w-full" >
    <Tabs/>
    <div className="flex flex-wrap gap-10 justify-center items-center">
{result.map((val)=>(
  <ResultCard key={val.id} val={val} btnText={'Save'}/>
))}

</div>

  </div>;
};

export default ResultGrid;
