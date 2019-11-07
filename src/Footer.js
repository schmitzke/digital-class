import React, { Component } from 'react';
import axios from 'axios';

const style = {
    padding: '20px',
    textAlign: 'center',
    background: '#ddd',
}

const url = 'https://jsonplaceholder.typicode.com/todos/5';

export class Footer extends Component  {

    state = {
        id: 999,
        title: 'leer'
    }

    getApiData = () => {
        axios.get(url).then((response) => {

            const { userId, title } = response.data;

            this.setState({
                id: userId,
                title: title
            });

        }).catch(ex => {
            console.log(ex);
        })
    }

    render() {
        return (
            <div style={style} className="Footer">
                <button onClick={this.getApiData}>get API data</button>
                <p>{this.state.id}</p>
                <p>{this.state.title}</p>
            </div>
        );
    }
}
