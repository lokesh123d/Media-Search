import React, { useEffect, memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { hideToast, selectToast } from '../redux/features/searchSlice'

const Toast = memo(() => {
  const toast = useSelector(selectToast)
  const dispatch = useDispatch()

  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        dispatch(hideToast())
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [toast.visible, dispatch])

  if (!toast.visible) return null

  const bgColor = toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'

  return (
    <div className='fixed top-6 left-1/2 -translate-x-1/2 z-50'>
      <div className={`${bgColor} text-white px-6 py-3 rounded-lg shadow-lg text-sm font-medium`}>
        {toast.message}
      </div>
    </div>
  )
})

export default Toast