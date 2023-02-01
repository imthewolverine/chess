import type { NextPage } from 'next'
import { AiOutlineLike } from 'react-icons/ai'
import AuthorProfile from '../molecules/AuthorProfile'


const AnswerCard: NextPage = () => {
    return (
        <div className="shadow-question border-t">
            <div className='flex flex-col gap-[13px] px-[30px] bg-white pb-[30px]  pt-4'>
                <AuthorProfile />
                <p className='text-[#6D7280] leading-[25.5px] text-[17px]'>No that’s now yours. If it is free on other web it means free and you edited it enough. No worries.</p>
                <div className='h-[400px] bg-[#C4C4C4]'>
                </div>
                <div className='flex gap-[42px] text-[18px]'>
                    <div className='flex gap-[14px]'>
                        <AiOutlineLike className='w-6 h-6 text-[#1E90FF] stroke-[2%]'/>
                        <p className='text-[#272343] font-bold'>69</p>
                        <AiOutlineLike className='w-6 h-6 text-[#EB654B] rotate-180 stroke-[2%]'/>
                    </div>
                    <button className='text-[#494B5C]'>Reply</button>
                    <button className='text-[#494B5C]'>Share</button>
                </div>
            </div>
        </div>
    )
}

export default AnswerCard
