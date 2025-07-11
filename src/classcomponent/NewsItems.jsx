import React, { Component } from 'react'

export default class NewsItems extends Component {
    render() {
        return (
            <>

                <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 ">
                    <div className="card mb-4" >
                        <img src={this.props.urlToImage} height={200} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title.substring(0, 70)}....</h5>


                            <hr></hr>
                            <div className="source-date">
                                <p>{this.props.source}</p>
                                <p>{new Date(this.props.publishedAt).toLocaleDateString()}</p>
                            </div>
                            <hr></hr>
                            <p>
                                {this.props.description
                                    ? `${this.props.description.substring(0, 100)}...`
                                    : "No description available"}
                            </p>
                            <a href={this.props.url} target='_blank' rel="noreferrer" className="btn text-light bg-info ">Read Full Article</a>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

