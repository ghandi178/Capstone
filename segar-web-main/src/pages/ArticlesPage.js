import React from 'react';
import { getArticles } from '../utils/network-data';
import ArticleList from '../components/ArticleList';
import HeroDetail from '../components/HeroDetail';

class ArticlesPage extends React.Component {
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
        <HeroDetail />
        <ArticleList articles={articles} />
      </>
    );
  }
}

ArticlesPage.propType = {
  // defaultKeyword: PropTypes.string.isRequired,
  // keywordChange: PropTypes.func.isRequired,
};

export default ArticlesPage;
