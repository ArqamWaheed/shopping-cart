import styles from "../styles/SaleCard.module.css";

function SaleCard({imgSrc, figurineName, figurinePrice}) {
    return (
        <div className={styles.saleCard}>
            <img className={styles.saleCardImg} src={imgSrc} alt={figurineName} />
            <h2>{figurineName}</h2>
            <h3>{figurinePrice}</h3>
            <button className={styles.saleCardBtn}>
                Add To Cart
            </button>
        </div>
    )
}

export default SaleCard;