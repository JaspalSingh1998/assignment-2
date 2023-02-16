import React from 'react'

const Services = () => {
  return (
    <div className='mt-24 container mx-auto px-2'>
      <h2 className='text-center font-bold text-8xl mb-16'>What I offer</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
        <div className='text-center shadow-lg rounded-xl p-8'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207" alt="React" className='w-24 mb-4 mx-auto'/>
          <h4 className='mb-4 font-bold'>SPAs using React</h4>
          <p>React is leading industry standard for building Single page as well as Progressive web applications. I can build high performant websites for you.</p>
        </div>
        <div className='text-center shadow-lg rounded-xl p-8'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1024px-Vue.js_Logo_2.svg.png?20170919082558" alt="Vue" className='w-24 mb-4 mx-auto'/>
          <h4 className='mb-4 font-bold'>Vuejs</h4>
          <p>I also offer services in Vuejs if end user have specific tech stack requirements. Vuejs is open source alternative to React.</p>
        </div>
        <div className='text-center shadow-lg rounded-xl p-8'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1180px-Node.js_logo.svg.png?20170401104355" alt="Nodejs" className='w-24 mb-4 mx-auto'/>
          <h4 className='mb-4 font-bold'>Nodejs</h4>
          <p>If use nodejs to build robust and highly secured backend system. It has support for streams that allows us to build streaming applications as well.</p>
        </div>
        <div className='text-center shadow-lg rounded-xl p-8'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/1024px-Firebase_Logo.svg.png?20200221081546" alt="Firebase" className='w-24 mb-4 mx-auto'/>
          <h4 className='mb-4 font-bold'>Real time cloud database</h4>
          <p>.Firebase is Real time cloud database backed by Google. It allows us various feature ranging from security, authentication to user data and media files.</p>
        </div>
        <div className='text-center shadow-lg rounded-xl p-8'>
          <img src="https://seeklogo.com/images/L/laravel-framework-logo-C10176EC8C-seeklogo.com.png" alt="Laravel" className='w-24 mb-4 mx-auto'/>
          <h4 className='mb-4 font-bold'>Laravel</h4>
          <p>Laravel is full packed backend framework for PHP. It is one of the quickest way to get your application's backend up and running.</p>
        </div>
        <div className='text-center shadow-lg rounded-xl p-8'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Swift_logo.svg/382px-Swift_logo.svg.png?20210606004230" alt="Swift" className='w-24 mb-4 mx-auto'/>
          <h4 className='mb-4 font-bold'>iOS App development</h4>
          <p>If you want to have beautiful mobile application for iOS platform for your website then I can develop it using Apple backed swift technology.</p>
        </div>
        <div className='text-center shadow-lg rounded-xl p-8'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Android_logo_2019_%28stacked%29.svg/1374px-Android_logo_2019_%28stacked%29.svg.png?20210331145341" alt="Android" className='w-24 mb-4 mx-auto'/>
          <h4 className='mb-4 font-bold'>Android App development</h4>
          <p>Let's unleash the power of android and kotlin to build a fully secure, robust and performant application for your business.</p>
        </div>
        <div className='text-center shadow-lg rounded-xl p-8'>
          <img src="https://w7.pngwing.com/pngs/631/610/png-transparent-unreal-engine-4-htc-vive-unreal-match-3-others-miscellaneous-text-trademark.png" alt="Unreal" className='w-24 mb-4 mx-auto'/>
          <h4 className='mb-4 font-bold'>Unreal Engine</h4>
          <p>Let's build next subway surfer with improvements to earn money and give gamers something good to play.</p>
        </div>
      </div>
    </div>
  )
}

export default Services