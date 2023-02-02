import type { NextPage } from 'next'
import BlogCard from '../blog/BlogCard'

const ProfileBlogs: NextPage = () => {
  return (
    <div className="container mx-auto">
      <div className='mb-[50px]'>
        <p className='font-PT-Serif text-[#272343] font-extrabold text-[42px] leading-[76.8px]'>Blogs</p>
        <div className='w-[114px] h-[4px] border-b-4 border-[#1E90FF]'></div>
      </div>
      <div className='grid grid-cols-3 gap-6'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  )
}

export default ProfileBlogs
