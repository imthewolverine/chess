import type { NextPage } from 'next'
import AnswerCard from '../answer/AnswerCard'
import ReplyCard from '../answer/ReplyCard'
import QuestionCard from '../question/QuestionCard'
const AnswerMain: NextPage = () => {
  return (
    <div className='flex flex-col gap-10 my-[50px]'>
        <div>
          <QuestionCard />
          <AnswerCard />
          <ReplyCard />
          <ReplyCard />
        </div>
        <div>
          <QuestionCard />
          <AnswerCard />
        </div>
        <div>
          <QuestionCard />
          <AnswerCard />
        </div>
    </div>
  )
}

export default AnswerMain
