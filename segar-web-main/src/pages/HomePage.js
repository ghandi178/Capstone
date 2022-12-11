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
        <Hero />
        <Feature />
        <ArticleListHome articles={articles} />
        <About />
      </>
    );
  }
}

export default HomePage;
