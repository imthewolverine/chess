import type { NextPage } from 'next'
import Head from 'next/head'
import ProfileMain from '../../components/profile/ProfileMain'
import Navbar from '../../components/Navbar'
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ProfileAbout from '../../components/profile/ProfileAbout';
import ProfileActivity from '../../components/profile/ProfileActivity';
import ProfilePoll from '../../components/profile/ProfilePoll';
import ProfileSchedule from '../../components/profile/ProfileSchedule';
import ProfileAddMember from '../../components/profile/ProfileAddMember';
import ProfileFeedback from '../../components/profile/ProfileFeedback';
import Link from 'next/link';

const Profile: NextPage = () => {
    const router = useRouter();
    const addName = router.query.addName;
    let navigateStyle = 'hover:text-[#1E90FF] py-[5px]'

    function setNavigateClass(setClass: string) {
      return navigateStyle + (setClass === addName ? ' text-[#1E90FF] border-[#1E90FF] border-b-2' : '');
    }
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
                  <Link href='/profile/about' className={setNavigateClass('about')}>Мэдээлэл</Link>
                  <Link href='/profile/activity' className={setNavigateClass('activity')}>Үйл ажиллагаа</Link>
                  <Link href='/profile/poll' className={setNavigateClass('poll')}>Санал асуулга</Link>
                  <Link href='/profile/addMember' className={setNavigateClass('addMember')}>Гишүүн нэмэх</Link>
                  <Link href='/profile/schedule' className={setNavigateClass('schedule')}>Хуваарь шинэчлэх</Link>
                  <Link href='/profile/feedback' className={setNavigateClass('feedback')}>Санал хүсэлт</Link>
                </div>
              </div>
              <div>
                {addName==='about' && <ProfileAbout />}
                {addName==='activity' && <ProfileActivity />}
                {addName==='poll' && <ProfilePoll />}
                {addName==='addMember' && <ProfileAddMember />}
                {addName==='schedule' && <ProfileSchedule />}
                {addName==='feedback' && <ProfileFeedback />}

              </div>

            </div>

        </div>
    )
}

export default Profile
