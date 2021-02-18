import React from "react";
import { FlatList } from 'react-native';
import Article from './Pages/Article';
import { getNews } from './src/Pages/Covid19News';
// import Navbar from "./components/Navbar";
// import Main from "./Pages/Main";
// import Footer from "./components/Footer";
// import Stats from "./Pages/Stats";
// import News from "./Pages/Covid19News";
// import Resources from "./Pages/Resources";
// import About from "./Pages/About";

// class App extends Component {
//   state = {};
//   render() {
//     return (
//       <div className='App'>
//         <Navbar />
//         <Main />
//         <Stats />
//         <News />
//         <Resources />
//         <About />
//         <Footer />
//       </div>
//     );
//   }
// }
// export default App;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true };
    this.fetchNews = this.fetchNews.bind(this);
  }
  // Called after a component is mounted
  componentDidMount() {
    this.fetchNews();
   }

  fetchNews() {
    getNews()
      .then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true
    },
      () => this.fetchNews()
    );
  }

  render() {
    return (
      <FlatList
        data={this.state.articles}
        renderItem={({ item }) => <Article article={item} />}
        keyExtractor={item => item.url}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
      />
  );
  }
}