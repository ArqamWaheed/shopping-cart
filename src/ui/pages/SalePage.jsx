import SaleCard from '../../sharedCH/components/SaleCard';
import '../../styles/SalePage.css'
import AokijiImage from "../../assets/FigurineAokiji.jpg";
import GoingMerry from "../../assets/FigurineGoingMerry.jpg";
import Kaido from "../../assets/FigurineKaido.jpg";
import Robin from "../../assets/FigurineRobin.webp";
import Sabo from "../../assets/FigurineSabo.webp";
import Sanji from "../../assets/FigurineSanji.webp";
import Shanks from "../../assets/FigurineShanks.webp";
import Zoro from "../../assets/FigurineZoro.webp";
import Luffy from "../../assets/FiguringLuffy.webp";

const figurines = [
  { img: AokijiImage, name: 'Aokiji Figurine' },
  { img: GoingMerry, name: 'Going Merry Figurine' },
  { img: Kaido, name: 'Kaido Figurine' },
  { img: Robin, name: 'Robin Figurine' },
  { img: Sabo, name: 'Sabo Figurine' },
  { img: Sanji, name: 'Sanji Figurine' },
  { img: Shanks, name: 'Shanks Figurine' },
  { img: Zoro, name: 'Zoro Figurine' },
  { img: Luffy, name: 'Luffy Figurine' },
];

const items = figurines.map((f) => ({
  ...f,
  price: `${(Math.random() * 200 + 20).toFixed(2)} $`,
}));

function SalePage() {
  return (
    <div className='SalePage'>
        <div className="SaleIntro">
          <div className="SaleIntro__content">
            <h1>Explore the Collection</h1>
            <hr />
            <p>Discover authentic One Piece figurines — carefully sculpted and painted for collectors. Browse the range below and add your favorites to the cart.</p>
          </div>
        </div>
        <div className='SalePageContainer'>
            {items.map((it, idx) => (
              <SaleCard
                key={idx}
                imgSrc={it.img}
                figurineName={it.name}
                figurinePrice={it.price}
              />
            ))}
        </div>
    </div>
  )
}

export default SalePage;


