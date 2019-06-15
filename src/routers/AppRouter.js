import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../components/HomePage';
import AllProjectsPage from '../components/AllProjectsPage';
import ProjectPage from '../components/ProjectPage';
import ArticlesPage from '../components/ArticlesPage';
import ContactPage from '../components/ContactPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/projects" component={AllProjectsPage} exact={true} />
        <Route path="/projects/:id" component={ProjectPage} />
        <Route path="/articles" component={ArticlesPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;