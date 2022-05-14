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

    </div>
  )
}

export default Footer