import React from 'react'
import LeftSideContent from './LeftSideContent';
import RightsideContent from './RightsideContent';

const Section1 = () => {
  return (
   <div className='h-screen bg-red-300 w-full    flex-col sm:flex md:flex-row  p-5 gap-2'>
            <LeftSideContent />
            <RightsideContent />
        </div>
  )
}

export default Section1
