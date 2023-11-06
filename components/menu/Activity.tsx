import React, { useState } from 'react';
import type { NextPage } from 'next'
import Link from 'next/link'
import ActivityElement from '../activity/ActivityElement';

const Activity: NextPage = () => {

    return (
        <div className='col-span-1 p-4 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee]'>
            <ActivityElement />
            <ActivityElement />
        </div>
    )
}

export default Activity
