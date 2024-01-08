import type { NextPage } from 'next'
import Link from 'next/link'
import ChangeAbout from './molecules/ChangeAbout.js'

const ProfileAbout: NextPage = () => {
    return (
        <div className="container mx-auto grid grid-cols-12 gap-6">
            <div className='h-[800px] col-span-2'></div>
            <div className='col-span-8'>
                <div className='mb-[50px]'>
                    <p className='font-PT-Serif text-[#272343] font-extrabold text-[42px] leading-[76.8px]'>Мэдээлэл</p>
                    <div className='w-[114px] h-[4px] border-b-4 border-[#1E90FF]'></div>
                </div>
                <div className='flex flex-col gap-10'>
                    <ChangeAbout />
                </div>
            </div>
        </div>
    )
}

export default ProfileAbout
