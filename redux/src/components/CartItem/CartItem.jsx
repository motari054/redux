import { ChevronDown, ChevronUp } from "../../icons";
import { useDispatch } from "react-redux";
import { clearCart, removeItem } from "../../Features/cartSlice";
import { increase } from '../../Features/cartSlice'
import { decrease } from '../../Features/cartSlice'

export function CartItem({item}){
    const dispatch = useDispatch()
    return (
        <article className="cart-item">
            <img src={item.img} alt="" />

            <div>
                <h4>{item.title}</h4>
                <h4 className="item-price">${item.price}</h4>
                <button className="remove-btn" onClick={()=> dispatch(removeItem(id))} >Remove</button>
            </div>

            <div>
                <button className="amount-btn" onClick={()=>dispatch(increase(item.id))}> 
                    <ChevronUp/>
                </button>
                <p className="amount">{item.amount}</p>
                <button className="amount-btn" 
                    onClick={()=>{
                        if(item.amount === 1){
                            dispatch(removeItem(id))
                            return
                        }
                        dispatch(increase(item.id))
                    }}
                >
                    <ChevronDown/>
                </button>
            </div>
        </article>
    )
}