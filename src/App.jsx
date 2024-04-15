import { useEffect, useState } from 'react'
import './App.css'
import Login from './components/Login'
import Messages from './components/Messages'
import { supabase } from './supabaseClient'

function App() {
  const [session, setSession] = useState(null)

  const getSession = async () => {
    const {data} = await supabase.auth.getSession()
    setSession(data.session);
  }

  useEffect(() => {
    getSession()
  }, [])

  return (
    <div className='App'>
      <h2>Whatsapp Clone</h2>
      <p>React & Supabase</p>
      {session ? <Messages /> : <Login /> }
    </div>

  )
}

export default App

//Admin_2024!*