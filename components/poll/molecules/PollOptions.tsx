import React, { useState } from 'react';
import type { NextPage } from 'next'
import Link from 'next/link'

const PollOptions: NextPage = () => {

  return (
    <div className='space-x-2' role='radio'>
      <input type="radio" id='option1' name="question1"/>
      <label htmlFor="option1">120cm</label>
    </div>
  )
}

export default PollOptions
