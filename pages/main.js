import Head from 'next/head'
// import Document, { Html, Head, Main, NextScript } from 'next/document'
import Image from 'next/image'
import pic from '../img/cryptopunk1.png';
import pic2 from '../img/cryptopunk2.gif';
import styles from '../styles/Main.module.css'
import {useEffect} from 'react'
import Script from 'next/script'
import MyNavbar from './mynavbar';
// var $ = require("jquery");
// import 'bootstrap/dist/css/bootstrap.css';
// import check from "../public/static/main"


export default function MainPage2() {


//   if (typeof window !== "undefined") {
//     // Client-side-only code
//     window.$ = window.jQuery = require("jquery");
//     const prevButton = document.getElementById('data-carousel-prev');
// const nextButton = document.getElementById('data-carousel-next');

// prevButton.addEventListener('click', () => {
//     carousel.prev();
// });

// nextButton.addEventListener('click', () => {
//     carousel.next();
// });
  
  // }
 
  return (
      <>

    <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"/>
    <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"/>


    <div className="md:h-full md:w-full">
  <div id="myCarousel" className="carousel slide " data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <div className="carousel-inner h-screen">

      <div className="item active h-full">
      <img className='object-cover md:h-full md:w-full' src={pic.src} data-color="lightblue" alt="First Image"/>
      
        <div className="carousel-caption">
          <h3>Los Angeles</h3>
          <p className="text-9xl font-serif font-extrabold italic text-blue-600 dark:text-white absolute bottom-96 left-96">DevCre8</p>
        </div>
      </div>

      <div className="item h-full">
      <img className='object-cover md:h-full md:w-full' src="https://images.unsplash.com/photo-1432958576632-8a39f6b97dc7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=6ecedc1e639d8a4b77aa8e85f4962f03" data-color="lightblue" alt="First Image"/>
        <div className="carousel-caption">
        <figure className="mx-auto max-w-screen-md text-center">
    <svg aria-hidden="true" className="mx-auto mb-3 w-12 h-20 text-white dark:text-white" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    <blockquote>
        <p className="text-4xl italic font-medium text-white dark:text-white">&quot;Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.&quot;</p>
    </blockquote>
    <figcaption className="flex justify-center items-center mt-6 space-x-3">
        <img className="w-20 h-20 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"/>
        <div className="flex items-center divide-x-2 divide-black-500 dark:divide-black-700">
            <cite className="pr-3 font-medium text-white dark:text-white">Micheal Gough</cite>
            <cite className="pl-3 text-sm font-light text-white dark:text-white">CEO at Google</cite>
        </div>
    </figcaption>
</figure>
          </div>
      </div>
    
      <div className="item h-full">
      <img className='object-cover md:h-full md:w-full' src="https://images.unsplash.com/photo-1432958576632-8a39f6b97dc7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=6ecedc1e639d8a4b77aa8e85f4962f03" data-color="lightblue" alt="First Image"/>
        <div className="carousel-caption">
          <h3>New York</h3>
          <p>We love the Big Apple!</p>
        </div>
      </div>
  
    </div>

    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
  </div>

  <div className="grid grid-cols-2 gap-4 mt-56  h-screen">
    <div className="">
      <img className="w-10/12 h-10/12 ml-40 " src="https://brunn.qodeinteractive.com/wp-content/uploads/2018/09/h3-img-1-300x219.png" alt="Man looking at item at a store"/>
    </div>

  <div>
    <div className="p-8">
    <div className="grid grid-cols-8">
      <div className=''>
        <hr className="float-left my-4 mx-auto w-24 h-1 bg-orange-500 rounded border-0 md:my-10 dark:bg-gray-700"/>
      </div>
      <div  className=' col-span-2'>

        <div className="mt-7 uppercase text-black font-bold ">Case study</div>
      </div>
    </div>
        
        <p className="font-bold text-9xl">The quick brown fox ...</p>
        <blockquote className="text-2xl font-semibold italic text-center text-slate-900">
          When you look
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
          <span className="relative text-white">annoyed</span>
          </span>
          all the time, people think that you&apos;re busy.
        </blockquote>
        <a href="#" className="block mt-1 text-xl leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
        <p className="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers. Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
    <div className="group flex items-center">
      <img className="object-cover shrink-0 h-32 w-32 rounded-full" src={pic.src} alt="" />
      <div className="ltr:ml-3 rtl:mr-3">
        <p className="text-2xl font-medium text-slate-300 group-hover:text-white">Crypto Punk</p>
        <p className="text-2xl font-medium text-slate-500 group-hover:text-slate-300">Director</p>
      </div>
    </div>
  </div>

</div>


<div className="container mx-auto px-44">
<div className=" h-96 w-full grid grid-cols-4 gap-12 mb-12 justify-items-stretch">
  
  <div className="flip-card w-full h-96">
    <div className="flip-card-inner w-full h-96">
      <div className="flip-card-front w-full h-96">
        <img className='w-full h-96' src={pic.src} alt="Avatar" />
      </div>
      <div className="flip-card-back w-full h-96">
        <h1>John Doe</h1> 
        <p>We love that guy</p>
      </div>
    </div>
  </div>
  
  <div className="flip-card h-96 w-full">
    <div className="flip-card-inner w-full h-96">
      <div className="flip-card-front w-full h-96">
        <img className='w-full h-96' src={pic.src} alt="Avatar" />
      </div>
      <div className="flip-card-back h-96 w-full">
        <h1>John Doe</h1> 
        <p>We love that guy</p>
      </div>
    </div>
  </div>
  
  <div className="col-span-2 h-96 w-full flip-card justify-self-stretch">
    <div className="flip-card-inner w-full h-96">
      <div className="flip-card-front w-full h-96">
        <img className='object-cover md:h-96 md:w-full' src={pic.src} alt="Avatar" />
      </div>
      <div className="flip-card-back w-full h-96">
        <h1>John Doe</h1> 
        <p>We love that guy</p>
      </div>
    </div>
  </div>

 </div>
 </div>

 <div className="container mx-auto px-44">
 <div className="h-96 w-full grid grid-cols-4 gap-12 mb-96 justify-items-stretch">
  
 <div className="col-span-2 h-96 w-full flip-card justify-self-stretch">
    <div className="flip-card-inner w-full h-96">
      <div className="flip-card-front w-full h-96">
        <img className='object-cover md:h-96 md:w-full' src={pic.src} alt="Avatar" />
      </div>
      <div className="flip-card-back w-full h-96">
        <h1>John Doe</h1> 
        <p>We love that guy</p>
      </div>
    </div>
  </div>

  <div className="flip-card w-full h-96">
    <div className="flip-card-inner w-full h-96">
      <div className="flip-card-front w-full h-96">
        <img className='w-full h-96' src={pic.src} alt="Avatar" />
      </div>
      <div className="flip-card-back w-full h-96">
        <h1>John Doe</h1> 
        <p>We love that guy</p>
      </div>
    </div>
  </div>
  
  <div className="flip-card h-96 w-full">
    <div className="flip-card-inner w-full h-96">
      <div className="flip-card-front w-full h-96">
        <img className='w-full h-96' src={pic.src} alt="Avatar" />
      </div>
      <div className="flip-card-back h-96 w-full">
        <h1>John Doe</h1> 
        <p>We love that guy</p>
      </div>
    </div>
  </div>
  
 </div>
 </div>

 <div className="container -mt-44 mx-auto px-44">
 <div className="h-96 w-full grid grid-cols-3 gap-12 mb-96 justify-items-stretch">
  
 <div className="h-96 w-full justify-self-stretch">
    <div className="grid grid-cols-5">
      <div className=''>
        <hr className="float-left my-4 mx-auto w-24 h-1 bg-orange-500 rounded border-0 md:my-10 dark:bg-gray-700"/>
      </div>
      <div  className='col-span-4'>

        <div className="mt-7 uppercase text-black font-bold ">Case study</div>
      </div>
    </div>
    <div>
      <p className="font-bold text-5xl">The quick brown fox ...</p>
        <blockquote className="text-2xl font-semibold italic text-center text-slate-900">
          When you look
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
          <span className="relative text-white">annoyed</span>
          </span>
          all the time, people think that you&apos;re busy.
        </blockquote>
        <a href="#" className="block mt-1 text-xl leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
        <p className="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers. Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
   
      </div>
  </div>

  <div className="h-96 w-full">
  <div className="h-96 w-full justify-self-stretch">
    <div className="grid grid-cols-5">
      <div className=''>
        <hr className="float-left my-4 mx-auto w-24 h-1 bg-orange-500 rounded border-0 md:my-10 dark:bg-gray-700"/>
      </div>
      <div  className=' col-span-4'>

        <div className="mt-7 uppercase text-black font-bold ">Case study</div>
      </div>
    </div>
    <div>
      <p className="font-bold text-5xl">The quick brown fox ...</p>
        <blockquote className="text-2xl font-semibold italic text-center text-slate-900">
          When you look
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
          <span className="relative text-white">annoyed</span>
          </span>
          all the time, people think that you&apos;re busy.
        </blockquote>
        <a href="#" className="block mt-1 text-xl leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
        <p className="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers. Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
   
      </div>
  </div>
  </div>
  
  <div className="h-96 w-full">
    <div className="h-96 w-full justify-self-stretch">
      <div className="grid grid-cols-5">
        <div className=''>
          <hr className="float-left my-4 mx-auto w-24 h-1 bg-orange-500 rounded border-0 md:my-10 dark:bg-gray-700"/>
        </div>
        <div  className=' col-span-4'>

          <div className="mt-7 uppercase text-black font-bold ">Case study</div>
        </div>
      </div>
      <div>
      <p className="font-bold text-5xl">The quick brown fox ...</p>
        <blockquote className="text-2xl font-semibold italic text-center text-slate-900">
          When you look
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
          <span className="relative text-white">annoyed</span>
          </span>
          all the time, people think that you&apos;re busy.
        </blockquote>
        <a href="#" className="block mt-1 text-xl leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
        <p className="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers. Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
   
      </div>
    </div>
  </div>
  
 </div>
 </div>
     
  </>
  )


}
