import Head from 'next/head'
import Footer from '../components/Footer'

import { Toolbar } from '../components/Toolbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <>
   <Toolbar/>
   <div >
     <div className={styles.heabodyding} > 
       
       <img src='../fronti.jpg' width={1000} height={400}></img>
       <div className={styles.heading}>
       <h1>24x7 News Point</h1>
       <p>One place for all types of News</p>
        </div>
        </div>
   </div>

   <Footer/>
   </>
  )
}
