import React from 'react';
import { FlagIcon } from 'react-flag-kit';
import { FaGlobeEurope, FaBrain, FaCode, FaFlag, FaBeer, FaFirefox,  } from 'react-icons/fa';

const HomePage = () => (
  <div>
    <main>
      <aside>
        <h3 className="ml-3">Facts about me</h3>
        <div className="info">
          <p><FaGlobeEurope /><span className="theme"> Location: </span>Switzerland <FlagIcon code="CH" /></p>
        </div>
        <div className="info">
          <p><FaFlag /><span className="theme"> Mother tongue: </span>French</p>
        </div>
        <div className="info">
          <p><FaBrain /><span className="theme"> Dream work: </span>AI Safety research</p>
        </div>
        <div className="info">
          <p><FaCode /><span className="theme"> Main languages: </span>JavaScript &amp; Python</p>
        </div>
        <div className="info">
          <p><FaFirefox /><span className="theme"> Favorite animal: </span>Fox</p>
        </div>
        <div className="info">
          <p><FaBeer /><span className="theme"> Favorite drink: </span>Beer</p>
        </div>
      </aside>
      <article>
        <h1 className="main_title">Who Am I ?</h1>
        <div className="text">
          <p>I'm a IT student very interested in AI and especially AI Safety. I also enjoy learning languages, neurosciences and philosophy.
          I speak French and English, I can have conversations in German and basic talks in Finnish. I recently began learning Esperanto and Croatian, 
          but don't expect me to understand a lot there!</p>
          <p>This website is in development.</p>
        </div>
      </article>
    </main>
  </div>
);

export default HomePage;