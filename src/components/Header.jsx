import './sidebar.css'
import logo from './../../public/logo.jfif'

function Header() {

  return (
  <div className='header'>
    <img style={{height: '10vw', margin: '0', padding: '1vw'}}src='https://labellefoundation.org/wp-content/uploads/2022/03/cropped-Labelle_Logo_Desing_Only.png'></img>
    <div className='title'>
      <h1>FurrEver Friends</h1>
      <h2>Lab 2 | Group 1</h2>
      <div className='desc'>
          <h2>Project description</h2>
        <p>Platform to help animals improve/simplify their life quality in shelter or find a new home. We want to create a website that will allow the user to take a pet from the shelter for a walk, to become it's patron with a monthly contribution for food or equipment, or even to adopt the selected dog.</p>
          <p>Platform should work as well as a link between person and shelter itself.</p>
          </div>
    </div>
  </div>
  )
}

export default Header
