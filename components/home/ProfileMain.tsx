import type { NextPage } from 'next'
import React, { useState } from 'react';
import ProfileAbout from '../profile/ProfileAbout';
import ProfileBlogs from '../profile/ProfileBlogs'
import ProfileLesson from '../profile/ProfileLesson'
import { AiFillCaretDown } from 'react-icons/ai'
const ProfileMain: NextPage = () => {

  const [profileTypes, setProfileTypes] = useState('Blogs')
  let navigateStyle = 'hover:text-[#1E90FF] py-[5px]'
  function handleProfile(e: any, profile: string) {
    setProfileTypes(profile);
    console.log('event', e);
    
  }
  function setNavigateClass(setClass: string) {
    return navigateStyle + (setClass === profileTypes ? ' text-[#1E90FF] border-[#1E90FF] border-b-2' : '');
  }
  
  return (
    <div>
      <div className='pb-[27px] shadow-special mb-[110px]'>
        <div className='h-[390px] w-full '>

        </div>
        <div className='flex container mx-auto justify-between'>
          <div className='flex gap-[24px]'>
            <div className='h-[312px] w-[312px] rounded-full bg-[#C4C4C4] -mt-[156px]'>

            </div>
            <div className=''>
              <div className='text-[#272343] font-bold text-[48px] leading-[76.8px]'>
                <p>20b1num1562</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex container mx-auto gap-10 mt-[73px] text-[16px] text-[#6D7280] pl-[130px]'>
          <button className={setNavigateClass('Blogs')} onClick={(e) => handleProfile(e, 'Blogs')}>Мэдээлэл</button>
          <button className={setNavigateClass('Questions')} onClick={(e) => handleProfile(e, 'Questions')}>Хичээл</button>
          <button className={setNavigateClass('About')} onClick={(e) => handleProfile(e, 'About')}>About</button>
        </div>
      </div>
      <div>
        {profileTypes==='Blogs' && <ProfileBlogs />}
        {profileTypes==='Questions' && <ProfileLesson />}
        {profileTypes==='About' && <ProfileAbout />}
      </div>
      
    </div>
  )
}

export default ProfileMain
