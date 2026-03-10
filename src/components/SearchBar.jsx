import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {setQuery} from '../redux/features/searchSlice'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
const [SearchText, setSearchText] = useState('');


const dispatch = useDispatch()
const navigate = useNavigate()

function submitHandler(e){
  e.preventDefault();
  dispatch(setQuery(SearchText));
  setSearchText('')
navigate('/collection')
}
  
  return (
    <div>
<form className='bg-gray-800 py-7 px-10 flex w-[90vw] justify-self-center flex-col gap-6' onSubmit={(e)=>submitHandler(e)}>
      <h1 className='text-3xl font-semibold'>Social Media Apps</h1>
      <div className='flex gap-5'>
    <input type="text" placeholder='Search anything. . . . . . .'  className='bg-gray-600 py-2 w-100 px-5 rounded' required value={SearchText} onChange={(e)=>setSearchText(e.target.value)}/>
    <button   className='bg-gray-600 py-2  px-5 rounded active:scale-95 hover:bg-gray-500 transition-all'>Search</button>
    </div>
</form>
    </div>
  )
}   

export default SearchBar