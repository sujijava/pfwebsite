import React, { Component } from 'react'
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData
    return (
      <footer>
        <div id='go-top'>
          <a className='smoothscroll' title='Back to Top' href='#home'>
            <i className='fas fa-chevron-up' />
          </a>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <p style={{ fontSize: '20px' }}>
              © 2021 <a href='https://github.com/sujijava'>Sujijava</a> |
            susieoh8@gmail.com
          </p>
        </div>
      </footer>
    )
  }
}
