import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Component } from 'react';
import axios from "axios";

import { applyMiddleware } from "redux";
import "./App.css";
const Overview = lazy(() => import('./example-pages/Overview'));
const PageLoginOverlay = lazy(() => import('./example-pages/PageLoginOverlay'));
class App extends Component {

    state = {
        customers: ''
    }

    componentDidMount() {
        this.callApi()
        .then(res => this.setState({customers: res}))
        .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/PageLoginOverlay');
        const body = await response.json();
        return body;
    }

    render() {
        const { classes } = this.props;
        return(
            <Overview/>
        );
        //return (
        // <Paper className={classes.root}>
        //     <Table className={classes.table}>
        //         <TableHead>
        //             <TableRow>
        //                 <TableCell>번호</TableCell>
        //                 <TableCell>이미지</TableCell>
        //                 <TableCell>이름</TableCell>
        //                 <TableCell>생년월일</TableCell>
        //                 <TableCell>성별</TableCell>
        //                 <TableCell>직업</TableCell>
        //             </TableRow>
        //         </TableHead>
        //         <TableBody>
        //             {this.state.customers ? this.state.customers.map(c => {
        //                 return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
        //             }) : ''}
        //         </TableBody>
        //     </Table>
        // </Paper>
        //);
    }
}


export default App;