import React from "react";
import { useState } from "react";

const Chat = () => {
  // const [message, setMessage] = useState("Введи тут сообщение");
  // const [to, setTo] = useState("Феодосий");

  const [ chatData, setChatData ] = useState({
    message: "Введи тут сообщение",
    to: "Феодосий"
  })

  const sendMessage = () => {
    setTimeout(
      () => console.log("Вы отправили сообщение: " + chatData.message + " этому человеку: " + chatData.to),
      3000
    )
  }




  return (
    <>
      <input 
        value={ chatData.message } 
        onChange={
          (e) => setChatData({...chatData, message: e.target.value})
        }
      />

      <br/><br/>

      <select 
        value={chatData.to} 
        onChange={(e) => setChatData({...chatData, to: e.target.value}) }
      >
        <option value={"Гина"}>Гина</option>
        <option value={"Ангелина"}>Ангелина</option>
        <option value={"Феодосий"}>Феодосий</option>
      </select>

      <br/><br/>

      <button onClick={sendMessage}>
        Отправить сообщение
      </button>

    </>
  )
}

export default Chat;