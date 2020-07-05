import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './style.css';

import logo from '../../assets/logo.svg';
import homeBackground from '../../assets/home-background.svg';

const Home = () => {
  return (
    <div id='page-home'>
      <img className="img-background" src={homeBackground} alt=""/>
      <div className='content'>
        <header>
          <img src={logo} alt='Eschool' />
        </header>
        <main>
          <h1>Seu catálogo de escolas do Brasil</h1>
          <p>
            Ajudamos pessoas a encontrarem escolas em todo território nacional de maneira eficiente
          </p>

          <Link to='/school-list'>
            <span>
              <FiLogIn />
            </span>
            <strong>Visualizar escolas</strong>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Home;
