import { useDispatch } from "react-redux"
import { closeModal } from "../../Features/modalSlice"
import { clearCart } from "../../Features/cartSlice"
export function Modal(){ 
    const dispatch = useDispatch()
    return (
        <>
        <aside className="modal-container">
            <div className="modal">
                <h4>Remove all items from your shopping cart?</h4>
                <div className="btn-container">
                    <button type="button" className="btn confirm-bt"
                    onClick={()=>{
                        dispatch(clearCart())
                        dispatch(closeModal())
                    }}
                    >
                        Confirm
                    </button>
                    <button className="btn clear-btn" onClick={()=> dispatch(closeModal())}>
                        cancel
                    </button>
                </div>
            </div>
        </aside>
        </>
    )
}