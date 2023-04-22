

import { Button, ButtonGroup } from '@chakra-ui/react'
export default function(){
    return (
       
  
        <div style={{ marginTop:"4%",  textAlign:"center" }}>
           
            <div className="guruji-main-content" style={{height:'200px'}}>
                <h1  style={{fontSize:"60px", color:'white'}}>
                    <b>“Astrology for Clarity”</b></h1>
                <p style={{width:"367px", marginLeft:"720px", color:"white", fontSize:"18px"}}>Your Name is a Vedic Astrologer and has expertise in Vaastu and Mantra Theraphy </p>
            </div>

            <Button colorScheme='orange' marginTop={'10px'}>Consult Now</Button>

            <div className='guruji-information' style={{display:'flex', justifyContent:"center" ,padding:"3%"  , textAlign:"center"}}>
                <div style={{display:'flex', flexDirection:"row"}}>
                    <div  style={{margin:"15px 20px 24px"}}>
                        <i className="fa-solid fa-person-chalkboard" style={{height:"20px"}}></i>
                        <p>24 X 7 Customer Support</p>
                    </div>
                    <div style={{margin:"15px 20px 24px"}}>
                        <i className="fa-solid fa-person-chalkboard"></i>
                        <p>100% Refund if Unsatisfied</p>
                    </div>

                    <div style={{margin:"15px 20px 24px"}}>
                        <i class="fa-sharp fa-light fa-user-astronaut"></i>
                        <p>Verified Astrologer</p>
                    </div>
                     <div style={{margin:"15px 20px 24px"}}>
                        <i class="fa-sharp fa-regular fa-lock" ></i>
                        <p>Secure Payment</p>
                    </div>
                </div>
                
            </div>

        </div>
    ) 
}
