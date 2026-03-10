import React from "react";
import { fetchGIF, fetchPhotos, fetchVideos } from "./api/mediaApi";
import SearchBar from "./components/SearchBar";
import ResultGrid from "./components/ResultGrid";
import Tabs from "./components/Tabs";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Saved from "./components/Saved";
import Toast from "./components/Toast";

const App = () => {

const navigate = useNavigate()

  return (
    <div className="bg-gray-950 w-full h-full min-h-screen text-white">
      <Toast/>
      <Navbar/>
      <div className=' px-10 w-full h-10 flex justify-end items-center'>
<button className='bg-red-500 px-3 py-1 rounded-md active:scale-95' onClick={()=>navigate('/savedCollection')}>Saved Collection
</button>



    </div>
      <Routes>
        <Route path="/" element={<SearchBar/>}/>
        <Route path="/collection" element={<ResultGrid/>}/>
        <Route path="/savedCollection" element={<Saved/>}/>
      </Routes>
      {/* <Tabs /> */}
      

    </div>
  );
};

export default App;
