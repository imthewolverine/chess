import type { NextPage } from 'next'
import Head from 'next/head'
import GroupProfileMain from '../components/home/GroupProfileMain'
import Navbar from '../components/Navbar'

const GroupProfile: NextPage = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <Head>
        <title>Ai Bisda</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <GroupProfileMain />
    </div>
  )
}

export default GroupProfile
