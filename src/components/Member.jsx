import './sidebar.css'

function Member({name, id, img}) {

    return (
    <div className='person'>
        <img src={img}></img>
        <div className='description' style={{paddingLeft: '20px'}}>
            <p><b>{name}</b></p>
            <p>{id}</p>
            <button className='portfolio'>Portfolio</button>
        </div>
    </div>
    )
  }

  export default Member