import * as React from "react";
import "./button.css";

export default class MyButton extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <i className={`iconfont icon${this.props.iconName}`} style={this.props.style}></i>
        )
    }
}
