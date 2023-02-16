import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Tools = () => {
  const [city, setCity] = useState("barrie");
  const [weatherData, setWeatherData] = useState([]);
  const [newsFeed, setNewsFeed] = useState([]);

  async function getWeatherData() {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.toLowerCase()}&appId=750b011386fdd29775e397a29adb8333`);
    setWeatherData(response.data);
  }

  async function getNewsFeed() {
    const response = await axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=37791e01876c47b29a7750e92b3f8f0d');
    setNewsFeed(response.data.articles);
  }

  function goToNewsArticle(url) {
    window.open(url, '_blank');
  }

  useEffect(() => {
    getWeatherData();
    getNewsFeed();
  }, [])


  return (
    <div className='mt-24 container mx-auto'>
      <h3 className='mt-32 text-center font-bold text-5xl'>Find weather for your favourite city!</h3>
      <section className='w-full mt-16 rounded-lg flex flex-col md:flex-row'>
        <section className='bg-[#1E3150] p-6 flex-1/2 rounded-l-lg'>
          <form className='inline'>
            <input type="text" placeholder='Enter city name' id='cityname' className='p-4' value={city} onChange={(e) => setCity(e.target.value)}/>
            <label htmlFor="cityname" className='bg-teal-200 py-4 px-8 ml-4 rounded-md cursor-pointer' onClick={getWeatherData}>Search</label>
          </form>
          <div className='mt-12 text-white'>
            <div>
              <h4 className='font-bold text-lg mb-4'>Weather Details</h4>
              <ul>
                <li className='flex justify-between mb-4 items-center'>
                  {weatherData?.weather?.length && <p className='capitalize'>{weatherData?.weather[0].description}</p>}
                  {weatherData?.weather?.length && <img src={`http://openweathermap.org/img/w/${weatherData?.weather[0].icon}.png`} alt="Weather Condition" />}
                </li>
                <li className='flex justify-between mb-6'>
                  <p>Humidity</p>
                  <p>{weatherData?.main?.humidity}%</p>
                </li>
                <li className='flex justify-between mb-4'>
                  <p>Wind</p>
                  <p>{weatherData?.wind?.speed}km/h</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className='flex-1 bg-slate-400 p-4 flex flex-col justify-end p-8'>
          <h1 className='text-9xl text-white'>
            {(weatherData?.main?.temp - 273.15).toFixed(0)} <span>&#176;</span>
          </h1>
          <div className='ml-4 mt-4 text-2xl'>
            <p>{weatherData?.name}, {weatherData?.sys?.country}</p>
            <div>
              <p>{}</p>
            </div>
          </div>
        </section>
      </section>
      <h3 className='mt-14 text-center font-bold text-5xl'>News Feed</h3>
      <section className='grid md:grid-cols-2 gap-16 my-10'>
        {
          newsFeed.map((news) => (
            <div key={news.title} className="shadow-md flex justify-between p-4 rounded-lg cursor-pointer" onClick={() => goToNewsArticle(news.url)}>
              <div className='mr-10'>
                <h2 className='font-bold text-2xl mb-4'>{news.title}</h2>  
                <p className='leading text-xl'>{news.description}</p>
                <p className='mt-5 font-bold'>Authored By: {news.author}</p>
              </div>
              <div className='self-center w-1/2'>
                <img src={news.urlToImage} alt="Article"/>
              </div>
            </div>
          ))
        }
      </section>
    </div>
  )
}

export default Tools