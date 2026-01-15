import styles from "../styles/SaleCard.module.css";
import { useOutletContext } from "react-router";

function SaleCard({imgSrc, figurineName, figurinePrice}) {
    const [cartAmount, setCartAmount, cartItems, setCartItems] = useOutletContext();
    return (
        <div className={styles.saleCard}>
            <img className={styles.saleCardImg} src={imgSrc} alt={figurineName} />
            <h2>{figurineName}</h2>
            <h3>{figurinePrice}</h3>
            <button className={styles.saleCardBtn} onClick={function() { 
                console.log(cartItems);
                setCartAmount(cartAmount + 1);
                setCartItems(prev => ({ 
                    ...prev, 
                    test: (prev?.test ?? 0) + 1 
                }
                ));
                }
            }>
                Add To Cart
            </button>
        </div>
    )
}

export default SaleCard;