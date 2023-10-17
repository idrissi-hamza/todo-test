import React from 'react'

const Skeleton = () => {
  return (
    <div role="status" className=" p-4 space-y-4 divide-y divide-gray-200  animate-pulse px-10 ">
      <div className="flex items-center justify-between ">
        <div>
          <div className="h-2.5 bg-gray-300 rounded-full  w-24 mb-2.5" />
          <div className="w-32 h-2 bg-gray-200 rounded-full" />
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full w-12" />
      </div>
      <div className="flex items-center justify-between pt-4">
        <div>
          <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5" />
          <div className="w-32 h-2 bg-gray-200 rounded-full" />
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full w-12" />
      </div>
    </div>)
}

export default Skeleton