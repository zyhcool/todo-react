import * as React from "react";
import Container from "../components/contariner";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1,
        }
        this.add = this.add.bind(this);
    }

    add() {
        this.setState((state) => {
            return { num: state.num + 1 };
        })
    }
    render() {
        return (
            <div>
                <Container />
            </div>
        )
    }
}