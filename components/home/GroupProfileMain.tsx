import type { NextPage } from 'next'
import React, { useState } from 'react';
import ProfileAbout from '../profile/ProfileAbout';
import ProfileBlogs from '../profile/ProfileBlogs'
import ProfileLesson from '../profile/ProfileLesson'
import { AiFillCaretDown } from 'react-icons/ai'

const GroupProfileMain: NextPage = () => {

  const [groupProfileTypes, setgroupProfileTypes] = useState('Blogs')
  let navigateStyle = 'hover:text-[#1E90FF] py-[5px]'
  function handleProfile(e: any, profile: string) {
    setgroupProfileTypes(profile);
    console.log('event', e);
    
  }
  function setNavigateClass(setClass: string) {
    return navigateStyle + (setClass === groupProfileTypes ? ' text-[#1E90FF] border-[#1E90FF] border-b-2' : '');
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
                <p>99 blogs a day</p>
                <p>•</p>
                <p>99 questions a day</p>
                <p>•</p>
                <p>99 followers</p>
                <p>•</p>
                <p></p>
              </div>
            </div>
          </div>
          <div className='flex gap-[16px] mt-[19px]'>
            <input type="button" className='w-[128px] h-[40px] bg-[#1E90FF] text-white hover:bg-[#55A0FF]' value='Join'/>
            <input type="button" className='w-[128px] h-[40px] border-2 border-[#1E90FF] text-[#272343] hover:bg-[#1E90FF] hover:text-white' value='notify'/>
            <div>
              <div className='w-[40px] h-[40px] text-[#272343] flex justify-center items-center bg-[#F5F5F5] hover:bg-[#C4C4C4]'>
                <AiFillCaretDown className='text-[#272343] w-5 h-5'/>
              </div>
            </div>
            <div id="dropdown" className="z-10 bg-white absolute divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 border-2 mt-12 mr-0">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                  </li>
                </ul>
              </div>
            
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
        {groupProfileTypes==='Blogs' && <ProfileBlogs />}
        {groupProfileTypes==='Questions' && <ProfileLesson />}
        {groupProfileTypes==='About' && <ProfileAbout />}
      </div>
      
    </div>
  )
}

export default GroupProfileMain
