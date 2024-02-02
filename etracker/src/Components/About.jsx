import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../Styles/About.css'

const About = () => {
  return (
   <>
   <Navbar/>
   <br />
   <div id="about">
   <h1>Welcome to [Company Name], your trusted partner for Expense Tracking</h1>
  <br /><br />
<h4>Our work ethic revolves around transparency, reliability, and dedication. We believe in providing straightforward solutions and
     actionable insights to help you make informed investment decisions. Your success is our success, and we are committed to
      delivering results with integrity. </h4>
    <br />
      <h4>The culture at [Company Name] is one of collaboration and continuous learning. 
      We foster an environment where teamwork thrives, and everyone's contribution is valued. Embracing diversity,
       we celebrate different perspectives, knowing that it enriches our approach to fiance management. </h4>
      <br />
      <h4>With a commitment to simplicity, we've stripped away unnecessary complexities. 
       Our goal is to make managing finace  accessible to all. 
       Trust us to be your partner on this financial journey, guiding you towards your investment goals. </h4>
       
       <br /><br />
       <h3>[Company Name] - Simplifying your finace.</h3>
   </div>
   
       <Footer/>
       
  </>
  )
}

export default About