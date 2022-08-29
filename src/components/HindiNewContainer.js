import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Loader from './Loader';

export class HindiNewContainer extends Component {

    artcles1 = [];
    constructor() {
        super();
        this.state = {
            article: this.artcles1,
            laoding: false,
            pageNumber: 1,
            totalPage: Math.ceil(47/ 10)
        }
    }

    FetchNews = async ()=>{
        this.setState({ loading: true })
        let response = await fetch(`https://newsdata.io/api/1/news?apikey=pub_1044831b98b4c545439d317427d3a51bb671a&language=hi&category=technology&page=${this.state.pageNumber}`)
        let data = await response.json();
        this.setState({ loading: false, article: data.results })
    }
    async componentDidMount() {
        this.FetchNews();
    }

    HandleNextButton = async () => {
        this.FetchNews();
        this.setState( {pageNumber: this.state.pageNumber + 1 })
    }

    HandlePreviousButton = async () => {
        this.FetchNews();
        this.setState({ pageNumber: this.state.pageNumber - 1})
    }

    render() {
        return (
            <>
                <div className="container my-3">
                <h3 className='mt-4'>Today's <span className="badge bg-primary">Top {this.props.heading} Headlines</span></h3>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style= {{width: "60%"}} aria-valuenow="60" aria-valuemin="60" aria-valuemax="60"></div>
                </div>
                    <div className="my-4 mx-4">
                        {this.state.loading ? <Loader /> : ""}
                        <div className="row row-cols-1 row-cols-md-4 g-5">
                            {
                                this.state.article.map((value, i) => {
                                    return this.state.loading ? "" : <NewsItem key={value.link} title={value.title} desc={value.description} Date={value.pubDate} image={value.image_url} url={value.link} category={value.category} country={value.country}  />
                                })
                            }
                        </div>
                        <div className='d-flex justify-content-between'>
                        {this.state.loading ? "" : <><button disabled={1 >= this.state.pageNumber ? true : false} type="button" className="btn btn-link mt-2" data-mdb-color="dark" onClick={this.HandlePreviousButton}>Previos</button>
                            <button disabled={this.state.totalPage <= this.state.pageNumber ? true : false} type="button" className="btn btn-link mt-2" data-mdb-color="dark" onClick={this.HandleNextButton}>Next</button>
                        </>}
                    </div>
                    </div>
                </div>
            </>
        )
    }
}

export default HindiNewContainer
