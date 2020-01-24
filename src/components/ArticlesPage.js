import React from 'react';
import { Link } from 'react-router-dom';

import articles from '../articles.temp';

const ArticlesPage = () => (
  <div>
    <p className="text">I don't write articles (yet), but here is a list of articles I found interesting: </p>
    <ul className="list-group list-group-flush articles">
    {
      articles.map(article => (
        <Link key={article.name} className="list-group-item hide-link article">
          <span className="blue" to={article.url}>{article.name}</span>
          <span className="black">, by {article.author}, {article.site}</span>
        </Link>
      ))
    }
    </ul>
  </div>
);

export default ArticlesPage;