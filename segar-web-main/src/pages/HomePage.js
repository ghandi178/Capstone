import React from 'react';
import Feature from '../components/Feature';
import Hero from '../components/Hero';
import PropTypes from 'prop-types';
import { getArticles } from '../utils/network-data';
import ArticleList from '../components/ArticleList';
import About from '../components/About';
import Footer from '../components/Footer';

// const HomePage = () => {
//   return (
//     <>
//       <Hero />
//       <Feature />
//     </>
//   );
// };

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      // keyword: props.defaultKeyword || '',
    };

    // this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  async componentDidMount() {
    const { data } = await getArticles();

    this.setState(() => {
      return {
        articles: data,
      };
    });

    // console.log(data);
  }

  // onKeywordChangeHandler(keyword) {
  //   this.setState(() => {
  //     return {
  //       keyword,
  //     };
  //   });

  //   this.props.keywordChange(keyword);
  // }

  render() {
    const articles = this.state.articles;
    // .filter((article) => {
    //   return article.title
    //     .toLowerCase()
    //     .includes(this.state.keyword.toLowerCase());
    // });

    return (
      <>
        {/* <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        /> */}
        <Hero />
        <Feature />
        <ArticleList articles={articles} />
        <About />
        <Footer />
      </>
    );
  }
}

HomePage.propType = {
  // defaultKeyword: PropTypes.string.isRequired,
  // keywordChange: PropTypes.func.isRequired,
};

export default HomePage;
