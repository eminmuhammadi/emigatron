import React from 'react';
import { useParams } from "react-router-dom";
import firebase from 'firebase/app';
import 'firebase/database';
import { FirebaseDatabaseProvider, FirebaseDatabaseNode } from '@react-firebase/database';

import config from '../../config';
import Users from './Users';
import Messages from './Messages';
import RoomInfo from './RoomInfo';
import './Frame.scss';

const Frame = function() {
  let { room, token } = useParams();
  return (
    <FirebaseDatabaseProvider firebase={firebase} {...config}>
      <FirebaseDatabaseNode
        path={"eminmuhammadi/emigatron/rooms/"+room+"/details"}
      >
      {({ value }) => {
          if (value === null || typeof value === "undefined" || value.token !== token) {
            /**
             *  Token mismatch error
             */
            return null;
          }
          else {
            return(
              <div className="container-fluid">
                <div className="row align-items-center justify-content-center">
                  <div className="sidebar col-4 p-0">
                    <RoomInfo room={room} token={token}/>
                    <Users room={room} token={token}/>
                  </div>
                  <div className="bg-white chat col-8 p-0 border">
                    <Messages room={room} token={token}/>
                  </div>
                </div>
              </div>
            )
          }
      }}    
      </FirebaseDatabaseNode>
    </FirebaseDatabaseProvider>
  );
}

export default Frame;