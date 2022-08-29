import React, { Component } from 'react'
import '../Assets/Style/TopCatergeryStyle.css'
export class Loader extends Component {
  render() {
    return (
      <div className='' style={{display:"flex", justifyContent:"center" }}>
      <div className="loader loader7"></div>
      </div>
    )
  }
}

export default Loader
