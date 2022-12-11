import React from 'react';
import { getArticles } from '../utils/network-data';
import ArticleList from '../components/ArticleList';
import HeroDetail from '../components/HeroDetail';

class ArticlesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
    };
  }

  async componentDidMount() {
    const { data } = await getArticles();

    this.setState(() => {
      return {
        articles: data,
      };
    });
  }

  render() {
    const articles = this.state.articles;

    return (
      <>
        <HeroDetail />
        <ArticleList articles={articles} />
      </>
    );
  }
}

export default ArticlesPage;
