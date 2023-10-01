import type { NextPage } from 'next'
import Head from 'next/head'
import ProfileMain from '../../components/home/ProfileMain'
import Navbar from '../../components/Navbar'
import Image from 'next/image'
import backgroundPic from '../background.jpeg'

const Profile: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Ai Bisda</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
      className='-z-10 opacity-80'
      src={backgroundPic}
      layout='fill'
      alt="background"
      objectFit='cover'
      objectPosition='center'
      />
      <Navbar />
      <ProfileMain />
    </div>
  )
}

export default Profile
