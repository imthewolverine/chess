import type { NextPage } from 'next'
import TitleSection from './TitleSection'

const BlogDetails: NextPage = () => {
    return (
        <div>
            <div className="h-[360px] bg-[#C4C4C4]">

            </div>
            <div className='container mx-auto grid-cols-12'>
                <div className='col-span-10'>
                    <TitleSection />
                </div>
            </div>
        </div>
    )
}

export default BlogDetails
