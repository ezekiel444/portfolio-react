import React,{useState} from "react";
import "./contactStyle.css";
import Signature from "../../image/signature.png";
import { motion } from "framer-motion";

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
        <motion.div
          className="col-sm-12 col-md-6 col-xl-6"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.4 }}
        >
          <h2>If Not Now, When? Let’s Work Together!</h2>
          <br />
          <p>I deliver your business as fast as possible...</p>
          <br />
        </motion.div>
        <div className="col-sm-12 col-md-6 col-xl-6">
          <div className="contactMessage">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 1.4 }}
            >
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
            </motion.form>
            <motion.div
              className="signature"
              initial={{ y: "100vh" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <img src={Signature} alt="sign" />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
