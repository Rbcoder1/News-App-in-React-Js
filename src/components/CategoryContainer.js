// import React, { Component } from 'react'

// export class CategoryContainer extends Component {

//     artcles1 = [];
//     constructor() {
//         super();
//         this.state = {
//             article: this.artcles1,
//             laoding: false,
//             pageNumber: 1,
//             totalPage: Math.ceil(70 / 5)
//         }
//     }


//     async componentDidMount() {
//         this.setState({ loading: true })
//         let response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&from=2022-08-16&sortBy=popularity&apiKey=6966984eb99a41b893969d03c042ac38&page=${this.props.pageNumber}&pageSize=8`)
//         let data = await response.json();
//         this.setState({ loading: false })
//         this.setState({ article: data.articles })
//         console.log(data.articles)

//     }

//     HandleNextButton = async () => {
//         this.setState({ loading: true })
//         let response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&from=2022-08-16&sortBy=popularity&apiKey=6966984eb99a41b893969d03c042ac38&page=${this.props.pageNumber + 1}&pageSize=8`)
//         let data = await response.json();
//         this.setState({ loading: false })
//         this.setState({
//             article: data.articles,
//             pageNumber: this.state.pageNumber + 1
//         })
//         console.log(data.articles)
//         // console.log(this.state.totalPage)
//     }

//     HandlePreviousButton = async () => {
//         this.setState({ loading: true })
//         let response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&from=2022-08-16&sortBy=popularity&apiKey=6966984eb99a41b893969d03c042ac38&page=${this.props.pageNumber - 1}&pageSize=8`)
//         let data = await response.json();
//         this.setState({ loading: false })
//         this.setState({
//             article: data.articles,
//             pageNumber: this.state.pageNumber - 1
//         })
//         console.log(data.articles)

//     }

//   render() {
//     return (
//         <div>
//         <div className="container my-3">
//             <h2 className='mt-4 mb-3'>Today's Top- Headlines </h2>
//             <div className="my-4 mx-4">
//                 {this.state.loading ? <Loader /> : ""}
//                 <div className="row row-cols-1 row-cols-md-4 g-4">
//                     {
//                         this.state.article.map((value, i) => {
//                             return this.state.loading ? "" : <NewsItem key={value.url} title={value.title} desc={value.description} Date={value.publishedAt} image={value.urlToImage} url={value.url} />
//                         })
//                     }
//                 </div>
//                 <div className='d-flex justify-content-between'>
//                     <button disabled={1 >= this.state.pageNumber ? true : false} className="btn btn-primary mt-3" onClick={this.HandlePreviousButton}>Previos</button>
//                     <button disabled={this.state.totalPage <= this.state.pageNumber ? true : false} className="btn btn-primary mt-3" onClick={this.HandleNextButton}>Next</button>
//                 </div>
//             </div>
//         </div>
//     </div>
//     )
//   }
// }

// export default CategoryContainer
