import { motion } from 'framer-motion';
import React from 'react'
import { NavLink } from 'react-router-dom';
import './servicestyle.css'

const serviceOffer = [
  { id: 1, icon: "icon", title: "UI/UX Design", details: "Hellllooo" },
  {
    id: 2,
    icon: "icon",
    title: "DIGITAL MARTKETING",
    details: "normal testing",
  },
  { id: 3, icon: "icon", title: "WEBSITE Design", details: "website" },
  { id: 4, icon: "icon", title: "WEBSITE Design", details: "website" },
  { id: 5, icon: "icon", title: "WEBSITE Design", details: "website" },
  { id: 6, icon: "icon", title: "WEBSITE Design", details: "website" },
  { id: 7, icon: "icon", title: "WEBSITE Design", details: "website" },
];


function Service() {
    return (
      <>
        <main className="container">
          <aside className="row">
            <section
              className="col-sm-12 col-md-6 col-xl-6"
             
            >
              <motion.div
              initial={{x:-100}}
              animate={{x:0}}
              transition={{duration:1.2}}
              >
                <h2>Designing With Passion While Exploring The World.</h2>
                <p>
                  Here are some of my projects i did for fun. PS. I spent most
                  of my leisure time creating or developing random projects 😍
                </p>
              </motion.div>
            </section>
            <motion.div
              className="col-sm-12 col-md-6 col-xl-6"
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 1.4 }}
            >
              {" "}
              <section>
                <h2>Any Type Of Query & Discussion.</h2>
                <h3>Late talk with me</h3>
                <NavLink to="/contact">Lets work </NavLink>

                <span>
                  {/* hire@ezekielmatomi588@gmail.com <MdArrowForward /> */}
                </span>
              </section>
            </motion.div>
          </aside>
        </main>
        <motion.div
          className="container-fluid"
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 1.4 }}
        >
          <article className="row">
            <section className="col-sm-12 col-md-6 col-xl-6 mx-auto text-center">
              <h2>Some of my projects.</h2>
              <div className="d-flex justify-content-center gap-5 service-product">
                {serviceOffer.map(({ title, icon, details, id }) => {
                  return (
                    <div className="service-item" key={id}>
                      <h3>{title}</h3>
                      <div>{icon}</div>
                      <p>{details}</p>
                    </div>
                  );
                })}
              </div>
            </section>
          </article>
        </motion.div>
      </>
    );
}

export default Service
