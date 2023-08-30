import { useState, useEffect } from "react"

export default function Exercise3() {
  const [search, setSearch] = useState("")
  const [fruits, setFruits] = useState(["banana", "apple", "orange", "manggo"])

  useEffect(() => {
    if (search != "") {
      const filterFruits = fruits.filter((item) => {
        return item.includes(search)
      })

      setFruits([...filterFruits])
    } else {
      setFruits([...["banana", "apple", "orange", "mango"]])
    }
  }, [search])

  return (
    <div className="soal3">
      <input
        type="text"
        onChange={(e) => {
          setSearch(e.target.value)
        }}
        value={search}
      />
      <ul>
        {fruits.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  )
}
