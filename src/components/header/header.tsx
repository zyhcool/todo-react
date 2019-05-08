import * as React from "react";
import "./header.scss";

interface IHeaderProps {
    style?: React.CSSProperties;
    title: string;
    back: ()=> void;
    backNode: JSX.Element;
    backStyle?: React.CSSProperties;
    titleStyle?: React.CSSProperties;
}

export default class Header extends React.Component<IHeaderProps, any> {
    constructor(props: IHeaderProps) {
        super(props);
    }
    public render() {
        return (
            <div className="header" style={this.props.style}>
                <span style={this.props.backStyle} onClick={this.props.back}>{this.props.backNode}</span>
                <h1 style={this.props.titleStyle}>{this.props.title}</h1>
            </div>
        )
    }
}
