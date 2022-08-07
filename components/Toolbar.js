import {useRouter}  from 'next/router'
import styles from '../styles/toolbar.module.css'
import Link from 'next/link' 


export function Toolbar(){
 
    const router=useRouter();

    return(

        
        <>
        <div className={styles.box}>
        <div  className={styles.heading} >24x7</div>
        <div  className={styles.main}>
       
            <div onClick={()=>router.push('/')}>Home</div>
            <div  onClick={()=>router.push('/feed/1')}> Feed</div>
            {/* <div onClick={()=>window.location.href='https://www.inshorts.com/en/read'} >Inshorts</div> */}
                        <Link href='https://www.inshorts.com/en/read'><a>Inshorts</a></Link> 

            <div onClick={()=>router.push('/live')}>Live</div>
        </div>
        </div>
     
        </>
    )

}