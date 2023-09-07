import type { NextPage } from 'next'
import { AiOutlineLike } from 'react-icons/ai'
import Category from '../molecules/Category'

const QuestionCard: NextPage = () => {
    return (
        <div className="p-[30px] pb-[15px] sborder border border-[#D9D9D9] rounded-xl shadow-special">
            <Category />
            <div>
                <p className='text-[#272343] text-[28px] font-PT-Serif font-bold mt-[10px] mb-[15px]'>Бэрсний гамбит</p>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 text-[16px] text-[#6D7280] leading-[24px]'>
                    <p>March 25, 2021</p>
                    <p>•</p>
                </div>
            </div>
        </div>
    )
}

export default QuestionCard
