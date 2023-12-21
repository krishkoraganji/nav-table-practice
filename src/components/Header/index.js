 import { useState } from "react"
 import {FcSearch} from 'react-icons/fc'
import './index.css'
import { inputValue } from "../redux/actions"
import { useRef } from "react"
import {useDispatch} from 'react-redux'
import { Link } from "react-router-dom"
import {AiOutlineShoppingCart} from 'react-icons/ai'

function Header() {
    const [searchInput,setSearchInput]=useState('')
    const dispatch=useDispatch()
    const ref=useRef()
    
  return (
    <div className="header-div">
        {/*logo the left */}
        <div className="logo-search">
        <Link to='/'>
        <img className="logo" src='https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-640x400.png' alt="logo"/>
        </Link>
    {/*search box on center */}
    <div className="input-logo">
        <input   id='search' className="search" type="txt" onFocus={(e)=>document.getElementById('link-items').style.color='black'} value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}/>
        <label htmlFor="search">
            <FcSearch onClick={()=>{dispatch(inputValue(searchInput));}} className="search-icon"/>
        </label>
    </div>
    </div>
    {/* 3 link elements */}
    <div  className="links">
        <Link id="link-items" className="link-items" to='/login'>SignIn</Link>
        <Link className="link-items" to='/about'>About</Link>
        <Link className="link-items" to='/order'>Order</Link>
        <AiOutlineShoppingCart className="link-items cart-img"/>
        <h3>0</h3>
    </div>
    {/*cart on the right */}
        
    </div>
  )
}
export default Header