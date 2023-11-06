import React, { useState } from 'react';
import type { NextPage } from 'next'
import Link from 'next/link'
import PollComponent from '../poll/PollComponent';

const Poll: NextPage = () => {

  return (
    <div className='grid grid-cols-3'>
      <PollComponent />

    </div>
  )
}

export default Poll
