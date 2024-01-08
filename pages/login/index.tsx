import type { NextPage } from 'next'
import Head from 'next/head'
import backgroundPic from '../../images/download.jpeg'
import logoPic from '../../images/NumChessClubLogo.png'
import Image from 'next/image'
const Login: NextPage = () => {
    return (
        <div className="min-h-screen grid grid-cols-7">
            <div className='pt-20 col-span-2 h-screen border bg-[#eeeeee] flex justify-center'>
                <div className=' space-y-6'>
                    <Image
                        alt='logo'
                        src={logoPic}
                        className='h-[180px] w-[180px] mx-auto'
                    />
                    <div className='mx-auto text-center text-4xl font-semibold'>NUM CHESS CLUB</div>
                    <div className='flex-row space-y-2'>
                        <label htmlFor="login">Sisi ID</label>
                        <input id="login" className="h-10 p-3 w-full border border-slate-400 rounded-xl text-lg" type="text" placeholder='Sisi ID' />
                    </div>
                    <div className='flex-row space-y-2'>
                        <label className="" htmlFor="password">Нууц үг</label>
                        <input id="password" className="h-10 p-3 w-full border border-slate-400 rounded-xl text-lg" type="password" placeholder='Password'/>
                    </div>
                    <button type='submit' className='bg-blue-500 font-semibold text-white py-2 px-4 border rounded-xl w-full hover:bg-blue-700'>Нэвтрэх</button>
                </div>
            </div>
            <div className='col-span-5 h-screen w-screen object-fill'>
                <Image 
                  className=''
                  src={backgroundPic}
                  layout=''
                  alt="background"
                  objectFit='cover'
                  objectPosition='center'
                />
            </div>
        </div>
    )
}

export default Login
