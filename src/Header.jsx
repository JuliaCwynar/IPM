import { useState } from 'react'
import './App.css'

function Header() {

  return (
  <div className='header'>
    <div className='title'>
      <h1>FurrEver Friends</h1>
    </div>
      <div className='navbar'>
        <ul>
          <a href="#news">Lab Class P1</a>
            <p><b>Filip Brna</b> 68859</p>
            <p><b>David Pestana</b> 59812</p>
            <p><b>Artur Vázquez</b> 68771</p>
            <p><b>Julia Cwynar</b> 68846</p>
          <a href="#contact">Animal shelter platform</a>
          <p>Platform to help animals improve/simplify their life quality in shelter or find a new home. We want to create a website that will allow the user to take a pet from the shelter for a walk, to become it's patron with a monthly contribution for food or equipment, or even to adopt the selected dog.</p>
          <p>Platform should work as well as a link between person and shelter itself.</p>
        </ul>
      </div>
    </div>
  )
}

export default Header
