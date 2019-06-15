import React from 'react';
import { Link } from 'react-router-dom';

import articles from '../articles.temp';

const ArticlesPage = () => (
  <div>
    <p className="text">I don't write articles (yet), but here is a list of articles I found interesting: </p>
    <ul className="list-group list-group-flush">
    {
      articles.map(article => (
        <li key={article.name} className="list-group-item">
          <Link to={article.url}>{article.name}</Link>, by {article.author}, {article.site}
        </li>
      ))
    }
    </ul>
  </div>
);

export default ArticlesPage;