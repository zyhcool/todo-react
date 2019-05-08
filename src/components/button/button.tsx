import * as React from "react";
import "./button.scss";

interface IMyButtonProps {
    style?: React.CSSProperties;
    iconName: string;
}

export default class MyButton extends React.Component<IMyButtonProps, any> {
    constructor(props: IMyButtonProps) {
        super(props);
    }
    render() {
        return (
            <i className={`mybutton iconfont icon${this.props.iconName}`} style={this.props.style}></i>
        )
    }
}
