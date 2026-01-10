import '../styles/Homepage.css'
import wallpaper from '../../assets/Wallpaper.png' 

function Homepage() {
  return (
    <>
      <div className="Homepage">
        <img className="WallpaperImg" src={wallpaper} alt="Wallpaper" /> 
        <div className="textContent">
          <h1>BROWSE THE <span>COLLECTION</span></h1>
          <hr></hr>
          <p>Authentic One Piece figurines crafted for collectors who value detail, quality, and character accuracy. Each piece captures the spirit of the character, from sculpting to paint, made to stand out on any shelf.</p>
          <button class="BuyBtn">Buy Now</button>
        </div>
      </div>
    </>
  )
}

export default Homepage