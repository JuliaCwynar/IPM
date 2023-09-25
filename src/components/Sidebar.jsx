import img1 from '../../public/b46dc4be-9028-4560-aa6e-3c64425f18a7.jfif'
import img2 from '../../public/1e8065c7-45d5-448b-b2ae-96e54724bb90.jfif'
import img3 from '../../public/image0 (1).jpeg'
import img4 from '../../public/WhatsApp Image 2023-09-19 at 12.22.46.jpeg'
import './sidebar.css'



function Sidebar() {
  return (

<div className='navbar'>
  <div className='members'>
        <ul>
        <div className='person'>
  <img src={img1}></img>
  <div className='description' style={{paddingLeft: '20px'}}>
    <p><b>Filip Brna</b></p>
    <p>68859</p>
    <a href="https://www.w3schools.com">Portfolio</a>
  </div>
  </div>
  <div className='person'>
  <img src={img4}></img>
  <div className='description'>
    <p><b>David Pestana</b></p>
    <p>59812</p>
    <a href="https://www.w3schools.com">Portfolio</a>
  </div>
  </div>
  <div className='person'>
  <img src={img2}></img>
  <div className='description'>
    <p><b>Artur Vázquez</b></p>
    <p>68771</p>
    <a href="https://www.w3schools.com">Portfolio</a>
  </div>
  </div>
  <div className='person'>
  <img src={img3}></img>
  <div className='description'>
    <p><b>Julia Cwynar</b></p>
    <p>68846</p>
    <a href="https://www.w3schools.com">Portfolio</a>
  </div>
  </div>
        </ul>
        </div>
      </div>
  )
      }
      
export default Sidebar