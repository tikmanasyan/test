import React from "react";

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter:0,
            users:[],
            posts:[]
        }
        this.handleInc = this.handleInc.bind(this);
    }

    componentWillUnmount() {
        console.log("Component Categories deleted");
    } 

    handleInc() {
        console.log(this)
        this.setState({
            ...this.state,
            counter: this.state.counter + 1
        });
    }

    handleDec = () => {
        this.setState({
            ...this.state,
            counter: this.state.counter - 1
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleInc}>+</button>
                <button onClick={this.handleDec}>-</button>
            </div>
        );
    }
}

export default Categories;