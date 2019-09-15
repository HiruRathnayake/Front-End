import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <div>
  <aside className="main-sidebar">
    {/* sidebar: style can be found in sidebar.less */}
    <section className="sidebar">
      {/* Sidebar user panel */}
      <div className="user-panel">
        <div className="pull-left image">
          <img src="FB_IMG_1496235844325.jpg" className="img-circle" alt="User" />
        </div>
        <div className="pull-left info">
          <p>Dilushi Rathnayake</p>
          <a href="#"><i className="fa fa-circle text-success" /> Online</a>
        </div>
      </div>
      {/* search form */}
      <form action="#" method="get" className="sidebar-form">
        <div className="input-group">
          <input type="text" name="q" className="form-control" placeholder="Search..." />
          <span className="input-group-btn">
            <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search" />
            </button>
          </span>
        </div>
      </form>
      {/* /.search form */}
      {/* sidebar menu: : style can be found in sidebar.less */}
      <ul className="sidebar-menu" data-widget="tree">
        <li className="header">MAIN NAVIGATION</li>
        <li className="active treeview">
          <ul className="treeview-menu">
            <li className="active"><a href="index.html"><i className="fa fa-circle-o" /> Dashboard</a></li>
          </ul>
        </li>
        <li className="treeview">
          <a href="#">
            <i className="fa fa-pie-chart" />
            <span>Task</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right" />
            </span>
          </a>
          <ul className="treeview-menu">
            <li><a href="#"><i className="fa fa-circle-o" /> Group Task</a></li>
          </ul>
        </li>
        <li className="treeview">
          <a href="#">
            <i className="fa fa-laptop" />
            <span>Groups</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right" />
            </span>
          </a>
          <ul className="treeview-menu">
            <li><a href="pages/UI/general.html"><i className="fa fa-circle-o" /> Group 01</a></li>
            <li><a href="pages/UI/icons.html"><i className="fa fa-circle-o" /> Group 02</a></li>
            <li><a href="pages/UI/buttons.html"><i className="fa fa-circle-o" /> Group 03</a></li>
          </ul>
        </li>
        <li>
          <a href="pages/calendar.html">
            <i className="fa fa-calendar" /> <span>Calendar</span>
          </a>
        </li>
      </ul>
    </section>
    {/* /.sidebar */}
  </aside> 
</div>

        )
    }
}
