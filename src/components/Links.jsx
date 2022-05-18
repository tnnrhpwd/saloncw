function Links() {

  let width=6000;
  let height=6000;

  const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.083247863754!2d-86.79930388403999!3d35.42796775142593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8863a473d136eb59%3A0xaa0f7c6cbd7a0606!2sC%20w%20Cuts!5e0!3m2!1sen!2ski!4v1652556365860!5m2!1sen!2ski" width=${width} height=${height} style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

  function Iframe(props){
    return (<div dangerouslySetInnerHTML={{__html: props.iframe?props.iframe:""}} />)
  }

  return (
    <div className="links">
      <div className="links-appointments">
        <div className="links-appointments-text">
          Appointments are preferred and optional. 
          Schedule an appointment over-the-phone or online with Vagaro.
        </div>
        <a className="links-appointments-lk" href="tel:9313596655">
          <button className="links-appointments-link">
            Call Now
          </button>
        </a>

        <a className="links-appointments-lk" href="https://www.vagaro.com/saloncwcuts1/" rel="noreferrer" target="_blank">
          <button className="links-appointments-link">
            Vagaro
          </button>
        </a>

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
      <div className="links-location">
        <div className="links-location-desc">
          <div className="links-location-maps">
            <Iframe iframe={iframe} />
          </div>


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
              <a href="https://goo.gl/maps/VGMwggZK4LD3UeAq6" rel="noreferrer" target="_blank">
                <button className="links-location-dir-btn">
                  Get directions
                </button>
              </a>

            </div>
          </div>
          <div className='links-location-desc-side'>
            <div className="links-location-title">
              General Hours
            </div>
            <div className="links-location-hours">
              Weekdays 9:00am - 5:00pm <br/>
              Saturday 9:00am - 1:00pm <br/>
              Sunday Closed <br/>
            </div>
            <div className="links-location-title">
              Email
            </div>
            <div className="links-location-email">
              <a href="mailto:CWCuts@gmail.com">
                CWCuts@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Links