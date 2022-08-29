import React, { Component } from 'react';

export class NewsItem extends Component {
    render() {
        return (
            <div className="col" style={{ color: "black" }}>
                <div className="card h-100">
                    <div className='bg-image hover-zoom'>
                        <img src={this.props.image ? this.props.image : `https://source.unsplash.com/300x200/?business,news,technology`} className="card-img-top" alt="..." style={{ height: "200px" }} />
                    </div>
                    <div className="card-body">
                        <p className=''><i className="fas fa-calendar-alt"></i>  {this.props.Date.slice(0, 10)}</p>
                        <a href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.title.length >= 20 ? this.props.title.slice(0, 60) + '....' : '....'}</a><br />
                        <p className="card-text">{this.props.desc == null ? "No Description" : this.props.desc.length >= 20 ? this.props.desc.slice(0, 100) + '....' : '..'}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
