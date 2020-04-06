/**
 * For Documentation
 * https://react-firebase-js.com/docs/react-firebase-realtime-database/getting-started
 */
import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import { FirebaseDatabaseProvider, FirebaseDatabaseNode } from '@react-firebase/database';
import { v4 as uuid } from 'uuid';
import AES from 'crypto-js/aes';
import CryptoJS from 'crypto-js';
import config from '../../config';
import './Users.scss';

class CryptMessage extends Component {
  render() {
    return (
      <div>
        <FirebaseDatabaseProvider firebase={firebase} {...config}>
          <FirebaseDatabaseNode
            path={"eminmuhammadi/emigatron/users/"+this.props.id+"/token"}
          >
            {({ value }) => {
              if (value === null || typeof value === "undefined") {
                //No data
                return null;
              };
              const message = AES.decrypt(this.props.message,value.token).toString(CryptoJS.enc.Utf8) || null;
              return(
                <p key={uuid()}>{message}</p>                 
              );
            }}
          </FirebaseDatabaseNode>
        </FirebaseDatabaseProvider>
      </div>
    );
  }
}
export default CryptMessage;