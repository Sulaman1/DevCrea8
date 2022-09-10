import {useEffect} from 'react'
// import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'
import MyNavbar from './mynavbar';


function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
    import('./loader');
},[])
  
  return(
    <>
    
  <div className="z-40 absolute top-10 right-10 ...">
  <MyNavbar/> 
  </div>

     
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
