import React from 'react'
import ReactConfetti from 'react-confetti';

const Home = () => {
  return (
    <div className='grid place-items-center min-h-screen'>
      <div className='text-center'>
        <h1 className='text-8xl mb-8 font-bold'>Hey I'm Jaspal Singh</h1>
        <p className='text-4xl'>I'm a web developer based out of India.</p>
      </div>
      <ReactConfetti />
    </div>
  )
}

export default Home