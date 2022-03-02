
import React, { Component } from 'react';
import axios from 'axios';


class StatusApp extends Component {
    constructor(props) {
        super(props);

        this.state = { status: 'unknown', loading: true }
    };

    componentDidMount() {
        this.checkHealth();
        this.timer = setInterval(() => 
            this.checkHealth(), this.props.interval)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    checkHealth = () => {
        this.setState({ loading: true });
        console.log("===== " + this.props.url);
        fetch('/example')
            .then(response => response.text())
            .then(data => console.log(data))
            .catch( error => {
                console.error('Got Error: ', error)
            })
        // axios({
        //     method: 'get',
        //     url: '/example',
        //     proxy: {
        //         protocol: 'http',
        //         host: 'www.example.com',
        //         port: 80
        //     }
        //     })
        //     .then(({ data }) => {
        //         this.setState({ status: 'up' });
        //     })
        //     .catch((error) => {
        //         console.log("error:   " + error);
        //         this.setState({ status: 'down' });
        //     })
        //     .finally(() => {
        //         console.log(" status =: " + this.state.status)
        //         this.setState({ loading: false });
        //     })

    }

    render() {
        const {status, loading } = this.state;
        return (
            <div className={`app ${status} ${loading ? 'loading' : ''}`}>
                <h1>{this.props.name}</h1>
                <h3>{status}</h3>
            </div>
        )
    }
}

export default StatusApp;