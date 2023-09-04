import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getCart } from "../features/cart/cartSlice"

export default function Cart() {
  const dispatch = useDispatch()
  const cartList = useSelector((state) => state.cart.cartList)

  useEffect(() => {
    dispatch(getCart())
  }, [dispatch])

  return (
    <div>
      <h1>Cart</h1>
      {cartList.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt="" />
          {product.title}
          {product.price}
        </div>
      ))}
    </div>
  )
}
