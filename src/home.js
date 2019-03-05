import * as React from "react";
import TodoItem from "../components/todoItem";
import Container from "../components/container";
import Header from "../components/header";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1,
        }
        this.add = this.add.bind(this);
    }

    add() {
        this.setState((state) => {
            return { num: state.num + 1 };
        })
    }
    render() {
        return (
            <div>
                <Container>
                    <Header headTitle={"每日任务"} />
                    <TodoItem data={data} />
                </Container>
            </div>
        )
    }
}

const data = {
    content: "学习React和webpack，使用所学知识开发todo-list应用程序，持续优化",
    date: "2019-03-07",

}