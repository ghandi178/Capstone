import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils';
import parser from 'html-react-parser';

function ArticleItem({ id, title, contents, publishedAt, categories }) {
  return (
    <div className='article-item'>
      <h3 className='article-item__title'>
        <Link to={`/article/${id}`}>{title}</Link>
      </h3>
      <p className='article-item__createdAt'>
        {showFormattedDate(publishedAt)}
      </p>
      <p className='article-item__body'>{parser(contents)}</p>
    </div>
  );
}

ArticleItem.propType = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
};

export default ArticleItem;
