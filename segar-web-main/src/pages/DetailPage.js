import React from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import ArticleDetail from '../components/ArticleDetail';
import { getArticle } from '../utils/network-data';
import HeroDetail from '../components/HeroDetail';

function DetailPageWrapper() {
  const { id } = useParams();
  const navigation = useNavigate();

  return <DetailPage id={id} navigation={navigation} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      article: null,
    };
  }

  async componentDidMount() {
    const article = await getArticle(this.props.id);

    this.setState(() => {
      return {
        article: article.data,
      };
    });
  }

  render() {
    if (this.state.article === null) {
      return (
        <>
          <h2>404</h2>
          <p>Halaman tidak ditemukan!</p>
        </>
      );
    }

    return (
      <section className='detail-page'>
        <HeroDetail />
        <ArticleDetail {...this.state.article} />
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  navigation: PropTypes.func.isRequired,
};

export default DetailPageWrapper;
