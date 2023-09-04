import style from "./Navbar.module.css"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getCart } from "../../features/cart/cartSlice"

export default function Navbar() {
  const dispatch = useDispatch()
  const cartList = useSelector((state) => state.cart.cartList)

  useEffect(() => {
    dispatch(getCart())
  }, [dispatch])

  return (
    <div className={style.navbar}>
      <div className={style.logo}>
        <a href="/">warungpedia</a>
      </div>
      <div className={style.pages}>
        <a href="/cart">
          Cart <u>{cartList?.length || 0}</u>
        </a>
      </div>
    </div>
  )
}
