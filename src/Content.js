import React, { Component } from 'react'

export default class Content extends Component {
    render() {
        return (
                <div>
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
            <h1>
                Dashboard
                <small>Control panel</small>
            </h1>
            <ol className="breadcrumb">
                <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
                <li className="active">Dashboard</li>
            </ol>
            </section>
            {/* Main content */}
            <section className="content">
            {/* Main row */}
            <div className="row">
                {/* Left col */}
                <section className="col-lg-7 connectedSortable">
                {/* Custom tabs (Charts with tabs)*/}
                <div className="nav-tabs-custom">
                    {/* Tabs within a box */}
                    <ul className="nav nav-tabs pull-right">
                    <li><a href="#sales-chart" data-toggle="tab">Personal</a></li>
                    <li><a href="#sales-chart" data-toggle="tab">Group</a></li>
                    </ul>
                    <div className="box-title">
                    {/* Morris chart - Sales */}
                    <div className="chart tab-pane" id="sales-chart" style={{position: 'relative', height: 500}} />
                    </div>
                </div>
                {/* /.nav-tabs-custom */}
                </section>
                {/* /.Left col */}
                {/* right col (We are only adding the ID to make the widgets sortable)*/}
                <section className="col-lg-5 connectedSortable">
                {/* Map box */}
                <div className="box box-solid bg-light-blue-gradient">
                    <div className="box-header">
                    {/* tools box */}
                    <div className="pull-right box-tools">
                        <button type="button" className="btn btn-primary btn-sm daterange pull-right" data-toggle="tooltip" title="Date range">
                        <i className="fa fa-calendar" /></button>
                        <button type="button" className="btn btn-primary btn-sm pull-right" data-widget="collapse" data-toggle="tooltip" title="Collapse" style={{marginRight: 5}}>
                        <i className="fa fa-minus" /></button>
                    </div>
                    {/* /. tools */}
                    <h3 className="box-title">
                        Overview
                    </h3>
                    </div>
                    {/* /.box-body*/}
                    {/* row */}
                    <div className="row">
                    <div className="col-xs-12">
                        {/* jQuery Knob */}
                        <div className="box box-solid">
                        <div className="box-header">
                            <i className="fa fa-bar-chart-o" />
                            <div className="box-tools pull-right">
                            <button type="button" className="btn btn-default btn-sm" data-widget="collapse"><i className="fa fa-minus" />
                            </button>
                            <button type="button" className="btn btn-default btn-sm" data-widget="remove"><i className="fa fa-times" />
                            </button>
                            </div>
                        </div>
                        {/* /.box-header */}
                        <div className="box-body">
                            <div className="row">
                            <div className="col-xs-6 col-md-3 text-center">
                                <input type="text" className="knob" defaultValue={30} data-width={90} data-height={90} data-fgcolor="#3c8dbc" />
                                <div className="knob-label">Complete Tasks</div>
                            </div>
                            {/* ./col */}
                            <div className="col-xs-6 col-md-3 text-center">
                                <input type="text" className="knob" defaultValue={70} data-width={90} data-height={90} data-fgcolor="#f56954" />
                                <div className="knob-label">Due task</div>
                            </div>
                            {/* ./col */}
                            <div className="col-xs-6 col-md-3 text-center">
                                <input type="text" className="knob" defaultValue={-80} data-min={-150} data-max={150} data-width={90} data-height={90} data-fgcolor="#00a65a" />
                                <div className="knob-label">Group Task</div>
                            </div>
                            {/* ./col */}
                            <div className="col-xs-6 col-md-3 text-center">
                                <input type="text" className="knob" defaultValue={40} data-width={90} data-height={90} data-fgcolor="#00c0ef" />
                                <div className="knob-label">Personal Task</div>
                            </div>
                            {/* ./col */}
                            </div>
                            {/* /.row */}
                            {/* /.row */}
                        </div>
                        {/* /.box-body */}
                        </div>
                        {/* /.box */}
                    </div>
                    {/* /.col */}
                    </div>
                    {/* /.row */}
                </div>
                {/* /.box */}
                </section>
                {/* right col */}
            </div>
            {/* /.row (main row) */}
            </section>
            {/* /.content */}
        </div>
        </div>

        )
    }
}
