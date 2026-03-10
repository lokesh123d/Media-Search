import React from 'react'
import { setActiveTab } from '../redux/features/searchSlice'
import { useDispatch, useSelector } from 'react-redux'

const Tabs = () => {

  const tabs = ['photos','videos','gif']

  const dispatch = useDispatch()
  const activeTab = useSelector((state)=>state.search.activeTab)

  function activeTabHandle(tab){
    dispatch(setActiveTab(tab))
  }

  return (
    <div className='flex gap-6 p-10'>
      {
        tabs.map((val ,idx)=>(
          <button
            key={idx}
            className={`${activeTab === val ? 'bg-blue-500' : 'bg-emerald-400'} uppercase font-bold active:scale-95 transition-all cursor-pointer px-5 py-3 rounded`}
            onClick={()=>activeTabHandle(val)}
          >
            {val}
          </button>
        ))
      }
    </div>
  )
}

export default Tabs