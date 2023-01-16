import React from 'react'

const CustomButton = ({ btnType, title, handleClick, styles }) => {
  return (
    <button
      type={btnType}
      className={`font-semibold text-[16px] leading-[26px] text-white min-h-[53px] mt-1 px-4 rounded-full shadow-md shadow-gray-300 hover:shadow-none hover:bg-emerald-600 ${styles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton;