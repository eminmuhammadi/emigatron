/**
 * For Documentation
 * https://react-firebase-js.com/docs/react-firebase-realtime-database/getting-started
 */
import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import { FirebaseDatabaseProvider, FirebaseDatabaseNode } from '@react-firebase/database';
import { v4 as uuid } from 'uuid';
import config from '../../config';
import './Users.scss';

class Messages extends Component {
  render() {
    return (
      <div className="users bg-white">
        <FirebaseDatabaseProvider firebase={firebase} {...config}>
          <FirebaseDatabaseNode
            path={"eminmuhammadi/emigatron/rooms/"+this.props.room+"/users/list"}
          >
            {({ value }) => {
              if (value === null || typeof value === "undefined") {
                //No data
                return <p className="text-center pt-5">There is no data for Users</p>;
              };
                const keys = Object.keys(value);
                const values = Object.values(value);

                return(
                  <div>
                    <div className="bg-white shadow-sm sticky-top container pt-3 d-flex justify-content-between">
                      <p><b>Users</b></p>
                      <p><span className="badge badge-secondary" key={uuid()}>{values.length}</span></p>
                    </div>  
                    <div>
                      {values.reverse().map((data, i) => (
                          /**
                            * @username 
                            */
                          <div key={keys[i]} className="user container media mt-4 mb-4">
                            <div className="shadow-sm user-profile rounded-circle"/>
                              <div className="media-body pr-4 pl-4">
                                <div className="mt-0 d-flex justify-content-between">
                                  <p className="text-muted">@{data.username}
                                     <br></br>
                                     <small>{data.user_id}</small>
                                  </p>
                                </div>
                              </div>
                          </div>                    
                        ))}
                    </div>
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