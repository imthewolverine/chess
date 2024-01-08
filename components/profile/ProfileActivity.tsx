import type { NextPage } from 'next'

const ProfileActivity: NextPage = () => {
    return (
        <div className="container mx-auto grid grid-cols-12 gap-6">
            <div className='h-[800px] col-span-2'></div>
            <div className='col-span-8'>
                <div className='mb-[50px]'>
                  <p className='text-[#272343] font-semibold text-[32px] leading-[76.8px]'>Үйл ажиллагаа оруулах</p>
                  <div className='w-[114px] h-[4px] border-b-4 border-[#1E90FF]'></div>
                </div>
                <div className='p-[30px] pb-[15px] border border-[#D9D9D9] rounded-xl shadow-special'>
                    <label htmlFor="title" className='text-lg'>Гарчиг</label>
                    <input id="title" className="h-10 p-3 mt-3 w-full border border-slate-400 rounded-xl text-lg" type="text" />
                    <label htmlFor="title" className='text-lg'>Тайлбар</label>
                    <textarea id="title" className="h-20 p-3 mt-3 w-full border border-slate-400 rounded-xl text-lg"/>
                    <div>insert image</div>
                    <button type='submit' className='bg-blue-500 font-semibold text-white my-4 py-2 px-4 border rounded-xl w-full hover:bg-blue-700'>Хадгалах</button>

                </div>
            </div>
        </div>
  )
}

export default ProfileActivity
