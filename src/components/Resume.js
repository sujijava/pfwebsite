import React, { Component } from 'react'
import Skill from './Skill'

export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData
    return (
      <section id='resume'>
        <div className='rowWithMarginLeft education'>
          <div className='three columns header-col'>
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className='nine columns main-col'>
            {resumeData.education &&
              resumeData.education.map((item) => {
                return (
                  <div className='row item'>
                    <div className='twelve columns'>
                      <h3>{item.UniversityName}</h3>
                      <p className='info'>
                        {item.specialization}
                        <span>&bull;</span>{' '}
                        <em className='date'>{item.duration}</em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
        <div className='rowWithMarginLeft work'>
          <div className='three columns header-col'>
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className='nine columns main-col'>
            {resumeData.work &&
              resumeData.work.map((item) => {
                return (
                  <div className='row item'>
                    <div className='twelve columns'>
                      <h3>{item.CompanyName}</h3>
                      <p className='info'>
                        {item.specialization}
                        <span>&bull;</span>{' '}
                        <em className='date'>
                          {item.MonthOfLeaving} {item.YearOfLeaving}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>

        <div className='rowWithMarginLeft skill'>
          <div className='three columns header-col'>
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className='nine columns main-col'>
            <p style={{ marginBottom: '5%', marginTop: '1.5%' }}>
              Most Experienced
            </p>
            <div className='bars'>
              <ul className='skill_icon_container'>
                <Skill skill='devicon-react-original colored' />
                <Skill skill='devicon-javascript-plain colored' />
                <Skill skill='devicon-java-plain-wordmark colored' />
              </ul>
              <p style={{ marginBottom: '5%', marginTop: '9%' }}>Experienced</p>
              <ul className='skill_icon_container'>
                <Skill skill='devicon-css3-plain-wordmark colored' />
                <Skill skill='devicon-html5-plain colored' />
                <Skill skill='devicon-angularjs-plain colored' />
                <Skill skill='devicon-mysql-plain-wordmark colored' />
                <Skill skill='devicon-mongodb-plain-wordmark colored' />
                <Skill skill='devicon-bootstrap-plain-wordmark colored' />
                <Skill skill='devicon-jquery-plain-wordmark colored' />
                <Skill skill='devicon-github-original-wordmark colored' />
                <Skill skill='devicon-nodejs-plain-wordmark colored' />
                <Skill skill='devicon-typescript-plain colored' />
                <Skill skill='devicon-redux-original colored' />
                <Skill skill='devicon-csharp-plain-wordmark colored' />
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
