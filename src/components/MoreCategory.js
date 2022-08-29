import React, { Component } from 'react'
import Entertainment from './moreCatergory/Entertainment'
import Food from './moreCatergory/Food'
import World from './moreCatergory/World'
import SmallNewsCard from './SmallNewsCard'

export class MoreCategory extends Component {
  render() {
    return (
      <div className='container'>
        <h3><span className="badge bg-primary"> More Category</span></h3>
        <div className=' d-flex my-2 mx-4'>
          <Food category="Food" />
          <Entertainment category="entertainment" />
          <World category="world" />
        </div>
      </div >
    )
  }
}

export default MoreCategory
