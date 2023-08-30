import { useState } from "react"

export default function Exercise1() {
  const [value, setValue] = useState(0)

  return (
    <div className="soal1">
      <button onClick={() => setValue(value - 1)}>-</button>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>+</button>
    </div>
  )
}
