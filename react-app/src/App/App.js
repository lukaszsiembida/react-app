import './App.css';
import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                Hello {this.props.name + ' ' + this.props.surname} !
            </div>
        );
    }
}

export default App;
