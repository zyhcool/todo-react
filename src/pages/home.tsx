import * as React from "react";
import Container from "components/container";
import Header from "components/header";
import TodoItem from "components/todoItem";

interface IHomeState {
    num: number;
}
export default class Home extends React.Component<any, IHomeState> {
    constructor(props: any) {
        super(props);
        this.state = {
            num: 1,
        }
        this.add = this.add.bind(this);
    }

    public add() {
        this.setState((prevState) => {
            return { num: prevState.num + 1 };
        })
    }

    public render() {
        return (
            <div>
                <Container>
                    <Header headTitle={"每日任务"} />
                    {
                        data.map((d) => {
                            return <TodoItem data={d} />;
                        })
                    }
                </Container>
            </div>
        )
    }
}

const data = [
    {
        content: "学习React和webpack，使用所学知识开发todo-list应用程序，持续优化",
        date: "2019-03-07",
    },
    {
        content: "kjfsdjfjdskfdskfdsj",
        date: "2019-9-19",
    }
]