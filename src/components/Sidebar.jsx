import img1 from '../../public/b46dc4be-9028-4560-aa6e-3c64425f18a7.jfif'
import img2 from '../../public/1e8065c7-45d5-448b-b2ae-96e54724bb90.jfif'
import img3 from '../../public/image0 (1).jpeg'
import img4 from '../../public/WhatsApp Image 2023-09-19 at 12.22.46.jpeg'
import './sidebar.css'
import Member from './Member.jsx'



function Sidebar() {
  return (

<div className='navbar'>
  <ul>
    <Member name="Filip Brna" id="68859" img={img1} link="https://drive.google.com/drive/folders/1jz2Db39LU8di-CkoYErbjqvzVHVDIzAA"/>
    <Member name="David Pestena" id="59812" img={img4}/>
    <Member name="Artur Vázquez" id="68771" img={img2}/>
    <Member name="Julia Cwynar" id="68846" img={img3} link="https://drive.google.com/drive/folders/1Mu-CI1oVihahpd0EECqTqil8wTHdYmYU"/>
  </ul>
</div>
  )
      }
      
export default Sidebar