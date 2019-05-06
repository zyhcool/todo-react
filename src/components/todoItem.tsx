import * as React from "react";
import MyButton from "./button";

export default class TodoItem extends React.Component<any,any> {
    constructor(props: any){
        super(props);
    }

    handleClick() {
        console.log("handleclick");
        location.replace("/detail");
    }
    render() {
        return (
            <div onClick={this.handleClick}>
                <div style={contentStyle}>{this.props.data.content}</div>
                <div>{this.props.data.date}</div>
                <div style={buttonStyle}>
                    <MyButton style={{ display: "inline-block", width: "30px", height: "30px" }} iconName={"delete"} />
                    <MyButton style={{ display: "inline-block", width: "30px", height: "30px" }} iconName={"done"} />
                </div>
            </div>
        )
    }
}

const contentStyle: React.CSSProperties = {
    color: "rgba(90,90,90,0.7)",
    fontSize: "24px",
}

const buttonStyle: React.CSSProperties = {
    float: "right",
    marginRight: "20px",

}