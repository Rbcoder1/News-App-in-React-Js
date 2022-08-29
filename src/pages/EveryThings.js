import React, { Component } from 'react'
import Loader from '../components/Loader';
import NewsItem from '../components/NewsItem';

export class EveryThings extends Component {


    artcles1 = []
    constructor() {
        super();
        this.state = {
            article: this.artcles1,
            laoding: false,
            pageNumber: 1,
            totalPage: Math.ceil(70 / 5)
        }
    }


    async componentDidMount() {
        this.setState({ loading: true })
        let response = await fetch(`https://newsapi.org/v2/everything?q=technology&apiKey=6966984eb99a41b893969d03c042ac38`)
        let data = await response.json();
        this.setState({ article: data.articles, loading: false })
        console.log(this.state.article)

    }

  render() {
    return (
     <div className='container my-3'> 
           {this.state.loading?<Loader/>:  <div className="row row-cols-1 row-cols-md-4 g-5" style={{marginTop:"35px"}}>
                        {
                            this.state.article.map((value, i) => {
                                return this.state.loading ? "" : <NewsItem key={value.url} title={value.title} desc={value.description} Date={value.publishedAt} image={value.urlToImage} url={value.url} />
                            })
                        }
                    </div>
                       }
      </div>
  
    )
  }
}

export default EveryThings
