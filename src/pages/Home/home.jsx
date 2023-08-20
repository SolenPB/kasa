import img1 from '../../assets/img1.png'

function Home() {
    return (<div className='title-gallery'>      
        <img className="title-gallery__sea"src={img1} alt="Vue sur la mer"/>     
        <p className='title-gallery__title-sea'>
          Chez vous, partout et ailleurs
        </p>
    </div>
    )
  }

  export default Home