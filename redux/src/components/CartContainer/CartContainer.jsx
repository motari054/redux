import { useSelector, useDispatch } from "react-redux"
import {CartItem} from '../CartItem/CartItem'
import { openModal } from "../../Features/modalSlice"


export function CartContainer(){
    const { cartItems, total, amount } = useSelector((store) => store.cart)
    const dispatch = useDispatch()

    if (amount < 1){
        return (
            <selection className="cart">
                <header>
                    <h2>Your Bag</h2>
                    <h4 className="empty-cart">is currently empty</h4>
                </header>
            </selection>
        )
    }
    else{
        return (
            <section className="cart">
                <header>
                    <h2>Your Bag</h2>
                </header>

                <div>
                    {cartItems.map((item, index)=>(
                        <CartItem key={index} item={(item)}/>
                    ))}
                </div>

                <footer>
                    <hr />
                    <div className="cart-total">
                        <h4>
                            total <span>${total.toFixed(2)}</span>
                        </h4>
                    </div>

                    <button className="btn clear-btn" onClick={()=>{dispatch(openModal())}} >clear cart</button>
                </footer>
            </section>
        )
    }
}