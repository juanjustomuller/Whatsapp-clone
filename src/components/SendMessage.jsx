import { useEffect, useState } from 'react'
import Send from './icons/Send'
import { supabase } from '../supabaseClient'

const SendMessage = ({ scroll }) => {
    const[newMessage, setNewMessage] = useState("")
    const[user, setUser] = useState("")

    const sendMessage = async (e) => {
        e.preventDefault()
        if(newMessage !== "") {
            const insert = await supabase.from("messages").insert({    //le paso la tabla de supabase ("message") y le inserto las propiedades que necesite
                content: newMessage,
                email: user                                  //usuario actual
            })
            //console.log(insert);
            setNewMessage("")    //lo seteo vacio para cuando mande un mensaje luego se vacie el input (valga la redundancia)
        }
        //console.log(newMessage);
        scroll.current.scrollIntoView({Behaivor: 'smooth'})   //pa q scrolle solo a medida q van llegando mensajes
    }

    const getSession = async () => {
        const {data} = await supabase.auth.getSession()
        setUser(data.session.user.email);
      }
    
      useEffect(() => {
        getSession()
      }, [])

      const handleDots = () => {
        setOpen(current => !current) //es un toogle, si el estado esta en false va a cambiar a true, y si esta en true va a cambiar a false. es decir cambia del actual al contrario
      }

  return (
    <section className='send-mesage'>
        <form onSubmit={sendMessage}>
            <input 
            type="text"
            name="message"
            placeholder="Write your message here..."
            onChange={(e)=> setNewMessage(e.target.value)}
            value={newMessage}
            />
            <button type='submit'><Send /></button>
        </form>
    </section>
  )
}

export default SendMessage