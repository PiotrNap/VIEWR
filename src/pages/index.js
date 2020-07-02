import React from 'react';
import Link from 'next/link';

// Components
import Button from '../components/atoms/Button';

// Styles
import '../styles/pages/home.scss';

function Homepage() {
  return (
    <main className="home">
      <div className="grid">
        <div className="container-sm">
          <h1 className="title-layer1-700">
            <span role="img" aria-label="wave">
              👋{' '}
            </span>
            Hello World...
          </h1>
          <Link href="/discover">
            <Button>Check what Piotr did!</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Homepage;
