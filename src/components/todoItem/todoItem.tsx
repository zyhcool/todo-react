import * as React from "react";
import MyButton from "../button/button";
import "./todoItem.scss";

interface ITodoItemProps {
    style?: React.CSSProperties;

}
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
            <div className="todo-item" onClick={this.handleClick}>
                <div className="content">{this.props.data.content}</div>
                <div className="date">{this.props.data.date}</div>
                <div className="btn-wrapper">
                    <MyButton style={{ display: "inline-block", width: "30px", height: "30px" }} iconName={"delete"} />
                    <MyButton style={{ display: "inline-block", width: "30px", height: "30px" }} iconName={"done"} />
                </div>
            </div>
        )
    }
}
