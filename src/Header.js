import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
  <header className="main-header">
    {/* Logo */}
    <a href="index2.html" className="logo">
      {/* mini logo for sidebar mini 50x50 pixels */}
      <span className="logo-mini"><b>O</b>T</span>
      {/* logo for regular state and mobile devices */}
      <span className="logo-lg"><b>On</b>Task</span>
    </a>
    {/* Header Navbar: style can be found in header.less */}
    <nav className="navbar navbar-static-top">
      {/* Sidebar toggle button*/}
      <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
        <span className="sr-only">Toggle navigation</span>
      </a>
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          {/* Messages: style can be found in dropdown.less*/}
          <li className="dropdown messages-menu">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-envelope-o" />
              <span className="label label-success">4</span>
            </a>
            <ul className="dropdown-menu">
              <li className="header">You have 4 messages</li>
              <li>
                {/* inner menu: contains the actual data */}
                <ul className="menu">
                  <li>{/* start message */}
                    <a href="#">
                      <div className="pull-left">
                        <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User" />
                      </div>
                      <h4>
                        Support Team
                        <small><i className="fa fa-clock-o" /> 5 mins</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  {/* end message */}
                  <li>
                    <a href="#">
                      <div className="pull-left">
                        <img src="dist/img/user3-128x128.jpg" className="img-circle" alt="User" />
                      </div>
                      <h4>
                        AdminLTE Design Team
                        <small><i className="fa fa-clock-o" /> 2 hours</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="pull-left">
                        <img src="dist/img/user4-128x128.jpg" className="img-circle" alt="User" />
                      </div>
                      <h4>
                        Developers
                        <small><i className="fa fa-clock-o" /> Today</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="pull-left">
                        <img src="dist/img/user3-128x128.jpg" className="img-circle" alt="User" />
                      </div>
                      <h4>
                        Sales Department
                        <small><i className="fa fa-clock-o" /> Yesterday</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="pull-left">
                        <img src="dist/img/user4-128x128.jpg" className="img-circle" alt="User" />
                      </div>
                      <h4>
                        Reviewers
                        <small><i className="fa fa-clock-o" /> 2 days</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer"><a href="#">See All Messages</a></li>
            </ul>
          </li>
          <li className="dropdown user user-menu">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              <img src="FB_IMG_1496235844325.jpg" className="user-image" alt="User" />
              <span className="hidden-xs">Dilushi Rathnayake</span>
            </a>
            <ul className="dropdown-menu">
              {/* User image */}
              <li className="user-header">
                <img src="FB_IMG_1496235844325.jpg" className="img-circle" alt="User" />
                <p>
                  Dilushi Rathnayake - Web Developer
                  <small>Member since Nov. 2018</small>
                </p>
              </li>
              {/* Menu Body */}
              {/* Menu Footer*/}
              <li className="user-footer">
                <div className="pull-left">
                  <a href="pages/examples/profile.html" className="btn btn-default btn-flat">Profile</a>
                </div>
                <div className="pull-right">
                  <a href="pages/examples/login.html" className="btn btn-default btn-flat">Sign out</a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header> 
</div>

        )
    }
}
