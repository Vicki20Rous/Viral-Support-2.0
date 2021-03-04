// import React from "react";
// import { FlatList } from 'react-native';
// import Article from './News/Article';
// import { getNews } from './News/Covid19News';

// export default class News extends React.Component {
//   render() {
//     const {
//       author: {},
//       title: {},
//       description: {},
//       url: {},
//       source: {},
//       image: {},
//       country: "",
//       published_at: {},
//   // Called after a component is mounted
//   componentDidMount() {
//     this.fetchNews();
//    }

//   fetchNews() {
//     getNews()
//       .then(articles => this.setState({ articles, refreshing: false }))
//       .catch(() => this.setState({ refreshing: false }));
//   }

//   handleRefresh() {
//     this.setState(
//       {
//         refreshing: true
//     },
//       () => this.fetchNews()
//     );
//   }

//   render() {
//     return (
//       <FlatList
//         data={this.state.articles}
//         renderItem={({ item }) => <Article article={item} />}
//         keyExtractor={item => item.url}
//         refreshing={this.state.refreshing}
//         onRefresh={this.handleRefresh.bind(this)}
//       />
//   );
//   }
// }