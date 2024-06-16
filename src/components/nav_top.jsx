
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './nav_top.css'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const nav_top = () => {
  return (
    <div className="top-nav container-fluid">
      <nav className="container-fluid navv">
        <div className="logo">
            <img src="https://sarafabazar.in/cdn/shop/files/LOGO_WHITE_250x@2x.png?v=1626352796" alt="" />
        </div>
        <form action="">
            <div className="form-group d-flex ">
            <FontAwesomeIcon className='px-2' icon={faMagnifyingGlass} />
                <input type="text" className="form-control "  placeholder="Search Wholesale Jewellery Sellers and Products"/>
            </div>
        </form>
        <div className="acc d-flex ">
            <span className='px-2'><a href="#" style={{textDecoration:'none', color:'#d1a664'}}>Buyer&apos;s Account &nbsp; |</a></span>
            <span className='px-2'><a href="#" style={{textDecoration:'none', color:'#d1a664'}}>Seller&apos;s Account</a></span>
        </div>
      </nav>
    </div>
  )
}

export default nav_top
