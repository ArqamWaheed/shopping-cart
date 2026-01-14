import "../styles/SaleCard.css";

function SaleCard({imgSrc, figurineName, figurinePrice}) {
    return (
        <div className="saleCard">
            <img className="saleCardImg" src={imgSrc} alt="FigurineImage" />
            <h2>{figurineName}</h2>
            <h3>{figurinePrice}</h3>
            <button className="saleCardBtn">
                Add To Cart
            </button>
        </div>
    )
}

export default SaleCard;