import React from 'react';
import Photos from '../photos/Photos';

const MainSection = ({ fetchOnScroll, inputHandler, onSubmitHandler }) => {
  const onSubmitHandle = e => {
    e.preventDefault();
  };

  return (
    <div className="discover">
      <main className="hero-main">
        <nav className="navigation">
          <ul className="navigation-list">
            <li>About</li>
            <li className="active">Dicsover</li>
            <li>
              <span>Viewr</span>
            </li>
            <li>User</li>
            <li>Account</li>
          </ul>
        </nav>
        <div className="hero-heading">
          <div className="hero-text">
            <h1>
              Discover the perfect image
              <br />
              for your design.
            </h1>
          </div>
          <div className="hero-underline-text">
            Photographed by <span>Maarlen Bouwkamp</span>
          </div>
          <div className="search-sectio">
            <form onSubmit={e => onSubmitHandler(e)}>
              <input type="text" onChange={e => inputHandler(e)} />
              <button
                type="submit"
                value="search"
                onClick={e => onSubmitHandler(e)}
              >
                Search
              </button>
            </form>
          </div>
          <div className="search-right-block"></div>
          <div className="search-left-block"></div>
        </div>
      </main>
      {/* <button onClick={() => fetchOnScroll()}>Click me for pictures</button> */}
      <Photos />
    </div>
  );
};

export default MainSection;
