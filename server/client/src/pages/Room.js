/**
 * For Documentation
 * https://react-firebase-js.com/docs/react-firebase-realtime-database/getting-started
 */
import React, { Component } from 'react';
import Frame from '../components/Chat/Frame.js';
import Helmet from 'react-helmet';

class Room extends Component {
    render() {
      return (
        <div className="container mt-0">
            <Helmet>
              <title>Room on EMIGATRON &mdash; encrypted chat platform</title>
            </Helmet>
            <Frame/>
        </div>
      );
    }
  }
    
export default Room;