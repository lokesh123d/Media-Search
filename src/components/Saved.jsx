import React from 'react'
import { useNavigate } from 'react-router-dom'
import { selectSavedItems } from "../redux/features/searchSlice";
import { useSelector } from "react-redux";
import ResultCard from './ResultCard';

const Saved = () => {
    const navigate = useNavigate();
   const savedItems = useSelector(selectSavedItems);
  return (
    <div className='flex flex-wrap justify-center items-center gap-7 mt-10'>
        
{
savedItems.map((val)=>(
  <ResultCard key={val.id} val={val} btnText={'Remove'}/>
))
}    </div>
  )
}

export default Saved