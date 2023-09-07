import type { NextPage } from 'next'
import Head from 'next/head'
import ProfileMain from '../components/home/ProfileMain'
import Navbar from '../components/Navbar'

const Profile: NextPage = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <Head>
        <title>Ai Bisda</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ProfileMain />
    </div>
  )
}

export default Profile
