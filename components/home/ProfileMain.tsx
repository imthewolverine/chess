import type { NextPage } from 'next'
import React, { useState } from 'react';
import ProfileAbout from '../profile/ProfileAbout';
import ProfileAnswers from '../profile/ProfileAnswers'
import ProfileBlogs from '../profile/ProfileBlogs'
import ProfileQuestions from '../profile/ProfileQuestions'
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
        <div className='h-[390px] w-full bg-[#F5F5F5]'>

        </div>
        <div className='flex container mx-auto justify-between'>
          <div className='flex gap-[24px]'>
            <div className='h-[312px] w-[312px] rounded-full bg-[#C4C4C4] -mt-[156px]'>

            </div>
            <div className=''>
              <div className='font-PT-Serif text-[#272343] font-extrabold text-[64px] leading-[76.8px]'>
                <p>Ai Bisda</p>
              </div>
              <div className='flex gap-2 text-[16px] text-[#6D7280] leading-[24px]'>
                <p>99 blogs</p>
                <p>•</p>
                <p>99 questions</p>
                <p>•</p>
                <p>99 followers</p>
                <p>•</p>
                <p>69 following</p>
              </div>
            </div>
          </div>
          <div className='flex gap-[32px] mt-[19px]'>
            <input type="button" className='w-[128px] h-[40px] bg-[#1E90FF] text-white' value='follow'/>
            <input type="button" className='w-[128px] h-[40px] border-2 border-[#EB654B]' value='block'/>
          </div>
        </div>
        <div className='flex container mx-auto gap-10 mt-[73px] text-[16px] text-[#6D7280] pl-[130px]'>
          <button className={setNavigateClass('Blogs')} onClick={(e) => handleProfile(e, 'Blogs')}>Blogs</button>
          <button className={setNavigateClass('Questions')} onClick={(e) => handleProfile(e, 'Questions')}>Questions</button>
          <button className={setNavigateClass('Answers')} onClick={(e) => handleProfile(e, 'Answers')}>Answers</button>
          <button className={setNavigateClass('About')} onClick={(e) => handleProfile(e, 'About')}>About</button>
        </div>
      </div>
      <div>
        {profileTypes==='Blogs' && <ProfileBlogs />}
        {profileTypes==='Questions' && <ProfileQuestions />}
        {profileTypes==='Answers' && <ProfileAnswers />}
        {profileTypes==='About' && <ProfileAbout />}
      </div>
      
    </div>
  )
}

export default ProfileMain
