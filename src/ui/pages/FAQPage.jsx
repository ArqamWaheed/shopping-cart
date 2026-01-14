import '../../styles/FAQPage.css'

function FAQPage() {
  return (
    <div className="FAQPage">
        <div className="FAQIntro">
          <div className="FAQIntro__content">
            <h1>Frequently Asked Questions</h1>
            <hr />
            <p>Find answers to common questions about our figurines, shipping, and policies.</p>
          </div>
        </div>
        
        <div className="FAQContent">
          <section className="FAQSection">
            <h2>Are these official One Piece figurines?</h2>
            <p>Yes! All our figurines are officially licensed One Piece merchandise. We work directly with authorized distributors to ensure every piece is authentic and meets the highest quality standards.</p>
          </section>
          
          <section className="FAQSection">
            <h2>How long does shipping take?</h2>
            <p>Standard shipping typically takes 5-7 business days within the continental US. International shipping times vary by destination, usually 10-21 business days. Expedited options are available at checkout.</p>
          </section>
          
          <section className="FAQSection">
            <h2>What is your return policy?</h2>
            <p>We offer a 30-day return policy for unopened items in original packaging. If you receive a damaged figurine, please contact us within 48 hours with photos, and we'll arrange a replacement or full refund.</p>
          </section>
          
          <section className="FAQSection">
            <h2>Do you ship internationally?</h2>
            <p>Yes, we ship worldwide! International shipping rates and delivery times are calculated at checkout based on your location. Please note that customs fees and import duties may apply depending on your country.</p>
          </section>
          
          <section className="FAQSection">
            <h2>How should I care for my figurines?</h2>
            <p>Keep figurines away from direct sunlight to prevent color fading. Dust regularly with a soft, dry cloth or compressed air. Avoid using water or cleaning chemicals. Store in a cool, dry place away from heat sources.</p>
          </section>
          
          <section className="FAQSection">
            <h2>When will new figurines be restocked?</h2>
            <p>We restock popular items regularly, but availability depends on manufacturer production schedules. Sign up for our newsletter or follow us on social media to get notifications when sought-after figurines return to stock.</p>
          </section>
        </div>
    </div>
  )
}

export default FAQPage
