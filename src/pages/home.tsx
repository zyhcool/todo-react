import Container from "components/container/container";
import { DateSwipper } from "components/dateSwipper/dateSwipper";
import Header from "components/header/header";
import TodoItem from "components/todoItem/todoItem";
import * as React from "react";

interface IHomeState {
    num: number;
}
export default class Home extends React.Component<any, IHomeState> {
    constructor(props: any) {
        super(props);
        this.state = {
            num: 1,
        };
        this.add = this.add.bind(this);
    }

    public add() {
        this.setState((prevState) => {
            return { num: prevState.num + 1 };
        });
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
                    <DateSwipper />
                    {
                        data.map((d) => {
                            return <TodoItem key={d.date} data={d} />;
                        })
                    }
                </Container>
            </div>
        );
    }
}

const data = [
    {
        content: `jsdfjeoifjdsnfsjdfdsfsdkfj kjfksdjf dkj
        fksdjf sdjf klsdf dsfj ksdjfk dsf sd djfksf sdf sdf jdsf
        s fsdjfkj sdf  fjd kfsdjk sd fsd d fsd fsdfds kjdkf dskf dsf d fdskj
        ifejkfndnkljsoire jioioea gdjfierioj fdg0984uoig 84ut igf  u4 terkjfi k`,
        date: "2019-03-07",
    },
    {
        content: "kjfsdjfjdskfdskfdsj",
        date: "2019-9-19",
    },
];
