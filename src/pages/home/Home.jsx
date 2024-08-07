import { useState } from 'react'
import Blog from '../../components/blog/Blog'
import DBerry1 from './images/D-Berry1.jpg'
import DBerry2 from './images/D-Berry2.jpg'
import { Helmet } from 'react-helmet'


function Home() {

  const IMAGES = [DBerry1, DBerry2]

  const [ImageIndex, setImageIndex] = useState(0)
  
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>RiZz | Entertainment, Sports, Travel, Politics</title>
        <meta name="description" content="News Updates on Music, Fashion, Lifestyle and Politics." />
        <meta property="og:image" content="https://media.istockphoto.com/id/508516586/photo/havana-aerial.jpg?s=1024x1024&w=is&k=20&c=L-nE72Z3JcPtoNnGQCnlExz89hkKntAMFX-mMb94V00="></meta>
    </Helmet>
    <div className="home">
        <div className='hero'>
            <img src={IMAGES[ImageIndex]} alt=""/>
            <div>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/bOnqOgCJ7PI?si=I5HozrxGG4HG4etm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    </div>
    <Blog/>
    </>
  )
}

export default Home