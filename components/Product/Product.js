import Image from "next/image";
import styles from "./Product.module.css";

export default function Product(props) {
    const {id, imageUrl, name, description, price} = props

    return (
        <div
            key={id}
            className={styles.product}
        >
            <Image
                src={imageUrl}
                alt={`Image of ${name}`}
                height={740}
                width={340}
            />
            <h3>{name}</h3>
            <p>{description}</p>
            <span>${price}</span>
            <div>
                <button
                    className="snipcart-add-item"
                    data-item-id={id}
                    data-item-image={imageUrl}
                    data-item-name={name}
                    data-item-url="/"
                    data-item-price={price}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}