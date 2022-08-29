import React, { Component } from 'react'
import Loader from './Loader';
import NewsItem from './NewsItem';

export class AllNewContainer extends Component {
    artcles1 = [];
    constructor() {
        super();
        this.state = {
            article: this.artcles1,
            laoding: false,
            pageNumber: 1,
            totalPage: Math.ceil(70 / 5)
        }
    }

    FetchNews = async () => {
        this.setState({ loading: true })
        let response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6966984eb99a41b893969d03c042ac38&page=${this.state.pageNumber}&pageSize=8`)
        let data = await response.json();
        this.setState({ loading: false })
        this.setState({ article: data.articles })
    }

    async componentDidMount() {
        this.FetchNews();
    }

    HandleNextButton = async () => {
        this.FetchNews();
        this.setState({pageNumber: this.state.pageNumber + 1})
    }

    HandlePreviousButton = async () => {
        this.FetchNews();
        this.setState({pageNumber: this.state.pageNumber - 1})
    }
    render() {
        return (
            <div style={{ height: "80%", marginTop: "65px" }} className='container'>
                <h3 className='mt-4'>Today's <span className="badge bg-primary">Top {this.props.category} Headlines</span></h3>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="60" aria-valuemax="60"></div>
                </div>
                <div className="my-4 mx-4">
                    {this.state.loading ? <Loader /> : ""}
                    <div className="row row-cols-1 row-cols-md-4 g-5">
                        {
                            this.state.article.map((value, i) => {
                                return this.state.loading ? "" : <NewsItem key={value.url} title={value.title} desc={value.description} Date={value.publishedAt} image={value.urlToImage} url={value.url} />
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
        )
    }
}

export default AllNewContainer
