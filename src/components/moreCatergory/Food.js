import React, { Component } from 'react'
import SmallNewsCard from '../SmallNewsCard'
import { Link } from 'react-router-dom'

export class Food extends Component {
    artcles1 = [];
    constructor() {
      super();
      this.state = {
        article: this.artcles1,
        laoding: false,
        pageNumber: 1,
        totalPage: Math.ceil(47 / 10)
      }
    }
  
    FetchNews = async () => {
      this.setState({ loading: true })
      let response = await fetch(`https://newsdata.io/api/1/news?apikey=pub_1044831b98b4c545439d317427d3a51bb671a&language=en&category=${this.props.category}&page=${this.state.pageNumber}&page=5`)
      let data = await response.json();
      this.setState({ loading: false, article: data.results })
      console.log(this.state.article)
    }
    async componentDidMount() {
      this.FetchNews();
    }
  
    render() {
      return (
        <div>
          <div className='container my-3'>
          <h5>Food</h5>
            <img src="https://source.unsplash.com/300x200/?food" className="img-fluid" alt="Wild Landscape" style={{ width: "400px", height: "230px" }} />
          </div>
          {
            this.state.article.map((value, i) => {
              return this.state.loading ? "" : <SmallNewsCard url = {value.link} key={value.link} src = "https://source.unsplash.com/300x200/?vegetables,food,fruits" date = {value.pubDate} title = {value.title} image= {value.image_url}/>
            })
          }
        </div>
      )
    }
}

export default Food
