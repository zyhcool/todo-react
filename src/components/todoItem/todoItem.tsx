import * as React from "react";
import MyButton from "../button/button";
import "./todoItem.scss";
import browserHistory from "utils/browserHistory";

interface ITodoItemProps {
    style?: React.CSSProperties;
    data: any;
}
export default class TodoItem extends React.Component<ITodoItemProps, any> {
    constructor(props: ITodoItemProps) {
        super(props);
    }

    handleClick() {
        browserHistory.push("/detail");
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
