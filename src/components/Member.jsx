import './sidebar.css'

function Member({name, id, img, link}) {

    return (
    <div className='person'>
        <img src={img}></img>
        <div className='description' style={{paddingLeft: '20px'}}>
            <p><b>{name}</b></p>
            <p>{id}</p>
            <a href={link} class="btn btn-primary">Portfolio</a>
        </div>
    </div>
    )
  }

  export default Member