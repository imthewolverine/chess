import type { NextPage } from 'next'
import Head from 'next/head'
import BlogDetails from '../components/blog/BlogDetails'
import Navbar from '../components/Navbar'

const Profile: NextPage = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <Head>
        <title>Ai Bisda</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <BlogDetails />
    </div>
  )
}

export default Profile
