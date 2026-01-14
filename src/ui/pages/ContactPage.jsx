import '../../styles/ContactPage.css'

function ContactPage() {
  return (
    <div className="ContactPage">
        <div className="ContactIntro">
          <div className="ContactIntro__content">
            <h1>Contact Us</h1>
            <hr />
            <p>Have questions about our figurines or need assistance? We're here to help you on your collecting journey.</p>
          </div>
        </div>
        
        <div className="ContactContent">
          <section className="ContactSection">
            <h2>Get In Touch</h2>
            <p>Whether you have questions about a specific figurine, need shipping information, or want to share your collection with us, we'd love to hear from you!</p>
          </section>
          
          <section className="ContactSection">
            <h2>Email</h2>
            <p>support@onepiecefigurines.com</p>
            <p className="ContactMuted">We typically respond within 24 hours</p>
          </section>
          
          <section className="ContactSection">
            <h2>Customer Support Hours</h2>
            <p>Monday - Friday: 9:00 AM - 6:00 PM (EST)</p>
            <p>Saturday: 10:00 AM - 4:00 PM (EST)</p>
            <p>Sunday: Closed</p>
          </section>
          
          <section className="ContactSection">
            <h2>Follow Us</h2>
            <p>Stay updated with new releases, exclusive deals, and collector tips on our social media channels.</p>
            <p className="ContactMuted">@OnePieceFigurines on all platforms</p>
          </section>
        </div>
    </div>
  )
}

export default ContactPage
