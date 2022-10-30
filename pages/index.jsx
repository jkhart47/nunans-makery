import Head from "next/head";
import Script from 'next/script';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import styles from '../styles/Home.module.css';

export default function Home() {

  return (
    <>
      <Head>
          <title>My awesome store</title>
          <link rel="preconnect" href="https://app.snipcart.com"/>
          <link rel="preconnect" href="https://cdn.snipcart.com"/>
          <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.css"/>
          <link rel="shortcut icon" href="../public/favicon.ico" />
      </Head>
    

    
    <div className={styles.container}>
        
      <div className={styles.small}>
        <CategoryCard image="https://cmsg.llc/susan/images/bagsforcarousel.png" name="Totes" />
        <CategoryCard image="https://cmsg.llc/susan/images/hanger.png" name="Home Decor" />
        <CategoryCard image="https://cmsg.llc/susan/images/cones.png" name="Seasonal" />
        <div>
          <h1>Tote Bags</h1>
          <h5>Pouches, Sunglass Cases, and more...</h5>
        </div>
        <div>
          <h1>Home Decor</h1>
          <h5>Hangers, Mobiles, Wash Cloths Towels, and more...</h5>
        </div>
        <div>
          <h1>Seasonal</h1>
          <h5>Pinecone Wreaths, Piano Wire Christmas Trees, Corkachures</h5>
        </div>
      </div>
      <Script src="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.js" />
            <div id="snipcart" data-api-key="MzgyODIwYTAtOWM1ZC00NGEyLWJhZWYtMDUwNjA1ODgxNzg1NjM3ODMzOTE5MjgxNDE4Mzkw">
            data-config-modal-style="side"
            </div>
  
    </div>
    </>
  )
};

      