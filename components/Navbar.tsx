import type { NextPage } from 'next'
import { CiSearch } from 'react-icons/ci'
import Link from 'next/link'

const Navbar: NextPage = () => {
    return (
        <div className='bg-white sticky top-0 right-0 left-0 z-50 shadow-special'>
            <div className='container mx-auto flex h-20 items-center justify-between'>
                <div className='flex text-[32px] font-extrabold'>
                    <div className='text-[#1E90FF] font-PT-Serif'>Ai&nbsp;</div>
                    <div className='text-[#272343] font-PT-Serif-Caption'>Bisda</div>
                </div>
                <div className='flex bg-[#F5F5F5] items-center'>
                    <input placeholder='Search here...' className='bg-[#F5F5F5] w-[424px] h-12 px-11 text-[16px]'/>
                    <div className='text-[#272343] pl-4 absolute'>
                        <CiSearch className='h-[24px] w-[24px] font-bold'/>
                    </div>
                </div>
                <div className='flex gap-6 text-[16px] text-[#6D7280] '>
                    <Link className='' href='/'>Home</Link>
                    <Link className='' href=''>Categories</Link>
                    <Link className='' href=''>Notifications</Link>
                    <Link className='' href='/profile'>Profile</Link>
                </div>
            </div>
        </div>
    )
}
export default Navbar;