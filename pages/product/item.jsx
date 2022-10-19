//item.jsx
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
// import Image from "next/image";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import styles from '../../styles/Item.module.scss';

export default function ProductPage() {
  
  const router = useRouter();

//  useEffect(() => {
//    if(!router.isReady) return;
//      console.log("Testing");
//    return () => {
      // Side Effect Cleanup
//    }
//  });
  
  useEffect(() => {
    if(!router.isReady) {
      return
    }else {
      console.log("Success");
    }
    return () => {
      // Side Effect Cleanup
    }
  }, [router.isReady]);
  
  const query = router.query;

  console.log("item query is: ", query)

  const id = query.id;
  console.log("item id is: ", id)
  const name = query.name;
  console.log("item name is: ", name)
  const description = query.description;
  const price = query.price
  console.log("item price is: ", query.price)
  const imageSrc = query.imageUrl;
  const largeImage = query.zoomImage;
  console.log("large image is: ", largeImage)
  const features = query.features;

  const productFeatures = JSON.stringify(features);
//  console.log("This is the value of productFeatures: ", productFeatures);

  return ( 
    
    <div>
      <Head>
          <title>{name}</title>
      </Head>
    
      <div className={styles.single_container}>
        <div className={styles.left_section}>

            <div>
              <InnerImageZoom
                src={imageSrc}
                zoomSrc={largeImage} className={styles.iiz__zoom-largeImage}
                width="380px"
                fullscreenOnMobile={true}
                moveType="drag"
                zoomScale={0.9}
                zoomPreload={true}
              />
            </div>
   
        </div>

        <div className={styles.right_section}
          key={id}
        >
          
          <h3 className={styles.title}>{name}</h3>
          <p className={styles.price}>${price}</p>
        </div>
        <div className={styles.para} >
            <p> {description} </p>
            <br></br>
            <h1>Product Features:</h1>
            <p> {productFeatures} </p>
        </div>
        <button
          className={`snipcart-add-item ${styles.button}`}
          data-item-id={id}
          data-item-name={name}
          data-item-price={price}
          data-item-description = {description}
          data-item-image ={imageSrc}   
          >
            Add to Cart
        </button>
      </div>
      {router.pathname !== "/" && (
        <button type="button" className={styles.backbutton}
        onClick={() => router.back()}>
          Back to Products
        </button>  
      )}
    </div>

 
  )
        
};