import type { NextPage } from 'next'
import { AiOutlineLike } from 'react-icons/ai'
import AuthorProfile from '../molecules/AuthorProfile'

const ReplyCard: NextPage = () => {
    return (
        <div className="flex bg-white border-t py-6">
            <div className='px-4 text-[12px] flex flex-col items-center'>
                <AiOutlineLike className='w-4 h-4 text-[#1E90FF] stroke-[4%]'/>
                <p className='font-bold text-[#272343] '>69</p>
                <AiOutlineLike className='w-4 h-4 text-[#EB654B] rotate-180 stroke-[4%]'/>
            </div>
            <div className='w-full items-center px-[9px] border-l'>
                <AuthorProfile />
                <div className='pt-6 pb-3'>
                    <p className='text-[#6D7280] text-[17px]'>
                        Өсөхөөс сурсан үндэсний хэл
                        Мартаж болшгүй соёл
                        Үхтэл орших төрөлх нутаг
                        Салж болшгүй орон
                        Өсөхөөс сурсан үндэсний хэл
                        Мартаж болшгүй соёл
                        Үхтэл орших төрөлх нутаг
                        Салж болшгүй орон
                        Өсөхөөс сурсан үндэсний хэл
                        Мартаж болшгүй соёл
                        Үхтэл орших төрөлх нутаг
                        Салж болшгүй орон
                    </p>
                </div>
                <div className=''>
                    <button className='text-[#494B5C] text-[15px]'>Reply</button>
                </div>
            </div>
        </div>
    )
}

export default ReplyCard
