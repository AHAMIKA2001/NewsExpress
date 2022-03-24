import { getByTitle } from '@testing-library/dom'
import React, { Component } from 'react'

export class Newsitem extends Component {
    constructor(props){
        super(props)
        props=this.props
    }
    render() {
        let {title,description,imageUrl,newsUrl}=this.props
        return (
            <div>
                <div className="p-10">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src={!imageUrl ? "https://secondary.oslis.org/learn-to-research/plan/plan-possible-sources/images-for-plan-possible-sources/newspaper/@@images/image.jpeg" : imageUrl} alt="..." />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{title}</div>
                            <p className="text-gray-700 text-base">{description}</p>
                        </div>
                        <div>
                            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-5 border-b-10 border-blue-700 hover:border-blue-500 rounded">
                            <a rel="noreferrer" href={newsUrl} target="_blank">Read More</a>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
