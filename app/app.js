import * as React from "react";
import Home from "../src/home";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1,
        }
    }

    render() {
        return (
            <div>
                <Home />
            </div>
        )
    }
}