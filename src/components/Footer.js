import React, { Component } from 'react'
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData
    return (
      <footer>
        <div className='row'>
          <div className='twelve columns' style={{ marginLeft: '-5%' }}>
            <ul className='social-links'>
              {resumeData.socialLinks &&
                resumeData.socialLinks.map((item) => {
                  return (
                    <li>
                      <a style={{ textDecoration: 'none' }} href={item.url}>
                        <i className={item.className} />
                      </a>
                    </li>
                  )
                })}
            </ul>
          </div>
          <div id='go-top'>
            <a className='smoothscroll' title='Back to Top' href='#home'>
              <i className='fas fa-chevron-up' />
            </a>
          </div>
        </div>
      </footer>
    )
  }
}
