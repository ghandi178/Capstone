import React from 'react';
import PropTypes from 'prop-types';
import ArticleItem from './ArticleItem';
import { useNavigate } from 'react-router-dom';

function ArticleListHome({ articles }) {
  const navigate = useNavigate();

  if (articles.length) {
    return (
      <div id='articles'>
        <h2>ARTIKEL</h2>
        <section className='articles-list'>
          {articles
            .filter((article) => article.id <= 4)
            .map((article) => (
              <ArticleItem key={article.id} id={article.id} {...article} />
            ))}
        </section>
        <div className='header-btns'>
          <button
            className='header-btn'
            title='selengkapnya'
            onClick={() => navigate('/articles')}
          >
            Selengkapnya
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className='articles-list-empty'>
      <p className='articles-list__empty'>Tidak ada artikel</p>
    </section>
  );
}

ArticleListHome.propType = {
  articles: PropTypes.object.isRequired,
};

export default ArticleListHome;
