import type { NextPage } from 'next'
import { AiOutlineLike } from 'react-icons/ai'
import Category from '../../leaderboard/molecules/Category'

const AddMember: NextPage = () => {
    return (
        <div className="p-[30px] pb-[15px] sborder border border-[#D9D9D9] rounded-xl shadow-special">
            <table className='table-auto'>
                <thead className=''>
                    <tr className='text-xl text-left'>
                        <th className='pb-4'>Төрөл</th>
                        <th className='pb-4'>Мэдээлэл</th>
                    </tr>

                </thead>
                <tbody className=''>
                    <tr className=''>
                        <td className='py-1'><label htmlFor='lastName' className='text-lg mr-10'>Овог:</label></td>
                        <td className='py-1'><input id="lastName" className="h-10 p-3 w-full border border-slate-400 rounded-xl text-lg" type="text" /></td>
                    </tr>
                    <tr>
                        <td className='py-1'><label htmlFor='firstName' className='text-lg mr-10'>Нэр:</label></td>
                        <td className='py-1'><input id="firstName" className="h-10 p-3 w-full border border-slate-400 rounded-xl text-lg" type="text" /></td>
                    </tr>
                    <tr>
                        <td className='py-1'><label htmlFor='sex' className='text-lg mr-10'>Хүйс:</label></td>
                        <td className='py-1'><input id="sex" className="h-10 p-3 w-full border border-slate-400 rounded-xl text-lg" type="text" /></td>
                    </tr>
                    <tr>
                        <td className='py-1'><label htmlFor='sisiID' className='text-lg mr-10'>Sisi ID:</label></td>
                        <td className='py-1'><input id="sisiID" className="h-10 p-3 w-full border border-slate-400 rounded-xl text-lg" type="text" /></td>
                    </tr>
                    <tr className=''>
                        <td className='py-1'><label htmlFor='branch' className='text-lg mr-10'>Салбар:</label></td>
                        <td className='py-1'><input id="branch" className="h-10 p-3 w-full border border-slate-400 rounded-xl text-lg" type="text" /></td>
                    </tr>
                    <tr>
                        <td className='py-1'><label htmlFor='phonenumber' className='text-lg mr-10'>Утас:</label></td>
                        <td className='py-1'><input id="phonenumber" className="h-10 p-3 w-full border border-slate-400 rounded-xl text-lg" type="text" /></td>
                    </tr>
                    <tr>
                        <td className='py-1'><label htmlFor='rating' className='text-lg mr-10'>Рейтинг:</label></td>
                        <td className='py-1'><input id="rating" className="h-10 p-3 w-full border border-slate-400 rounded-xl text-lg" type="number" /></td>
                    </tr>
                    <tr className=''>
                        <td className='py-1'><label htmlFor='level' className='text-lg mr-10'>Түвшин:</label></td>
                        <td className='py-1'><input id="level" className="h-10 p-3 w-full border border-slate-400 rounded-xl text-lg" type="text" /></td>
                    </tr>
                    <tr>
                        <td className='py-1'><label htmlFor='Role' className='text-lg mr-10'>Үүрэг:</label></td>
                        <td className='py-1'><input id="Role" className="h-10 p-3 w-full border border-slate-400 rounded-xl text-lg" type="text" /></td>
                    </tr>
                    <tr className=''>
                        <td className='py-1'><label htmlFor='email' className='text-lg mr-10'>Майл хаяг:</label></td>
                        <td className='py-1'><input id="email" className="h-10 p-3 w-full border border-slate-400 rounded-xl text-lg" type="text" /></td>
                    </tr>
                </tbody>
            </table>
            <button type='submit' className='bg-blue-500 font-semibold text-white my-4 py-2 px-4 border rounded-xl w-1/2 hover:bg-blue-700'>Нэмэх</button>

        </div>
    )
}

export default AddMember
