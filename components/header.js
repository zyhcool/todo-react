import * as React from "react";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1 style={headerStyle}>{this.props.headTitle}</h1>
            </div>
        )
    }
}

const headerStyle = {
    width: "100%",
    height: "2.5em",
    backgroundColor: "yellowgreen",
    textAlign: "center",
    lineHeight: "2.5em",
}