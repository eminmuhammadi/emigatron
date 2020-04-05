/**
 * For Documentation
 * https://react-firebase-js.com/docs/react-firebase-realtime-database/getting-started
 */
import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import { FirebaseDatabaseProvider, FirebaseDatabaseNode } from '@react-firebase/database';
import config from '../../config';
import './RoomInfo.scss';

class RoomInfo extends Component {
  render() {
    return (
      <div className="room-info border-bottom c-bg">
        <FirebaseDatabaseProvider firebase={firebase} {...config}>
          <FirebaseDatabaseNode
            path={"eminmuhammadi/emigatron/rooms/"+this.props.room+"/details"}
          >
            {({ value }) => {
              if (value === null || typeof value === "undefined") {
                //No data
                return null;
              };
              return(
                <div>
                    <div className="pt-2 pb-2 container">
                        <h4>#{this.props.room}</h4>
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
    
export default RoomInfo;