import { useDispatch, useSelector } from "react-redux";
import { CartContainer } from "./components/CartContainer/CartContainer";
import { Navbar } from "./components/Navbar/Navbar";
import { useEffect } from "react";
import { calculateTotals } from "./Features/cartSlice";
import { Modal } from "./components/Modal/Modal";

export default function App(){
  const { cartItems } = useSelector(store => store.cart)
  const { isOpen } = useSelector(store => store.modal)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(calculateTotals())
  }, [cartItems])

  return (
    <>
    {isOpen && <Modal/> }
    <Navbar/>
    <CartContainer/>
    </>
  )
}