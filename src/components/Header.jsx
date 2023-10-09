import './sidebar.css'
import { useRef } from 'react';
import Member from './Member.jsx'
import img1 from '../../public/b46dc4be-9028-4560-aa6e-3c64425f18a7.jfif'
import img2 from '../../public/1e8065c7-45d5-448b-b2ae-96e54724bb90.jfif'
import img3 from '../../public/image0 (1).jpeg'
import img4 from '../../public/WhatsApp Image 2023-09-19 at 12.22.46.jpeg'
import './sidebar.css'

function Header() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  return (
  <div className='header'>
    <img style={{height: '10vw', margin: '0', padding: '1vw'}}src='https://labellefoundation.org/wp-content/uploads/2022/03/cropped-Labelle_Logo_Desing_Only.png'></img>
    <div className='title'>
      <h1>FurrEver Friends</h1>
      <h2>P1 | Group 4</h2>
      <div className='desc'>
          <h2>Project description</h2>
        <p>Platform to help animals improve/simplify their life quality in shelter or find a new home. We want to create a website that will allow the user to take a pet from the shelter for a walk, to become it's patron with a monthly contribution for food or equipment, or even to adopt the selected dog.</p>
          <p>Platform should work as well as a link between person and shelter itself.</p>
          <a href='https://drive.google.com/drive/folders/1kXd9Gr0tN9-vBG-8FHmG9y_AArLsZFeb?usp=sharing'>Google Drive</a>
          { window.innerWidth < 800  && (
       <div className='mobile--members'>
          <Member name="Filip Brna" id="68859" img={img1}/>
          <Member name="David Pestena" id="59812" img={img2}/>
          <Member name="Artur Vázquez" id="68771" img={img3}/>
          <Member name="Filip Brna" id="68846" img={img4}/>
       </div>
  )
    }
          </div>
    </div>

  </div>
  )
}

export default Header
