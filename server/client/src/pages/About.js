import React, { Component } from 'react';
import $ from 'jquery';

import Logo from '../assets/images/emiga-logo.png';
import Landing from '../assets/images/landing.png';
import Message from '../assets/images/messages.png';

class About extends Component {
    submitForm (e) {
      e.preventDefault();
      const room  = $("input[name=room]").val();
      const token = $("input[name=token]").val();
      window.location.href = "/room/"+room+"/"+token;
    }
    render() {
      return (
        <div className="container mt-0">
            <div className="pt-5 pb-5">
              <a href="/">
                <img className="img-fluid" src={Logo} alt="emiga-logo" height={64} width={64}/>
              </a>
              <span className="pl-2 pr-2"> | <a href="https://github.com/eminmuhammadi/emigatron.git">Github</a></span>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-4 mt-2 mb-2 p-2">
                <h1 className="pt-5">Join to room</h1>
                <form onSubmit={this.submitForm.bind()} className="pt-3" method="get" action="/" id="RenderRoom">
                  <input required="On" name="room" placeholder="Room name" className="rounded-0 mt-1 form-control form-control-lg" type="text"/>
                  <input required="On" name="token" placeholder="Token" className="rounded-0 mt-1 form-control form-control-lg" type="text"/>
                  <input name="action" value="Open Room" className="rounded-0 btn btn-primary mt-3 form-control form-control-lg" type="submit"/>
                </form>
              </div>
              <div className="text-center col-sm-12 col-md-12 col-lg-8 mt-2 mb-2 p-2">
                 <img className="img-fluid shadow-sm landing" src={Landing} alt="emiga-landing" width={600}/>
              </div>
            </div>
            <div className="pt-5 pb-5 text-center">
              <h1>Create free encrypted room for chating</h1>
              <h1>Do not delete messages, just update a token</h1>
                <img className="img-fluid" src={Message} alt="emiga-message" width={600}/>
            </div>
            <div className="pt-5 pb-5 row align-items-center justify-content-center">
              <h1 className="p-2">Commands</h1>
              <ul>
                <li><h4><code>/help</code> - list of commands</h4></li>
                <li><h4><code>/start</code> - start to use bot</h4></li>
                <li><h4><code>/token</code> - update user's token</h4></li>
                <li><h4><code>/join <code>room-name</code> <code>"token"</code></code> - join to the room</h4></li>
                <li><h4><code>/say <code>room-name</code> <code>"message"</code></code> - push message to the room</h4></li>
                <li><h4><code>/create <code>room-name</code></code> - create room</h4></li>
                <li><h4><code>/update <code>room-name</code></code> - update token of room</h4></li>
                <li><h4><code>/ban <code>room-name</code> <code>"id"</code></code> - ban user on room</h4></li>
              </ul>
            </div>
            <div className="pt-5 pb-2 text-muted">
              &copy; 2020 emiga.tech &mdash; All rights reserved.
            </div>
        </div>
      );
    }
  }
    
export default About;