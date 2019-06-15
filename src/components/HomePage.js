import React from 'react';
import { FaGlobeEurope, FaBrain, FaCode } from 'react-icons/fa';

const HomePage = () => (
  <div>
    <main>
      <aside>
        <h3>General Information</h3>
        <div className="info">
          <p><FaGlobeEurope /><span className="theme"> Location </span>Switzerland</p>
        </div>
        <div className="info">
          <p><FaBrain /><span className="theme"> Passion </span>AI Safety</p>
        </div>
        <div className="info">
          <p><FaCode /><span className="theme"> Code </span>JavaScript &amp; Python</p>
        </div>
      </aside>
      <article>
        <h1 className="main_title">Who Am I ?</h1>
        <div className="main_content_text">
          <p>I'm a IT student very interested in AI and especially AI Safety. I also enjoy learning languages, neurosciences and philosophy.
          I speak French and English, I can have conversations in German and basic talks in Finnish. I recently began learning Esperanto and Croatian, 
          but don't expect me to understand a lot there!</p>
          <p>This website is in development.</p>
        </div>
      </article>
    </main>
    <footer>

    </footer>
  </div>
);

export default HomePage;