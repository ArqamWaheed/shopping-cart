import SaleCard from '../../sharedCH/components/SaleCard';
import '../../styles/SalePage.css'

function SalePage() {
  return (
    <div className='SalePage'>
        <div className='SalePageContainer'>
            <SaleCard />
            <SaleCard />        
            <SaleCard />
        </div>
    </div>
  )
}

export default SalePage;
