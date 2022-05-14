import cwlogo from './../assets/CWLogo.png'

function Header() {
  return (
    <div className='header'>
      <img src={cwlogo} alt="saloncw logo" className="header-img" />
    </div>
  )
}

export default Header