import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {

  const imageUrl = product.imageUrl;
  const zoomImage = product.zoomImgSrc;
  const id = product.id;
  console.log("product card id value: ", id)
  const name = product.name;
  console.log("product card name value: ", name)
  const description = product.description;
  const price = product.price.toFixed(2);
  const features = product.features;     
  console.log("product features: ", features)
  const  data = { id, name, description, price, imageUrl, zoomImage, features }
  console.log("product data is: ", data)
  
  return (
   
    <div className={styles.grid} >
      <Image src={imageUrl} width="440px" height="740px"
        layout="responsive" />
      <h4>{product.id}</h4>
      <h4 className={styles.title}>{name}</h4>
      <h5 className={styles.category}>{product.category}</h5>
      <h5 className={styles.category}>{product.productType}
      </h5>
      <p>$ {price} </p>

      <Link 
        href= {{
          pathname: "/product/item",
          query: data 
           
        }}
      >
  
        <a style={{ color: "blue", textDecoration: "underline" }}>
          See Details
        </a>
      
      </Link>
     
    </div>   

  )

}


export default ProductCard;