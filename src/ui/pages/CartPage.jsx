import { useOutletContext } from "react-router";
import "../../styles/CartPage.css";

function CartPage() {
    const [cartAmount, setCartAmount, cartItems, setCartItems] = useOutletContext();

    const handleIncrease = (figurineName) => {
        setCartAmount(cartAmount + 1);
        setCartItems(prev => 
            prev.map(item => 
                item.figurineName === figurineName 
                    ? { ...item, figurineQty: item.figurineQty + 1 }
                    : item
            )
        );
    };

    const handleDecrease = (figurineName) => {
        setCartItems(prev => {
            const item = prev.find(i => i.figurineName === figurineName);
            if (item && item.figurineQty === 1) {
                setCartAmount(cartAmount - 1);
                return prev.filter(i => i.figurineName !== figurineName);
            }
            setCartAmount(cartAmount - 1);
            return prev.map(i => 
                i.figurineName === figurineName 
                    ? { ...i, figurineQty: i.figurineQty - 1 }
                    : i
            );
        });
    };

    const handleRemove = (figurineName) => {
        const item = cartItems.find(i => i.figurineName === figurineName);
        if (item) {
            setCartAmount(cartAmount - item.figurineQty);
            setCartItems(prev => prev.filter(i => i.figurineName !== figurineName));
        }
    };

    const parsePrice = (priceStr) => parseFloat(priceStr.replace(' $', ''));

    const subtotal = cartItems.reduce((sum, item) => 
        sum + parsePrice(item.figurinePrice) * item.figurineQty, 0
    );
    const shipping = cartItems.length > 0 ? 9.99 : 0;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    return (
        <div className="CartPage">
            <div className="CartIntro">
                <div className="CartIntro__content">
                    <h1>Your Cart</h1>
                    <hr />
                    <p>Review your selected figurines below. Adjust quantities or remove items before checkout.</p>
                </div>
            </div>

            {cartItems.length === 0 ? (
                <div className="CartEmpty">
                    <h2>Your cart is empty</h2>
                    <p>Browse our collection and add some amazing figurines!</p>
                </div>
            ) : (
                <div className="CartContent">
                    <div className="CartItems">
                        {cartItems.map((item, idx) => (
                            <div key={idx} className="CartItem">
                                <div className="CartItem__info">
                                    <h3>{item.figurineName}</h3>
                                    <p className="CartItem__price">{item.figurinePrice}</p>
                                </div>
                                <div className="CartItem__controls">
                                    <div className="CartItem__quantity">
                                        <button onClick={() => handleDecrease(item.figurineName)}>−</button>
                                        <span>{item.figurineQty}</span>
                                        <button onClick={() => handleIncrease(item.figurineName)}>+</button>
                                    </div>
                                    <p className="CartItem__subtotal">
                                        ${(parsePrice(item.figurinePrice) * item.figurineQty).toFixed(2)}
                                    </p>
                                    <button 
                                        className="CartItem__remove"
                                        onClick={() => handleRemove(item.figurineName)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="CartSummary">
                        <h2>Order Summary</h2>
                        <div className="CartSummary__row">
                            <span>Subtotal ({cartAmount} items)</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="CartSummary__row">
                            <span>Shipping</span>
                            <span>${shipping.toFixed(2)}</span>
                        </div>
                        <div className="CartSummary__row">
                            <span>Tax (8%)</span>
                            <span>${tax.toFixed(2)}</span>
                        </div>
                        <hr />
                        <div className="CartSummary__row CartSummary__total">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <button className="CartSummary__checkout">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartPage;