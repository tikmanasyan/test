import React from "react";

class Categories extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        console.log("Component Categories deleted");
    } 

    render() {
        return (
            <div>
                <h1>Hello, I am class component</h1>
            </div>
        );
    }
}

export default Categories;