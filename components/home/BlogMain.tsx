import type { NextPage } from 'next'
import BlogPost from '../blog/BlogPost'

const BlogMain: NextPage = () => {
  return (
    <div className='my-[50px] flex flex-col gap-10'>
        <BlogPost />
        <BlogPost />
        <BlogPost />
    </div>
  )
}

export default BlogMain
