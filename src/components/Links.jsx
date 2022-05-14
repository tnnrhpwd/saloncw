function Links() {
  return (
    <div className="links">
      <div className="links-appointments">
        <div className="links-appointments-text">
          Appointments are preferred but optional. 
          Schedule an appointment now online or over-the-phone.
        </div>
        <a className="links-appointments-lk" href="tel:9313596655">
          <button className="links-appointments-link">
            Phone#
          </button>
        </a>

        <a className="links-appointments-lk" href="https://www.vagaro.com/saloncwcuts1/" rel="noreferrer" target="_blank">
          <button className="links-appointments-link">
            Vagaro
          </button>
        </a>

      </div>
      <div className="links-location">
        <div className="links-location-desc">
          <div className='links-location-desc-side'>
            <div className="links-location-title">
              Location
            </div>
            <div className="links-location-add">
              Salon CW Cuts <br/>
              1300 South Ellington Parkway <br/>
              Lewisburg, TN 37091, US <br/>
              (931) 359-6655 <br/>
              <br/>
            </div>
            <div className="links-location-dir">
              Get directions
            </div>
          </div>
          <div className='links-location-desc-side'>
            <div className="links-location-title">
              General Hours
            </div>
            <div className="links-location-hours">
              Monday 9:00am - 5:00pm <br/>
              Tuesday 9:00am - 5:00pm <br/>
              Wednesday 9:00am - 5:00pm <br/>
              Thursday 9:00am - 5:00pm <br/>
              Friday 9:00am - 5:00pm <br/>
              Saturday 9:00am - 1:00pm <br/>
              Sunday Closed <br/>
            </div>
          </div>
        </div>
      </div>
      <div className="links-profiles">
        <div className="links-profiles-div">
          <div className="links-profiles-div-btn">
            <a className="links-profiles-div-btn-lnk" href="https://www.facebook.com/Salon-CW-Cuts-181126960232" rel="noreferrer" target="_blank">
              <button className="links-profiles-div-btn-btn">
                FaceBook
              </button>
            </a>
          </div>
          <div className="links-profiles-div-btn">
            <a className="links-profiles-div-btn-lnk" href="https://steviesboutique.com/" rel="noreferrer" target="_blank">
              <button className="links-profiles-div-btn-btn">
              Stevies Boutique
              </button>
            </a>
          </div>
          <div className="links-profiles-div-btn">
            <a className="links-profiles-div-btn-lnk" href="https://www.instagram.com/SalonCWCuts" rel="noreferrer" target="_blank">
              <button className="links-profiles-div-btn-btn">
              Instagram
              </button>
            </a>
          </div>
          {/* <div className="links-profiles-div-btn">
            <a className="links-profiles-div-btn-lnk" href="https://www.vagaro.com/saloncwcuts1/" rel="noreferrer" target="_blank">
              <button className="links-profiles-div-btn-btn">
              Vagaro
              </button>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Links