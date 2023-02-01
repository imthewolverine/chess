import type { NextPage } from 'next'

const TitleSection: NextPage = () => {
    return (
        <div className="bg-white">
            <div className='flex gap-[13px]'>
                <div className='h-10 w-10 bg-[#C4C4C4] rounded-full'></div>
                <div className='flex flex-col justify-between'>
                    <p className='text-[16px] text-[#272343] leading-[16px] font-medium font-Poppins'>Ai Bisda</p>
                    <p className='text-[#6D7280] text-[15px] leading-[15px]'>2 hours ago</p>
                </div>
            </div>
        </div>
    )
}

export default TitleSection
