import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter } from 'react-icons/fa'

const ContactPage = () => (
  <div>
    <p>You can find me on these websites:</p>
    <div>
      <Link to="https://github.com/FoxYouFR"><FaGithub size={70} id="github_logo" /></Link>
      <Link to="https://twitter.com/"><FaTwitter size={70} /></Link>
    </div>
    <p>Or contact me at: fkolly14[at]gmail.com (public email address)</p>
  </div>
);

export default ContactPage;