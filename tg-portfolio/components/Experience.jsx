import React from 'react'


const Experience = ({companies}) => {
  console.log(companies)
  return (
    <div>
<div className="carousel rounded-lg w-full">
  <div id="item1" className="carousel-item w-full bg-neutral/60 z-20">
  <div className='flex flex-col gap-5 p-5'>
    <h1 className=' font-bold text-black z-30 test text-4xl '>{companies[0].Company}</h1>
    <div>
      <h2 className='font-semibold aboutTitle text-3xl text-black/75 '>{companies[0].title}</h2>
    </div>
    <div>
      <p>{companies[0].experience}</p>
    </div>
    </div>
  </div> 
  <div id="item2" className="carousel-item w-full bg-neutral/60 z-20">
  <div className='flex flex-col gap-5 p-5'>
    <h1 className=' font-bold text-black z-30 test text-4xl '>{companies[1].Company}</h1>
    <div>
      <h2 className='font-semibold aboutTitle text-3xl text-black/75 '>{companies[1].title}</h2>
    </div>
    <div>
      <p>{companies[1].experience}</p>
    </div>
    </div>
  </div> 
  <div id="item3" className="carousel-item w-full bg-neutral/60 z-20">
  <div className='flex flex-col gap-5 p-5'>
    <h1 className=' font-bold text-black z-30 test text-4xl '>{companies[2].Company}</h1>
    <div>
      <h2 className='font-semibold aboutTitle text-3xl text-black/75 '>{companies[2].title}</h2>
    </div>
    <div>
      <p>{companies[2].experience}</p>
    </div>
    </div>
  </div>  
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
</div>
</div>
  )
}

export default Experience