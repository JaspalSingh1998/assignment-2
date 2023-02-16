import React from 'react'

const About = () => {
  return (
    <div className='mt-24 user-container container mx-auto'>
      <div className='user-details'>
        <h1>Jaspal Singh</h1>
        <p>
          I'm experienced Full stack Web developer. I have an expertize in MERN stack. I have been working as web developer 
          for more than 3 years. Let's get in touch an build something together.
        </p>
      </div>
      <div className='user-image'>
        <img src={process.env.PUBLIC_URL + '/goldy.jpg'} alt="Jaspal Singh" />
      </div>
    </div>
  )
}

export default About