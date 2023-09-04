import { useState, useEffect } from "react"
import style from "./Product.module.css"
import { useDispatch } from "react-redux"
import { addCart } from "../../features/cart/cartSlice"

export default function Product() {
  const dispatch = useDispatch()
  const [products, getProducts] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((json) => getProducts(json))
  }, [])

  const addToCart = (product) => {
    dispatch(addCart(product))
  }

  const cards = products.map((product) => (
    <div key={product.id} className={style.container}>
      <img src={product.image} alt={product.title} />
      <div className={style.box}>
        <div className={style.info}>
          <h2>{product.title}</h2>
          <h3>Price: ${product.price}</h3>
        </div>
        <div className={style.footer}>
          <button onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
      </div>
    </div>
  ))

  return (
    <div className={style.main}>
      <h1>Product Dashboard</h1>
      <div className={style.content}>{cards}</div>
    </div>
  )
}
