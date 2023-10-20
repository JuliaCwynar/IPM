import React, { useRef, useEffect, useState } from 'react';
import Member from './Member.jsx';
import img1 from '../../public/b46dc4be-9028-4560-aa6e-3c64425f18a7.jfif';
import img2 from '../../public/1e8065c7-45d5-448b-b2ae-96e54724bb90.jfif';
import img3 from '../../public/image0 (1).jpeg';
import img4 from '../../public/WhatsApp Image 2023-09-19 at 12.22.46.jpeg';

function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

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
          <a href='https://drive.google.com/drive/folders/1kXd9Gr0tN9-vBG-8FHmG9y_AArLsZFeb?usp=sharing' style={{margin: '10vw'}}>Google Drive</a>
          { windowWidth < 800  && (
       <div className='mobile--members'>
          <Member name="Filip Brna" id="68859" img={img1} link="https://drive.google.com/drive/folders/1jz2Db39LU8di-CkoYErbjqvzVHVDIzAA"/>
          <Member name="David Pestena" id="59812" img={img4} link="https://drive.google.com/drive/folders/1C_Fk27CXg7nZHBR1fTznda2kZpwOhB_M"/>
          <Member name="Artur Vázquez" id="68771" img={img2} link="https://drive.google.com/drive/folders/1n12iflgTa8_S96GdyhEThCKk6ORs7RQN"/>
          <Member name="Julia Cwynar" id="68846" img={img3} link="https://drive.google.com/drive/folders/1Mu-CI1oVihahpd0EECqTqil8wTHdYmYU"/>
       </div>
  )
    }
          </div>
    </div>

  </div>
  )
}

export default Header
