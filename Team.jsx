import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
import Odam from '../assets/odam2.png'

export default function Team() {
  useEffect(() => {
    const glide01 = new Glide('.glide-01', {
      type: 'slider',
      focusAt: 'center',
      perView: 1,
      autoplay: 3000,
      animationDuration: 700,
      gap: 0,
      classes: {
        activeNav: '[&>*]:bg-slate-700',
      },
    });

    glide01.mount();


    return () => {
      glide01.destroy();
    };
  }, []); 

  return (
    <div className="relative max-w-full lg:w-[1240px] bg-transparent mt-5 mx-auto glide-01">
              <div data-aos='fade-right'  className=' mt-10 mx-5 items-center text-white'>
                <p className=' text-blue-900 lg:text-start text-center font-bold text-2sm lg:text-4xl'>Teams</p>
                <div className='h-[3px] m-5 mx-auto lg:mx-0 w-full md:w-[600px] lg:w-[500px]  bg-blue-900 block mb-3'></div>
              </div>
     
      <div className="overflow-hidden" data-glide-el="track">
    
        <ul className="relative w-full overflow-hidden p-0 whitespace-no-wrap flex flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform]">
          <li className='flex gap-3 lg:sm-0'>     
          
          <div className='mx-auto w-auto  h-auto lg:h-[400px] bg-white rounded-sm ' >
                <img src={Odam} alt=""  className=' w-46 mt-3 h-30 lg:w-92 lg:mt-6 lg:h-60 mx-auto rounded-md'/>
                <a className='m-4 text-xl leading-4 text-center justify-center font-bold text-blue-900 flex' >
                Potato potatoev potato og`li
                </a>
                <p className='text-black text-sm text-center'>Lorem ipsum dolor sit, amet consectetur</p>
            </div>
            <div className='mx-auto w-auto  h-auto lg:h-[400px] bg-white rounded-sm ' >
                <img src={Odam} alt=""  className=' w-46 mt-3 h-30 lg:w-92 lg:mt-6 lg:h-60 mx-auto rounded-md'/>
                <a className='m-4 text-xl leading-4 text-center justify-center font-bold text-blue-900 flex' >
                Potato potatoev potato og`li
                </a>
                <p className='text-black text-sm text-center'>Lorem ipsum dolor sit, amet consectetur</p>
            </div>
            <div className='mx-auto w-auto  h-auto lg:h-[400px] bg-white  rounded-sm ' >
                <img src={Odam} alt=""  className=' w-46 mt-3 h-30 lg:w-92 lg:mt-6 lg:h-60 mx-auto rounded-md'/>
                <a className='m-4 text-xl leading-4 text-center justify-center font-bold text-blue-900 flex' >
                Potato potatoev potato og`li
                </a>
                <p className='text-black text-sm text-center'>Lorem ipsum dolor sit, amet consectetur</p>
            </div>  
            <div className='mx-auto w-auto  h-auto lg:h-[400px] bg-white  rounded-sm ' >
                <img src={Odam} alt=""  className=' w-46 mt-3 h-30 lg:w-92 lg:mt-6 lg:h-60 mx-auto rounded-md'/>
                <a className='m-4 text-xl leading-4 text-center justify-center font-bold text-blue-900 flex' >
                Potato potatoev potato og`li
                </a>
                <p className='text-black text-sm text-center'>Lorem ipsum dolor sit, amet consectetur</p>
            </div>  
          </li>
          <li className='flex gap-3'>     
            <div className='mx-auto w-auto  h-auto lg:h-[400px] bg-white rounded-sm ' >
                <img src={Odam} alt=""  className=' w-46 mt-3 h-30 lg:w-92 lg:mt-6 lg:h-60 mx-auto rounded-md'/>
                <a className='m-4 text-xl leading-4 text-center justify-center font-bold text-blue-900 flex' >
                Potato potatoev potato og`li
                </a>
                <p className='text-black text-sm text-center'>Lorem ipsum dolor sit, amet consectetur</p>
            </div>
            <div className='mx-auto w-auto  h-auto lg:h-[400px] bg-white rounded-sm ' >
                <img src={Odam} alt=""  className=' w-46 mt-3 h-30 lg:w-92 lg:mt-6 lg:h-60 mx-auto rounded-md'/>
                <a className='m-4 text-xl leading-4 text-center justify-center font-bold text-blue-900 flex' >
                Potato potatoev potato og`li
                </a>
                <p className='text-black text-sm text-center'>Lorem ipsum dolor sit, amet consectetur</p>
            </div>
            <div className='mx-auto w-auto  h-auto lg:h-[400px] bg-white rounded-sm ' >
                <img src={Odam} alt=""  className=' w-46 mt-3 h-30 lg:w-92 lg:mt-6 lg:h-60 mx-auto rounded-md'/>
                <a className='m-4 text-xl leading-4 text-center justify-center font-bold text-blue-900 flex' >
                Potato potatoev potato og`li
                </a>
                <p className='text-black text-sm text-center'>Lorem ipsum dolor sit, amet consectetur</p>
            </div>  
            <div className='mx-auto w-auto  h-auto lg:h-[400px] bg-white rounded-sm ' >
                <img src={Odam} alt=""  className=' w-46 mt-3 h-30 lg:w-92 lg:mt-6 lg:h-60 mx-auto rounded-md'/>
                <a className='m-4 text-xl leading-4 text-center justify-center font-bold text-blue-900 flex' >
                Potato potatoev potato og`li
                </a>
                <p className='text-black text-sm text-center'>Lorem ipsum dolor sit, amet consectetur</p>
            </div>  
          </li>
        </ul>
      </div>
      <div className="absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2 " data-glide-el="controls">
        <button className="hidden lg:inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full lg:w-12 lg:h-12 text-slate-700 border-slate-700 hover:text-slate-900 hover:border-slate-900 focus-visible:outline-none bg-white/20" data-glide-dir="<" aria-label="prev slide">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <title>prev slide</title>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
          </svg>
        </button>
        <button className="hidden lg:inline-flex  items-center justify-center w-8 h-8 transition duration-300 border rounded-full lg:w-12 lg:h-12 text-slate-700 border-slate-700 hover:text-slate-900 hover:border-slate-900 focus-visible:outline-none bg-white/20" data-glide-dir=">" aria-label="next slide">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <title>next slide</title>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}
