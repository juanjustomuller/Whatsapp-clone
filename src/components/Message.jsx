import { useEffect, useState } from "react"
import { formatDate } from "../helpers/formatDate"
import { supabase } from "../supabaseClient"


const Message = ({message, date, email}) => {
  const[user, setUser] = useState("")

  const getSession = async () => {
    const {data} = await supabase.auth.getSession()
    setUser(data.session.user.email);
  }

  useEffect(() => {
    getSession()
  }, [])

  return (
    <div className={`card ${user===email?"me":""}`}>     {/*le pongo la clase card, si el usuario es igual al email que ingrese, que agarre la clase "me", la cual esta hecha para que se muestren los mensajes a la derecha como en whatsapp*/}
        <p>{message}</p>
        <span>{formatDate(date)}</span>
        <span className="user-email">{email.split('@')[0]}</span>
    </div>
  )
}

export default Message