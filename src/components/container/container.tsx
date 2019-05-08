import * as React from "react";
import "./container.scss";

interface IContainerProps {
    style?: React.CSSProperties;
}

export default class Container extends React.Component<IContainerProps, any>{
    constructor(props: IContainerProps) {
        super(props)
    }
    render() {
        return (
            <div className="container" style={this.props.style}>{this.props.children}</div>
        )
    }
}
