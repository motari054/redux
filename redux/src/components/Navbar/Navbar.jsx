import { CartIcon} from '../../icons.jsx'
import { useSelector } from 'react-redux'
export function Navbar(){
    const amount = useSelector((store)=> store.cart.amount)
    return (
        <>
        <nav>
            <div className="nav-center">
                <h3>Redux</h3>
                <div className="nav-container">
                    <CartIcon/>

                    <div className="amount-container">
                        <div className="total-amount">{amount}</div>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}