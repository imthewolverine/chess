import type { NextPage } from 'next'

const ActivityElement: NextPage = () => {
    return (
        <div className='grid grid-cols-7'>
            <div className='col-span-1 text-lg '>2023-1-10</div>
            <div className='col-span-6'>
                <div className='text-2xl font-medium '>Ууланд гарсан</div>
                <div className='text-lg'>Ууланд гараад бүжиглэсэн. Ууланд гараад бүжиглэсэн. Ууланд гараад бүжиглэсэн.Ууланд гараад бүжиглэсэн.Ууланд гараад бүжиглэсэн.Ууланд гараад бүжиглэсэн.</div>
                <div>image</div>
            </div>
        </div>
    )
}

export default ActivityElement
