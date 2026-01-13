import '../../styles/Homepage.css'
import wallpaper from '../../assets/Wallpaper.png'
import { Link } from 'react-router'

function Homepage() {
  return (
    <>
      <div className="Homepage">
        <img src={wallpaper} className="WallpaperImg" alt="Wallpaper" /> 
        <div className="textContent">
          <h1>BROWSE THE <span>COLLECTION</span></h1>
          <hr />
          <p>Authentic One Piece figurines crafted for collectors who value detail, quality, and character accuracy. Each piece captures the spirit of the character, from sculpting to paint, made to stand out on any shelf.</p>
          <Link to="/shop"><button className="BuyBtn">Buy Now</button></Link>
        </div>
      </div>
    </>
  )
}

export default Homepage
