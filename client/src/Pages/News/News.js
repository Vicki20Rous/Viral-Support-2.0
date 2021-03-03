import React, { Component } from "react";
// import { FlatList } from "react-native";
// import Article from "./Article";
// import { getNews } from "./News";
import "./News.css";

class News extends Component {
  state = {};
  // constructor(props) {
  //   super(props);
  //   this.state = { articles: [], refreshing: true };
  //   this.fetchNews = this.fetchNews.bind(this);
  // }
  // // Called after a component is mounted
  // componentDidMount() {
  //   this.fetchNews();
  // }

  // fetchNews() {
  //   getNews()
  //     .then((articles) => this.setState({ articles, refreshing: false }))
  //     .catch(() => this.setState({ refreshing: false }));
  // }

  // handleRefresh() {
  //   this.setState(
  //     {
  //       refreshing: true,
  //     },
  //     () => this.fetchNews()
  //   );
  // }
  render() {
    return (
      <div id="/News">
        <main id="news" className="relative">
          <div className="sm:p-10 md:p-20 lg:p-32 container mx-auto relative">
            <div className="rounded-lg border-solid border-8 border-red-900 border-opacity-50">
              <section className="bg-gradient-to-b from-purple-700 via-pink-800 to-red-900 shadow-2xl lg:flex sm:p-4 md:p-8 lg:p-10">
                <div className="flex flex-col justify-center">
                  <h1 className="relative text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif text-center text-white mb-3">
                    News
                  </h1>
                  {/* <FlatList
                    data={this.state.articles}
                    renderItem={({ item }) => <Article article={item} />}
                    keyExtractor={(item) => item.url}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh.bind(this)}
                  /> */}
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default News;
