import React, { Component } from 'react'
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData
    return (
      <React.Fragment>
        <header id='home'>
          <nav id='nav-wrap'>
            <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
              Show navigation
            </a>
            <a className='mobile-btn' href='#' title='Hide navigation'>
              Hide navigation
            </a>
            <ul id='nav' className='nav'>
              <li className='current'>
                <a className='smoothscroll' href='#home'>
                  Home
                </a>
              </li>
              <li>
                <a className='smoothscroll' href='#about'>
                  About
                </a>
              </li>
              <li>
                <a className='smoothscroll' href='#resume'>
                  Resume
                </a>
              </li>
              <li>
                <a className='smoothscroll' href='#portfolio'>
                  Works
                </a>
              </li>
            </ul>
          </nav>

          <div className='row banner'>
            <div className='banner-text'>
              <h1 className='responsive-headline animate__animated animate__fadeInDown'>
                <span style={{ fontFamily: 'Codystar' }}>I am</span>
                <span> {resumeData.name}.</span>
              </h1>
              <h3>{resumeData.roleDescription}</h3>
              <hr />
              <ul className='social'>
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map((item) => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target='_blank'>
                          <i
                            style={{ fontSize: '100px' }}
                            className={item.className}
                          />
                        </a>
                      </li>
                    )
                  })}
              </ul>
            </div>
          </div>
        </header>
      </React.Fragment>
    )
  }
}
