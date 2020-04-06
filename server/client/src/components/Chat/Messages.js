/**
 * For Documentation
 * https://react-firebase-js.com/docs/react-firebase-realtime-database/getting-started
 * https://github.com/compulim/react-scroll-to-bottom
 */
import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import { FirebaseDatabaseProvider, FirebaseDatabaseNode } from '@react-firebase/database';
import Moment from 'react-moment';
import ScrollToBottom from 'react-scroll-to-bottom';
import config from '../../config';
import './Messages.scss';
import CryptMessage from './CryptMessage.js';

class Messages extends Component {
  render() {
    return (
      <div>
        <FirebaseDatabaseProvider firebase={firebase} {...config}>
          <FirebaseDatabaseNode
            path={"eminmuhammadi/emigatron/rooms/"+this.props.room+"/messages"}
          >
            {({ value }) => {
              if (value === null || typeof value === "undefined") {
                //No data
                return <p className="text-center pt-5">There is no data for Messages</p>;
              };

                const keys = Object.keys(value);
                const values = Object.values(value);

                return(
                  <div>
                      <div className="shadow-sm sticky-top bg-white container pt-3 border-bottom d-flex justify-content-between">
                        <p>
                          <b>Messages</b>
                          <small className="msg-room-name pr-2 pl-2">#{this.props.room}</small>
                        </p>
                        <p><span className="badge badge-secondary">{values.length}</span></p>
                      </div> 
                      <span className="pt-2 pb-2"></span>
                      <ScrollToBottom  
                          followButtonClassName="messages-follow" 
                          className="messages-list"         
                      >
                          {values.map((data, i) => (
                          /**
                           * @username 
                           * @message
                           * @date
                           */
                            <div key={keys[i]} className="container message rounded-0 pt-3 pb-3 mb-3 mt-3">
                              <div className="container">
                                <div className="media">
                                  <div className="shadow-sm message-profile bg-light rounded-circle border"/>
                                    <div className="media-body pl-3 pr-3">
                                        <div className="mt-0 d-flex justify-content-between">
                                          <p className="message-header text-muted">
                                            @{data.username}
                                          </p>
                                          <p className="message-header text-muted time">
                                            <Moment className="text-muted" format="DD MMMM HH:mm, YYYY">{new Date(data.date * 1000)}</Moment>
                                          </p>
                                        </div>
                                        <CryptMessage id={data.user_id} message={data.message}/>
                                     </div>
                                </div>
                              </div>
                            </div>        
                        ))} 
                      </ScrollToBottom>
                 </div> 
                );
            }}
          </FirebaseDatabaseNode>
        </FirebaseDatabaseProvider>
      </div>
    );
  }
}
    
export default Messages;