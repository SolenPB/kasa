import img1 from '../../assets/img1.png'

function Home() {
    return (<div className='titleGallery'>      
        <img className="titleGallery__sea"src={img1} alt="Vue sur la mer"/>     
        <p className='titleGallery__titleSea'>
          Chez vous, partout et ailleurs
        </p>
    </div>
    )
  }

  export default Home