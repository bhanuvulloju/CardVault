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

            <div className='testimonials-block' style={{marginTop:'60px'}}>
                <h3 className='testimonials-block-a'>OUR SUPPORT TEAM</h3>
                <h1 className='testimonials-block-b'>Talk to real people</h1>

                <div className='contact-items'>
                <div className='contact-items-li-a'>
                    {/* <h3 style={{marginLeft:'70px',marginBottom:'5px'}}>Chat Support</h3>  */}
                    <img src={require('../images/boy1.jpg')} alt="" className='img-logo-testimonial'/>
                    <p style={{fontFamily:'cursive'}}> <span style={{fontSize:'larger'}}>💬  </span> 
                        We are satisfied with the project given to us and with the communication flow through the project.
                    </p>
                    <p style={{marginLeft:'32px',fontFamily:'fantasy'}}>- Alok John</p>
                    {/* <p style={{marginLeft:'80px',marginTop:'10px',fontWeight:'bold',color:'blue'}}>Chat Now &#8594;</p> */}
                </div>
                <div className='contact-items-li-a'>
                {/* <h3 style={{marginLeft:'70px',marginBottom:'5px'}}>Email Support</h3>  */}
                <img src={require('../images/girl1.jpg')} alt="" className='img-logo-testimonial'/>

                    <p style={{fontFamily:'cursive'}}> 
                        Everyone of our team were professional, excellent and hard working. 
                    <span style={{fontSize:'larger'}}> 💬</span> 
                    </p>
                    <p style={{marginLeft:'32px',fontFamily:'fantasy'}}>- Dany Williams</p>
                    {/* <p style={{marginLeft:'80px',marginTop:'10px',fontWeight:'bold',color:'blue'}}>Send email &#8594;</p> */}
                </div>
                <div className='contact-items-li-a'>
                <img src={require('../images/boy2.jpg')} alt="" className='img-logo-testimonial'/>
                    <p style={{fontFamily:'cursive'}}>
                    <span style={{fontSize:'larger'}}>💬</span>
                    Thanks to team, we were able to achieve our goal on time, 
                    and we look forward to continue working in the future.
                    </p>
                    <p style={{marginLeft:'52px',fontFamily:'fantasy'}}>- Jon Snow</p>
                    {/* <p style={{marginLeft:'60px',marginTop:'10px',fontWeight:'bold',color:'blue'}}>Visit help center &#8594;</p> */}
                </div>
               
            </div>

            </div>

        </div>
        
    </>
  )
}
