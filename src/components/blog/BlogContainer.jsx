import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import BlogPreview from './Blog'

import DBerry from './images/D-Berry2.jpg'

function BlogContainer(props) {
  return (
    <>
    <div className='blog-container'>
        <div className='container'>
            <div className="blog-content">
                <div className="blog-header">
                    <img src={DBerry} alt=""/>
                    <div className="blog-title">
                        <h2>Kenyan music is busting with fresh talents </h2>
                        <p>6/27/2024</p>
                    </div>
                </div>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores aperiam nisi ducimus voluptatum eveniet doloribus similique repellendus quidem ratione, reiciendis quo, quas deleniti explicabo placeat necessitatibus quod cupiditate at error.</p>


                <div className="edit-post">
                    <button><FontAwesomeIcon icon={faEdit}/></button>
                </div>
            </div>
            <div className="share-post">
                <div>
                    <h3>Share on</h3>
                    <div className="wrapper">
                        <div><FontAwesomeIcon icon={faWhatsapp}/></div>
                        <div><FontAwesomeIcon icon={faFacebookF}/></div>
                        <div><FontAwesomeIcon icon={faXTwitter}/></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <BlogPreview/>
    </>
  )
}

export default BlogContainer