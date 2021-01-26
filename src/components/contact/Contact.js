import React,{useState} from "react";
import "./contactStyle.css";
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

for (let key in inputField){
  if (inputField[key] ===''){
    setError_message(`You must provide ${key}`)
    return
  }
}
setError_message("")
}


const handleInput = (e)=>{
const currentName = e.currentTarget.name
const currentValue = e.currentTarget.value
setinputField(prev=>({...prev, [currentName]:currentValue}))
}

  return (
    <main className="container contact">
      <section className="row">
        {/* <ContactStyle className="contactStyle"> */}
        {/* <div className="contact-now"> */}
        <div className="col-sm-12 col-md-6 col-xl-6">
          <h2>If Not Now, When? Let’s Work Together!</h2>
          <br />
          <p>I deliver your business as fast as possible...</p>
          <br />
        </div>
        <div className="col-sm-12 col-md-6 col-xl-6">
          <div className="contactMessage">
            <form onSubmit={handleSubmit}>
              <label htmlFor="fullname">FullName</label>
              <input
                placeholder="Fullname"
                type="text"
                value={inputField.fullname}
                name="fullname"
                onChange={handleInput}
              />
              <label htmlFor="email">Email</label>
              <input
                placeholder="Email"
                name="email"
                type="email"
                value={inputField.email}
                onChange={handleInput}
              />
              <fieldset>
                <legend>Gender</legend>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={inputField.gender === "male"}
                    onChange={handleInput}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={inputField.gender === "female"}
                    onChange={handleInput}
                  />
                  Female
                </label>
              </fieldset>
              <label htmlFor="message">Your Message</label>
              <textarea
                name="message"
                placeholder="Your Message"
                value={inputField.message}
                onChange={handleInput}
              ></textarea>
              {error_message && <p>{error_message}</p>}
              <button type="submit">Send Message</button>
            </form>
            <div className="signature">
              <img src={Signature} alt="sign" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
