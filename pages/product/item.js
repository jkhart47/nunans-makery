//item.jsx
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import styles from '../../styles/Item.module.scss';

export default function ProductPage() {

  const router = useRouter();

//  const  = router.query;
  const {
    query: { id, name, description, price, imageUrl,
    zoomImage, features},
  } = router

  const props = {
    id,
    name,
    description,
    price,
    imageUrl,
    zoomImage,
    features,
  };

//  const query = router.query;

//  console.log("item query is: ", query)

  console.log("item id is: ", props.id);
  console.log("item name is: ", props.name);
  console.log("item description is: ", props.description);
  console.log("item price is: ", props.price);
  console.log("imageUrl is: ", imageUrl);
  console.log("item features are: ", props.features);

  const productFeatures = JSON.stringify(props.features);
  console.log("This is the value of productFeatures: ", productFeatures);

  return ( 
    <>
    <div>
      <Head>
          <title>{props.name}</title>
      </Head>
    
      <div className={styles.single_container}>
        <div className={styles.left_section}>

            <div>
              <InnerImageZoom
                src={props.imageUrl} alt="Product Image Small" placeholder= "blur"
                zoomSrc={props.zoomImage}
                width={240}
                height={320}
                quality={80}
                priority
                fullscreenOnMobile={true}
                moveType="drag"
                zoomScale={0.9}
                zoomPreload={true}
              />
            </div>
   
        </div>
        <div className={styles.right_section}
          key={props.id}
        >
          <h3 className={styles.title}>{props.name}</h3>
          <p className={styles.price}>${props.price}</p>
        </div>
        <div className={styles.para} >
            <p> {props.description} </p>
            <br></br>
            <h1>Product Features:</h1>
            <p> {productFeatures} </p>
        </div>
        
      <div>
        <button className={`snipcart-add-item ${styles.button}`}
          data-item-id={props.id}
          data-item-name={props.name}
          data-item-price={props.price}
          data-item-image={props.imageUrl}  
        >
          Add to Cart
        </button>
      </div>

      </div>
      {router.pathname !== "/" && (
        <button type="button" className={styles.backbutton}
        onClick={() => router.back()}>
          Back to Products
        </button>  
      )}
    </div>
    </>
 
  )
        
};