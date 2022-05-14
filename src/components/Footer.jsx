import logo from './../assets/Logo - White-Nosides-transparent512.png'
import fbimg from './../assets/facebook.png'
import igimg from './../assets/instagram.png'

function Footer() {
  // Get browser year for copyright
  var today = new Date();
  var year = today.getFullYear();

  return (
    <div className='footer'>
      <img className='footer-img' src={logo} alt="cw logo" />
      <div className='footer-copyright'>
        © {year}
      </div>
      {/* <div className='footer-links'>
        <img className='footer-links-fb' src={fbimg} alt='facebook logo'/>
        <div className='footer-links-ig-bg'>
          <img className='footer-links-ig' src={igimg} alt='instagram logo'/>
        </div>

      </div> */}
    </div>
  )
}

export default Footer