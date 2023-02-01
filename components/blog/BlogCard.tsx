import type { NextPage } from 'next'
import { AiOutlineLike } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'
import Category from '../molecules/Category'

const BlogCard: NextPage = () => {
    return (
        <div className="h-[511px]">
            <div className='h-[332px] bg-[#C4C4C4]'>

            </div>
            <div className='-mt-10 h-[219px] bg-[#F7F7F7] w-[404px] p-[20px]'>
                <Category />
                <div>
                    <p className='text-[#272343] text-[28px] font-PT-Serif font-bold'>Top 10 beautiful Place in Bangladesh</p>
                </div>
                <div className='flex gap-2 text-[16px] text-[#6D7280] leading-[24px] mt-[10px] mb-[20px]'>
                    <p>March 25, 2021</p>
                    <p>•</p>
                    <p>4 min read</p>
                </div>
                <div className='flex justify-between'>
                    <button className='flex text-[#272343] font-medium text-4 items-center'>
                        <p className='mr-2'>Read Article</p>
                        <BsArrowRight className='w-5 h-5'/>
                    </button>
                    <div className='flex gap-[10px]'>
                        <button className='text-[#1E90FF]'>
                            <AiOutlineLike className='h-[24px] w-[24px]'/>
                        </button>
                        <p>24</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
