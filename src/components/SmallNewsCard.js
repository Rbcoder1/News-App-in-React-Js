import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers'
import React, { Component } from 'react'

export class SmallNewsCard extends Component {
    render() {
        return (
            <div className='container'>
                <div className="card mb-2" /*style={{maxWidth: "350px"}}*/>
                    <div className="row g-0">
                        <div className="col-md-3">
                            <img
                                src={this.props.image?this.props.image: this.props.src}
                                alt="Trendy Pants and Shoes"
                                className="img-fluid rounded-start"
                                style={{height:"100%"}}
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <a href={this.props.url}>{this.props.title.slice(0,50)?this.props.title.slice(0,50):"...."}</a>
                                {/* <p className="card-text">
                                    This is a wider card with supporting text below as a 
                                </p> */}
                                <p className="card-text">
                                    <small className="text-muted">{this.props.date}</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SmallNewsCard
