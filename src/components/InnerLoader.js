import React, { Component } from 'react'

export class InnerLoader extends Component {
    render() {
        return (
            <div>
                <div className="loader">
                    <div className="face">
                        <div className="circle"></div>
                    </div>
                    <div className="face">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InnerLoader
