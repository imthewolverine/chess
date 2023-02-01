import type { NextPage } from 'next'
import { AiOutlineLike } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'
import AuthorProfile from '../molecules/AuthorProfile'
import Category from '../molecules/Category'

const BlogPost: NextPage = () => {
    return (
        <div className="w-full p-[30px] shadow-special">
            <div className='flex justify-between'>
                <AuthorProfile />
                <Category />
            </div>
            <div className='mt-5 '>
                <p className='font-bold text-[#272343] text-[28px] font-PT-Serif mb-[15px]'>How to Get Started With UI/UX</p>
                <p className='font-bold text-[#272343] text-[20px] font-PT-Serif mb-[15px]'>20 web designer skills to have</p>
                <p className='text-[16px] font-Poppins text-[#494B5C] mb-[15px]'>Here's a medley of 20 skills to help you become a design expert, no matter where you're at in your career.</p>
                <p className='text-[16px] font-Poppins text-[#494B5C] mb-[15px] border-l-[5px] border-[#1E90FF] pl-[20px]'>Being a web designer involves harmoniously combining visuals and content. But non-technical skills, like collaboration and communication, are also important.</p>
                <p className='font-bold text-[#272343] text-[20px] font-PT-Serif mb-[15px]'>1. Know the principles of design</p>
                <div className='w-full bg-[#C4C4C4] h-[420px] mb-[15px]'></div>
                <p className='text-[16px] font-Poppins text-[#494B5C] mb-[15px]'>You don’t need to know music theory to write a song, and if you’ve never taken an art class, you can still draw. Some of us might have an innate artistic ability, but knowing the basic fundamentals can make the difference between recreating what you see and being able to build a design tha...</p>
            </div>
            <div className='flex justify-center'>
                <button className=' w-full px-10 py-[8px] font-Poppins text-[#1E90FF] font-medium border-[#1E90FF] border'>See more</button>
            </div>
        </div>
    )
}

export default BlogPost
