import img1 from '../../assets/img1.png'

function Home() {
    return (<div className='title-gallery'>      
        <img className="sea"src={img1} alt="Vue sur la mer"/>     
        <p className='title-sea'>
          Chez vous, partout et ailleurs
        </p>
    </div>
    )
  }

  export default Home