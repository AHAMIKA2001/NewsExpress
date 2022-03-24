import React, { Component } from 'react'
import Newsitem from './Newsitem.js'

export class News extends Component {
    constructor() {
        super()
        this.state = {
            articles: [],
            loading: false,
            page: 0
        }
    }
    async componentDidMount() {
        let url = "http://api.mediastack.com/v1/news?access_key=0425f736ca4e54474616ba57dab656d7&countries=in&limit=25&offset=0"
        let data = await fetch(url)
        let parseData = await data.json()
        console.log(parseData)
        this.setState({ articles: parseData.data, totalResult: parseData.total })
    };
    handlePrevClick = async () => {
        let url = `http://api.mediastack.com/v1/news?access_key=0425f736ca4e54474616ba57dab656d7&countries=in&limit=25&offset=${this.state.page!==0?this.state.page-10:this.state.page}`
        let data = await fetch(url)
        let parseData = await data.json()
        console.log(parseData)
        this.setState({ articles: parseData.data, page: this.state.page - 10 })
    };
    handleNextClick = async () => {
        let url = `http://api.mediastack.com/v1/news?access_key=0425f736ca4e54474616ba57dab656d7&countries=in&limit=25&offset=${this.state.page+10}`
        let data = await fetch(url)
        let parseData = await data.json()
        console.log(parseData)
        this.setState({ articles: parseData.data, page: this.state.page + 10 })
    };

    render() {
        return (
            <>
                <div>
                    {this.state.articles.map((element) => {
                        return <div className="inline-block" key={element.url}>
                            <span> <Newsitem title={element.title != undefined ? element.title : ""} description={element.description} imageUrl={element.image} newsUrl={element.url} /> </span>
                        </div>
                    })}
                </div>
                <div className="relative">
                    <button className={this.state.page===0?"bg-gray-500 text-white font-bold py-3 px-7 rounded-full opacity-50 cursor-not-allowed absolute left-40":"bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-7 rounded-full absolute left-40"}  onClick={this.handlePrevClick}>
                       &larr; Prev
                    </button>
                    <button className={this.state.page===50?"bg-gray-500 text-white font-bold py-3 px-7 rounded-full opacity-50 cursor-not-allowed absolute right-20":"bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-7 rounded-full absolute right-40"} onClick={this.handleNextClick}>
                        Next &rarr;
                    </button>
                </div>
            </>
        )
    }
}

export default News
