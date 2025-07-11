import React, { Component } from 'react'
import NewsItems from '../classcomponent/NewsItems'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      totalResults: 0,
      status: "",
      code: ""
    }
  }
  async getAPIDATA() {
    console.log(this.props.search)
    let response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search ? this.props.search : this.props.q}&language=${this.props.language}&sortBy=publishedAt&apiKey=53791a1c202943d38c0c7fcf3a7a824a`)
    response = await response.json()
    console.log(response.code)
    console.log(response.status)
    console.log(response)
    this.setState({
      articles: Array.isArray(response.articles)
        ? response.articles.filter(x => x.title !== "[Removed]")
        : [],
      totalResults: response.totalResults,
      status: response.status,
      code: response.code
    })
  }
  componentDidMount() {
    this.getAPIDATA()
  }
  // componentDidUpdate(prevProps) {

  //   console.log("called")
  //   if (this.props != prevProps) {
  //     this.getAPIDATA()
  //   }
  // }
  componentDidUpdate(prevProps) {
    if (
      this.props.q !== prevProps.q ||
      this.props.language !== prevProps.language ||
      this.props.search !== prevProps.search
    ) {
      console.log("Props changed, fetching data...");
      this.getAPIDATA();
    }
  }
  render() {
    return (
      <>
        <div className="container-flud">
          <h5 className='background text-light text-center mt-2 p-2'>
            {
              this.state.code === "rateLimited" && this.state.status === "error" ? (<h1>So Sorry</h1>) : `${(this.props.search ? this.props.search : this.props.q).toUpperCase()} Articles`
            }

          </h5>
          <div className="row">


            {
              this.state.code === "rateLimited" && this.state.status === "error" ? (<h5 className="background text-light text-center mt-2 p-2">
                Sorry, you are exide the today limit come on after 12 hours
              </h5>) : this.state.status === "error" ? (
                <h5 className="background text-light text-center mt-2 p-2">
                  Sorry,this time api gets error
                </h5>
              ) : (

                this.state.articles?.map((item, index) => {
                  return <NewsItems key={index}
                    source={item.source.name ?? 'N/A'}
                    title={item.title}
                    description={item.description}
                    url={item.url}
                    urlToImage={item.urlToImage ?? "/no image.jpg"}
                    publishedAt={item.publishedAt}
                    content={item.content}
                  />
                })
              )
            }
          </div>
        </div>
      </>
    )
  }
}

