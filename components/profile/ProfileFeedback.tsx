import type { NextPage } from 'next'
import FeedbackElement from '../feedback/FeedbackElement'

const ProfileFeedback: NextPage = () => {
  return (
    <div className="container mx-auto">
        <div className='mb-[50px]'>
            <p className='text-[#272343] font-semibold text-[32px] leading-[76.8px]'>Санал хүсэлтүүд</p>
            <div className='w-[114px] h-[4px] border-b-4 border-[#1E90FF]'></div>
        </div>
        <div className='grid grid-cols-3 gap-6'>
            <FeedbackElement />
            <FeedbackElement />
            <FeedbackElement />
            <FeedbackElement />
        </div>
    </div>
  )
}

export default ProfileFeedback
