import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar' >
        <ul className='nav-list'>
        <li><a href="/"><img src={require('../images/cardvault.png')} alt="" className='img-logo'/></a>  </li>
        <li className='list-text' ><a href="/">Home</a></li>
        <li className='list-text'><a href="/debit">Debit Card</a></li>
        <li className='list-text'><a href="/credit">Credit Card</a></li>
        <li className='list-contact'><a href="/contact">Contact</a></li>

        </ul>
     
    </div>
  )
}
