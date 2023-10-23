import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <Link to="/dailyNote" >
                    日記
                </Link>
            </div>
        );
    }
}
