import React, { Component } from 'react'
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData
    return (
      <section id='about'>
        <div className='rowWithMarginLeft'>
          <div className='three columns' />

          <div className='nine columns main-col'>
            <div className='row'>
              <div className='columns contact-details'>
                <h2>Contact Details</h2>

                <p className='address'>
                  <span>{resumeData.address}</span>
                  <br />
                  <span>{resumeData.email}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
