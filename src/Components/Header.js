
import React from 'react'
import "../Styles/Header.css"

function Header() {
  return (
    <header id='header' className='header fixed-top d-flex align-items-center'>
      {/* LOGO */}
      <div className='d-flex align-items-center justify-content-between'>
        <a href='/' className='logo d-flex align-items-center'>
          <img src='' alt='' />
          <span className='d-none d-lg-block'>NaivasCRM</span>
        </a>
      </div>
  

      {/* navbar */}
      <nav className='header-nav ms-auto'>
        <ul className='d-flex align-items-center '>
        
        </ul>
      </nav>


   </header>

   
  )
}

export default Header;