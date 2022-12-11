import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils';
import parser from 'html-react-parser';

const ArticleDetail = ({ id, title, publishedAt, categories, contents }) => {
  return (
    <>
      <h3 className='detail-page__title'>{title}</h3>
      <p className='detail-page__createdAt'>{showFormattedDate(publishedAt)}</p>
      <div className='detail-page__body'>{parser(contents)}</div>
    </>
  );
};

ArticleDetail.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
};

export default ArticleDetail;
