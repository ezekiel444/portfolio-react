import React,{useState} from "react";
import ContactStyle from './contactStyle'
import Signature from "../../image/signature.png";

const initialForm = {
fullname:'',
email:'',
gender:'',
message:''
}

export default function Contact() {
const [inputField, setinputField] = useState(initialForm)
const [error_message, setError_message]= useState("")

const handleSubmit = (e)=>{
e.preventDefault()
console.log({inputField})
}


const handleInput = (e)=>{
const currentName = e.currentTarget.name
const currentValue = e.currentTarget.value
setinputField(prev=>({...prev, [currentName]:currentValue}))
}

  return (
      <ContactStyle className="contactStyle">
        <div className="contact-now">
          <h2>If Not Now, When? Let’s Work Together!</h2>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
            mollitia earum.
          </p>
          <br />
          <div className="signature">
            <img src={Signature} alt="sign" />
          </div>
        </div>
        <div className="contact-message">
          <form onSubmit={handleSubmit}>
          <label htmlFor="fullname">FullName</label>
          <input placeholder="Fullname" type="text" value={inputField.fullname} name="fullname" onChange={handleInput} />
          <label htmlFor="email">Email</label>
          <input placeholder="Email" name="email" type="email" value={inputField.email} onChange={handleInput} />
        <fieldset>
          <legend>Gender</legend>
          <label> 
            <input type="radio" name='gender' value='male' checked={inputField.gender==='male'} onChange={handleInput}  />
            Male
          </label>
          <label>
            <input type="radio" name='gender'  value='female' checked={inputField.gender ==='female'} onChange={handleInput}  />
            Female
          </label>
        </fieldset>
        <label htmlFor='message'>Your Message</label>
          <textarea
            name="message"
            placeholder="Your Message"
            value={inputField.message}
            onChange={handleInput}
          ></textarea>
          <button type="submit">Send Message</button>
          </form>
        </div>
      </ContactStyle>
  );
}
