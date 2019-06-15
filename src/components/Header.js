import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        <img src="/images/foxyou.jpg" alt="FoxYou" className="img-fluid rounded" id="logo" />
      </NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbar">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <NavLink to="/" activeClassName="is-active" exact={true} className="nav-link">Home</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/projects" activeClassName="is-active" exact={true} className="nav-link">Projects</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/articles" activeClassName="is-active" className="nav-link">Articles</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/contact" activeClassName="is-active" className="nav-link">Contact</NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search a project or an article"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </header>
);

export default Header;