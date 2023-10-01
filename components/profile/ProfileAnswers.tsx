import type { NextPage } from 'next'
import BlogCard from '../blog/BlogCard'
import QuestionCard from '../question/QuestionCard'

const ProfileAnswers: NextPage = () => {
    return (
        <div className="container mx-auto grid grid-cols-12 gap-6">
            <div className='h-[800px] col-span-2 bg-[#F5F5F5]'></div>
            <div className='col-span-8'>
                <div className='mb-[50px]'>
                    <p className='font-PT-Serif text-[#272343] font-extrabold text-[42px] leading-[76.8px]'>Answers</p>
                    <div className='w-[114px] h-[4px] border-b-4 border-[#1E90FF]'></div>
                </div>
                <div className='flex flex-col gap-10'>
                    <div>
                        <QuestionCard />
                        <AnswerCard />
                    </div>
                    <div>
                        <QuestionCard />
                        <AnswerCard />
                    </div>
                    <div>
                        <QuestionCard />
                        <AnswerCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileAnswers
