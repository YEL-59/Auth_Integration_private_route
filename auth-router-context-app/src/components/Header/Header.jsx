import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";


const Header = () => {
    const {user,logOut}=useContext(AuthContext)
    console.log('context',user)
const handlesignout=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.error(error))
}

  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content">
        <Link className="btn btn-ghost normal-case text-xl">Auesome Auth</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/register'>register</Link>
        {user?.email && <span>Welcome,{user.email}</span>}
        {
        user?.email?
        <button onClick={handlesignout} className="btn btn-sm">Sign out</button>
        :<Link to='/login'>Log In</Link>
        }
      </div>
     
    </div>
  );
};

export default Header;
