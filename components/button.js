import * as React from "react";
import "./button.css";

export default class Button extends React.Component {
    render(){
        return (
            <i className={`iconfont icon${this.props.iconName}`} style={this.props.style}></i>
        )
    }
}
