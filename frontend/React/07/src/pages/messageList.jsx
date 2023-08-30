import { useState, useEffect } from "react"

export default function MessageList() {
  const [messageList, setMessageList] = useState([])

  useEffect(() => {
    const messages = localStorage.getItem("messages")
      ? JSON.parse(localStorage.getItem("messages"))
      : []
    setMessageList([...messages])
  }, [])

  return (
    <div className="box">
      <ul>
        {messageList.map((item, index) => (
          <>
            <br />
            <li key={index}>{item}</li>
          </>
        ))}
      </ul>
    </div>
  )
}
