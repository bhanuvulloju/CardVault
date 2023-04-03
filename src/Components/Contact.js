import React from 'react'

export default function Contact() {
  return (
    <>
        <div className='contact-main'>
            <div className='contact-items'>
                <div className='contact-items-li'>
                    <h3 style={{marginLeft:'70px',marginBottom:'5px'}}>Chat Support</h3> 
                    <p>Our support team is just at a click away.
                        Click to know more...
                    </p>
                    <p style={{marginLeft:'80px',marginTop:'10px',fontWeight:'bold',color:'blue'}}>Chat Now &#8594;</p>
                </div>
                <div className='contact-items-li'>
                <h3 style={{marginLeft:'70px',marginBottom:'5px'}}>Email Support</h3> 
                    <p>Prefer to email? Send us an email and we'll get 
                        back to you soon.
                    </p>
                    <p style={{marginLeft:'80px',marginTop:'10px',fontWeight:'bold',color:'blue'}}>Send email &#8594;</p>
                </div>
                <div className='contact-items-li'>
                <h3 style={{marginLeft:'70px',marginBottom:'5px'}}>Help center</h3> 
                    <p>Our self-service help center is open 24/7 
                        Feel free to connect for help 
                    </p>
                    <p style={{marginLeft:'60px',marginTop:'10px',fontWeight:'bold',color:'blue'}}>Visit help center &#8594;</p>
                </div>
            </div>
        
        </div>
    </>
  )
}
