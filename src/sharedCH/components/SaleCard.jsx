import styles from "../styles/SaleCard.module.css";
import { useOutletContext } from "react-router";

function SaleCard({imgSrc, figurineName, figurinePrice}) {
    const [cartAmount, setCartAmount] = useOutletContext();
    return (
        <div className={styles.saleCard}>
            <img className={styles.saleCardImg} src={imgSrc} alt={figurineName} />
            <h2>{figurineName}</h2>
            <h3>{figurinePrice}</h3>
            <button className={styles.saleCardBtn} onClick={() => setCartAmount(cartAmount + 1)}>
                Add To Cart
            </button>
        </div>
    )
}

export default SaleCard;