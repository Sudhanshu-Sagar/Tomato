import  { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
import {Link} from 'react-router-dom'
const Navbar = ({setShowLogin}) => {
    const [menu,setMenu]=useState("menu"); //this is used so that when user click on any list the underline is created on that list
    return (
        <div className="navbar">
            <img src={assets.logo} />
            <ul className='navbar-menu'>
                <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
                <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
                <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
                <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact-us</a>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} />
                <div className='navbar-search-icon'>
                    <img src={assets.basket_icon} />
                    <div className='dot'> </div> {/*this dot is used when user add something in the basket */} 
                </div>
                <button onClick={()=>setShowLogin(true)}>sign-in</button>

            </div>
        </div>

    )
}

export default Navbar
