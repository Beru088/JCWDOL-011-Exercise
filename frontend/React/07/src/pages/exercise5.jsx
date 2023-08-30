import { useState } from "react"
import style from "./messageForm.module.css"

export default function Exercise5() {
  const [message, setMessage] = useState("")

  const handleOnChangeMessage = (e) => {
    setMessage(e.target.value)
  }

  const handleMessageSubmit = () => {
    const messages = localStorage.getItem("messages")
      ? JSON.parse(localStorage.getItem("messages"))
      : []

    if (message) {
      messages.push(message)
      localStorage.setItem("messages", JSON.stringify([...messages]))
      // redirect
      setMessage("")
      window.location.href = "/list"
    }
  }

  return (
    <div className={style.messageForm}>
      <h1> Message : </h1>
      <input type="text" value={message} onChange={handleOnChangeMessage} />
      <button type="submit" onClick={handleMessageSubmit}>
        Submit
      </button>
    </div>
  )
}
