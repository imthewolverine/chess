import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Link from 'next/link';
import ProfileAbout from '../../components/profile/ProfileAbout';
const Profile: NextPage = () => {
  return (
    <div className="min-h-screen">
        <Head>
          <title>Chess</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <div>
            <div className='pb-[27px] shadow-special mb-[110px]'>
                <div className='flex container mx-auto justify-between'>
                  <div className='flex gap-[24px] mt-10'>
                    <div className='h-[212px] w-[212px] rounded-full bg-[#C4C4C4] flex items-center justify-center'>
                        <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Түр зур энийг үзэж бай.</Link>
                    </div>
                    <div className='flex items-center'>
                      <div className='text-[#272343] font-bold text-[48px] leading-[76.8px] flex items-center'>
                        <p>20b1num1562</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex container mx-auto gap-10 mt-[73px] text-[16px] text-[#6D7280] pl-[130px]'>
                  <Link href='/profile/about' className="hover:text-[#1E90FF] py-[5px]  text-[#1E90FF] border-[#1E90FF] border-b-2">Мэдээлэл</Link>
                  <Link href='/profile/activity' className="hover:text-[#1E90FF] py-[5px]">Үйл ажиллагаа</Link>
                  <Link href='/profile/poll' className="hover:text-[#1E90FF] py-[5px]">Санал асуулга</Link>
                  <Link href='/profile/addMember' className="hover:text-[#1E90FF] py-[5px]">Гишүүн нэмэх</Link>
                  <Link href='/profile/schedule' className="hover:text-[#1E90FF] py-[5px]">Хуваарь шинэчлэх</Link>
                  <Link href='/profile/feedback' className="hover:text-[#1E90FF] py-[5px]">Санал хүсэлт</Link>
                </div>
            </div>
            <div>
              <ProfileAbout />

            </div>
        
        </div>
    </div>
  )
}

export default Profile
