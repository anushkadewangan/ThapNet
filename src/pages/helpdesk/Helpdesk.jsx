import "./helpdesk.css"
import { Link } from "react-router-dom";
const Helpdesk = () =>
{
    return(
        <div>
    
    <div class="section-header">
      <div class="container">
        <h2>Help Desk</h2>
      </div>
    </div>
    
    <div class="container">
      <div class="row">
        
        <div class="contact-info">
          <div class="contact-info-item">
            
            
            <div class="contact-info-content">
              <h4>Office</h4>
              <p>G204, G-block<br/>Thapar University, Patiala</p>
            </div>
          </div>
          
          <div class="contact-info-item">
            
            
            <div class="contact-info-content">
              <h4>Phone</h4>
              <p>9999999999</p>
            </div>
          </div>
          
          <div class="contact-info-item">
            
            
            <div class="contact-info-content">
              <h4>Email</h4>
             <p>example@thapar.edu</p>
            </div>
          </div>
        </div>
        
        <div class="contact-form">
          <form action="" id="contact-form">
            <h2>Feedback</h2>
            <div class="input-box">
              <input type="text" required="true" name=""></input>
              <span>Full Name</span>
            </div>
            
            <div class="input-box">
              <input type="email" required="true" name=""></input>
              <span>Email</span>
            </div>
            
            <div class="input-box">
              <textarea required="true" name=""></textarea>
              <span>Type your Message...</span>
            </div>
            <div class="input-box">
              <textarea required="true" name=""></textarea>
              <span>Report Abbusive Content</span>
            </div>
            
            <div color="white" align="center">
              <input type="submit" value="Send" name="" color="gray"></input>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  </div>
    
    )
}
export default Helpdesk;