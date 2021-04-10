import React, { Component } from 'react'
import Header from './components/Header'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import resumeData from './resumeData'
import Confetti from 'react-confetti'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Confetti width='2000' height='1000' />
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        {/* <ContactUs resumeData={resumeData} /> */}
        <Footer resumeData={resumeData} />
      </div>
    )
  }
}

export default App
