import React from 'react';

const Navigation = ({ isSignedIn, onRouteChange }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p
          className="f3 link dim black pa3 pointer"
          style={{ paddingRight: '60px' }}
          onClick={() => onRouteChange('signin')}
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p
          className="f3 link dim black pa3 pointer"
          style={{ paddingRight: '60px' }}
          onClick={() => onRouteChange('signin')}
        >
          Sign in
        </p>
        <p
          className="f3 link dim black pa3 pointer"
          style={{ paddingRight: '60px' }}
          onClick={() => onRouteChange('register')}
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
