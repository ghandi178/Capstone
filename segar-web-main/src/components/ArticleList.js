import React from 'react';
import PropTypes from 'prop-types';
import ArticleItem from './ArticleItem';

function ArticleList({ articles }) {
  if (articles.length) {
    return (
      <div id='articles'>
        <h2>ARTIKEL</h2>
        <section className='articles-list'>
          {articles.map((article) => (
            <ArticleItem key={article.id} id={article.id} {...article} />
          ))}
        </section>
      </div>
    );
  }

  return (
    <section className='articles-list-empty'>
      <p className='articles-list__empty'>Tidak ada artikel</p>
    </section>
  );
}

ArticleList.propType = {
  articles: PropTypes.object.isRequired,
};

export default ArticleList;
