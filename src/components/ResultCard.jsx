import React, { memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { addSavedItem, removeSavedItem, showToast } from '../redux/features/searchSlice'


const ResultCard = memo(({val,btnText}) => {

const dispatch = useDispatch()
  const handleSave = useCallback((newItem) => {
    dispatch(addSavedItem(newItem))
    dispatch(showToast({ message: 'Item saved successfully!', type: 'success' }))
  }, [dispatch])

  const handleRemove = useCallback((removeItem) => {
    dispatch(removeSavedItem(removeItem))
    dispatch(showToast({ message: 'Item removed successfully!', type: 'error' }))
  }, [dispatch])

  return (
    <div className='flex flex-col w-90 h-90 text-center'>
      <div className='w-90 bg-gray-300  h-70 '>
        {val.type=='photo'?<img src={val.src} alt='' className='h-full w-full object-cover object-center'/> :''}
        {val.type=='video'?<video src={val.src} autoPlay loop muted  className='h-full w-full object-cover object-center' ></video>:''}
        {val.type=='gif'?<img src={val.src}  className='h-full w-full object-cover object-center' alt=''/> :''}
      </div>
      <div className='flex absolute b-0 w-90 px-2 mt-56 justify-between overflow-scroll h-10 '   style={{
    scrollbarWidth: "none"
  }}>
      <h3 className='  font-bold uppercase'>{val.type}
      </h3>
<button
  className="bg-blue-600 px-4 h-10 rounded active:scale-95"
  onClick={btnText === "Remove" ? () => handleRemove(val.id) : () => handleSave(val)}
>
  {btnText}
</button>
      </div>
    </div>
  )
})

export default ResultCard