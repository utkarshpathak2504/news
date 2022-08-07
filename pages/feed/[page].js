import { useRouter } from 'next/router';
import { Toolbar } from '../../components/Toolbar';
import styles from '../../styles/feed.module.css'
export  const PageId=({pageNumber,articles})=>{
    const router=useRouter();

    return(
<>

<div className={styles.main}>
<Toolbar/>
  {articles.map((article,index)=>(
    <div key={index} className={styles.post} onClick={()=>window.location.href=article.url}>
        <h2 > {article.title}</h2> 
        <p>  {article.description}</p>
        {!!article.urlToImage && <img src={article.urlToImage} />}
         </div>
  ))}

</div>
</>


    )

   

    }



    export const getServerSideProps= async pageContext=>{
       
  const pageNumber=  pageContext.query.page;

if(!pageNumber || pageNumber<1 || pageNumber>5 )
  {return{
    props:{
        articles:[],
        pageNumber:1,
 
    },
  };
  
      
    }

    const apiResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&page=${pageNumber}`,
        {
          headers: {
            Authorization: '927c06582bd54ad7802d67aa4021352d',
          },
        },
      )
    const apiJson = await apiResponse.json();
    const{articles}=apiJson
    console.log(apiJson);
    

    return{

      props:{
        articles,
        pageNumber:Number.parseInt(pageNumber)
      }
    }

      }
    export default PageId;
