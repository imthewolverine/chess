import type { NextPage } from 'next'
import { CiSearch } from 'react-icons/ci'
import Link from 'next/link'

const Navbar: NextPage = () => {
    return (
        <div className='bg-[#eeeeee] bg-opacity-80 sticky top-0 right-0 left-0 z-1 shadow-special rounded-b-xl'>
            <div className='container mx-auto flex h-16 items-center justify-between z-2'>
                <div className='flex text-[32px] font-extrabold'>
                    <div className='text-[#272343] font-PT-Serif-Caption'>Chess</div>
                </div>
                <div className='flex gap-6 text-[16px] '>
                    <Link className='hover:text-[#6D7280]' href='/'>Нүүр</Link>
                    <Link className='hover:text-[#6D7280]' href='/'>Бидний тухай</Link>
                    <Link className='hover:text-[#6D7280]' href='/'>Гишүүд</Link>
                    <Link className='hover:text-[#6D7280]' href='/profile'>20b1num1562</Link>
                </div>
            </div>
        </div>
    )
}
export default Navbar;