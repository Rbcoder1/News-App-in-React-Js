import React, { Component } from 'react'
import TopHeadlines from '../components/TopHeadlines'
import TopCategery from '../components/TopCategery'
import HindiNewContainer from '../components/HindiNewContainer'
import MoreCategory from '../components/MoreCategory'

export class Main extends Component {
  render() {
    return (
      <div className='container my-4'>
            <TopCategery/>
            <TopHeadlines category={this.props.category}/>
            <HindiNewContainer heading = "Hindi News"/>
            <MoreCategory/>
      </div>
    )
  }
}

export default Main
