import React, { Component } from 'react'

export default class Skill extends Component {
  constructor(props) {
    super(props)
    this.state = { hovered: true }
  }

  onMouseEnterHandler = () => {
    this.setState({
      hovered: false,
    })
  }

  onMouseLeaveHandler = () => {
    this.setState({
      hovered: true,
    })
  }

  render() {
    return (
      <i
        className={`${this.props.skill}`}
        style={{ opacity: this.state.hovered ? 1 : 0.5 }}
        onMouseEnter={() => this.onMouseEnterHandler()}
        onMouseLeave={() => this.onMouseLeaveHandler()}
      />
    )
  }
}

// const Skill = (skill) => {
//   const [Animate, setAnimate] = useState('')

//   const hoverHandler = () => {
//     setAnimate('animate__animated animate__bounce')
//   }

//   return (
//     <div>
//       <i
//         className={`devicon-${skill}-plain ${Animate}`}
//         onMouseEnter={() => hoverHandler()}
//       />
//     </div>
//   )
// }

// export default Skill
