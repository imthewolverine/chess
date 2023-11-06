import React, { useState } from 'react';
import type { NextPage } from 'next'
import Link from 'next/link'

const PollAddOptions: NextPage = () => {

  return (
    <div className='space-x-2 my-4 flex' role='radio'>
        <input type="text" placeholder='Сонголт' className='h-10 p-3 w-full border border-slate-400 rounded-xl text-lg'/>
    </div>
  )
}

export default PollAddOptions
