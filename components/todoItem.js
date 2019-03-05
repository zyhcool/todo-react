import * as React from "react";
import Button from "./button";

export default class TodoItem extends React.Component {
    render() {
        return (
            <div>
                <div style={contentStyle}>{this.props.data.content}</div>
                <div>{this.props.data.date}</div>
                <div style={buttonStyle}>
                    <Button style={{ display:"inline-block", width: "30px", height: "30px" }} iconName={"delete"} />
                    <Button style={{ display:"inline-block", width: "30px", height: "30px" }} iconName={"done"} />
                </div>
            </div>
        )
    }
}

const contentStyle = {
    color: "rgba(90,90,90,0.7)",
    fontSize: "24px",
}

const buttonStyle = {
    float: "right",
    marginRight: "20px",

}