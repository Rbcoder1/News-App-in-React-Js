import React, { Component } from 'react'
import '../Assets/Style/TopCatergeryStyle.css'
import {Link} from 'react-router-dom';

export class TopCategery extends Component {
    // img  = "https://source.unsplash.com/600x500/?nature,water"
    render() {
        return (
            <div className='text-center container d-flex'  style={{marginTop:"65px"}}>
                <div className='Technology'  /*style={{"backgroundImage": `url('${this.img}')`}}*/>
                    <button className="btn"> <Link to="/technology">Technology</Link> </button>
                    <h1 className='my-4'>THE TOP TRENDING TECHNOLOGIES NEWS IN THE WORLD !</h1>
                    <p className='white'>codingWithRb@gmail.com</p>
                </div>
                <div className=' mx-2'>
                    <div className="figure Sport" >
                        <button className="btn"><Link to="/sports">Sport</Link> </button>
                        <h3 className='my-4'>SPORT NEWS ALL OVER THE WORLD</h3>
                    </div>
                    <div className='my-2'>
                        <div className="figure mx-1 Fasion">
                            <button className="btn"><Link to="/science">Science</Link> </button>
                            <h4 className='my-4'>TOP FASION NEWS IN WORLD</h4>
                        </div>
                        <div className="figure Politics">
                            <button className="btn"><Link to="/health">Health</Link> </button>
                            <h4 className='my-4'>TOP POLICTICS NEW IN INDIA</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopCategery
