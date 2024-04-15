import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import Arrow from "./icons/Arrow";
import Dots from "./icons/Dots";
import { getAvatar } from "../helpers/getAvatar";

const Header = () => {
  const [user, setUser] = useState("juan");
  const [open, setOpen] = useState(false);

  const handleLogOut = async () => {
    const { error } = await supabase.auth.signOut();
    window.location.reload();
  };

  const getSession = async () => {
    const { data } = await supabase.auth.getSession();
    setUser(data.session.user.email);
  };

  useEffect(() => {
    getSession();
  }, []);

  const handleDots = () => {
    setOpen((current) => !current); //es un toogle, si el estado esta en false va a cambiar a true, y si esta en true va a cambiar a false. es decir cambia del actual al contrario
  };

  return (
    <div className="header">
      <div className="left">
        <p className="logout" onClick={handleLogOut}>
          <Arrow />
        </p>
        <img src={`/avatar/avatar-${getAvatar(user)}.jpg`} alt="avatar" />
        <p className="name">
          @{user.split("@")[0]}
          <span>online</span>
        </p>
      </div>
      <p className="dots" onClick={handleDots}>
        <Dots />
      </p>
      <div className={`float-out ${open ? "open" : ""}`} onClick={handleLogOut}>
        Log Out
      </div>
    </div>
  );
};

export default Header;
