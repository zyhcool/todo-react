import * as React from "react";
import Container from "components/container/container";
import Header from "components/header/header";
import TodoItem from "components/todoItem/todoItem";

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
                    <Header
                        title={"每日任务"}
                        backNode={<a>{"返回"}</a>}
                        back={this.add}

                    />
                    {
                        data.map((d) => {
                            return <TodoItem key={d.date} data={d} />;
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