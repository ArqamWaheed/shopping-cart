import styles from "../styles/SaleCard.module.css";
import { useOutletContext } from "react-router";

function searchFigureState(element) {
    return element.figurineName == this;
}

function SaleCard({imgSrc, figurineName, figurinePrice}) {
    const [cartAmount, setCartAmount, cartItems, setCartItems] = useOutletContext();
    return (
        <div className={styles.saleCard}>
            <img className={styles.saleCardImg} src={imgSrc} alt={figurineName} />
            <h2>{figurineName}</h2>
            <h3>{figurinePrice}</h3>
            <button className={styles.saleCardBtn} onClick={function() { 
                setCartAmount(cartAmount + 1);
                setCartItems(function(prev) {
                    const indexWithFigurine = prev.findIndex(searchFigureState, figurineName);
                    if (indexWithFigurine === -1) {
                        return [...prev, {
                            figurineName,
                            figurinePrice,
                            figurineQty: 1,
                        }];
                    }                    
                    return prev.map((item, i) => 
                        i === indexWithFigurine 
                            ? { ...item, figurineQty: item.figurineQty + 1 }
                            : item
                    );
                });
                }
            }>
                Add To Cart
            </button>
        </div>
    )
}

export default SaleCard;