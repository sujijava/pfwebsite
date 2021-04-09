import React, { Component } from 'react'
import Skill from './Skill'

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData

    return (
      <section id='portfolio'>
        <h1>Check Out Some of My Works.</h1>
        <div id='portfolio-wrapper' className='container-fluid'>
          {resumeData.portfolio &&
            resumeData.portfolio.map((item) => {
              return (
                <div
                  className='row'
                  style={{ marginBottom: '3%', marginLeft: '7%' }}
                >
                  <div className='col-3 portfolio-item'>
                    <img
                      className
                      src={`${item.imgurl}`}
                      className='item-img'
                    />
                  </div>
                  <div className='col-9 desc-container'>
                    <p style={{ fontWeight: 'bold', fontSize: 'medium' }}>
                      {item.name}
                    </p>
                    <p>{item.description}</p>
                    <div
                      className='project_skills_container container'
                      style={{ marginBottom: 20 }}
                    >
                      {item.skills.map((skill, index) => {
                        return <Skill key={index} skill={skill} />
                      })}
                    </div>
                    <a
                      href={item.live_demo_url}
                      style={{ marginRight: 30 }}
                      className='button'
                    >
                      Live Demo
                    </a>
                    <a
                      href={item.source_code_url}
                      style={{ marginRight: 30 }}
                      className='button'
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              )
            })}
        </div>
      </section>
    )
  }
}
