import type { NextPage } from 'next'
import { AiOutlineLike } from 'react-icons/ai'
import Category from '../molecules/Category'

const QuestionCard: NextPage = () => {
    return (
        <div className="p-[30px] pb-[15px] shadow-question">
            <Category />
            <div>
                <p className='text-[#272343] text-[28px] font-PT-Serif font-bold mt-[10px] mb-[15px]'>Ай Бисда How to Get Started With UI/UQ</p>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 text-[16px] text-[#6D7280] leading-[24px]'>
                    <p>March 25, 2021</p>
                    <p>•</p>
                    <p>4 answers</p>
                </div>
                <div className='flex gap-[10px] items-center pr-2'>
                    <button className='text-[#1E90FF]'>
                        <AiOutlineLike className='h-[24px] w-[24px]'/>
                    </button>
                    <p>24</p>
                </div>
            </div>
        </div>
    )
}

export default QuestionCard
