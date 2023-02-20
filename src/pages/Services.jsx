import React, {useState} from 'react'
import data from '../data/services'

const Services = () => {
  const [services] = useState(data);
  return (
    <div className='mt-24 container mx-auto px-2'>
      <h2 className='text-center font-bold text-8xl mb-16'>What I offer</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
        {services.map((service, index) => (
          <div className='text-center shadow-lg rounded-xl p-8'>
            <img src={service.imgUrl} alt="React" className='w-24 mb-4 mx-auto'/>
            <h4 className='mb-4 font-bold'>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services