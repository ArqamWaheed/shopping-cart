import '../../styles/AboutPage.css'

function AboutPage() {
  return (
    <div className="AboutPage">
        <div className="AboutIntro">
          <div className="AboutIntro__content">
            <h1>About Us</h1>
            <hr />
            <p>We are passionate collectors and enthusiasts dedicated to bringing you the finest One Piece figurines from around the world.</p>
          </div>
        </div>
        
        <div className="AboutContent">
          <section className="AboutSection">
            <h2>Our Mission</h2>
            <p>To provide collectors with authentic, high-quality One Piece figurines that capture the essence of each beloved character. Every piece in our collection is carefully curated to ensure exceptional detail, accuracy, and craftsmanship.</p>
          </section>
          
          <section className="AboutSection">
            <h2>Quality Assurance</h2>
            <p>We work directly with trusted manufacturers and distributors to guarantee authenticity. Each figurine undergoes rigorous quality checks before reaching your collection, ensuring you receive only the best.</p>
          </section>
          
          <section className="AboutSection">
            <h2>For Collectors, By Collectors</h2>
            <p>Our team consists of dedicated One Piece fans who understand what collectors truly value. We're here to help you build a collection that brings you joy and captures the spirit of the Grand Line.</p>
          </section>
        </div>
    </div>
  )
}

export default AboutPage
