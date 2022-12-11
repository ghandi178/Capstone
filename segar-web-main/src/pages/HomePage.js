import React from 'react';
import Feature from '../components/Feature';
import Hero from '../components/Hero';
import { getArticles } from '../utils/network-data';
import About from '../components/About';
import ArticleListHome from '../components/ArticleListHome';

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
        <ArticleListHome articles={articles} />
        <About />
      </>
    );
  }
}

HomePage.propType = {
  // defaultKeyword: PropTypes.string.isRequired,
  // keywordChange: PropTypes.func.isRequired,
};

export default HomePage;
