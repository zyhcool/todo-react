import * as React from "react";
import * as _ from "lodash";
import "./dateSwipper.scss";
import moment from "utils/moment";

interface IDateSwipperState {
    formerDate: string;
    nextDate: string;
}

interface IDateSwipperProps {
    currentDate?: string,
}

export class DateSwipper extends React.Component<IDateSwipperProps, IDateSwipperState> {
    private static defaultProps: IDateSwipperProps = {
        currentDate: moment().format("MM-DD"),
    }

    public constructor(props: IDateSwipperProps) {
        super(props);
        this.state = {
            formerDate: moment(this.props.currentDate).subtract(1, "day").format("MM-DD"),
            nextDate: moment(this.props.currentDate).add(1, "day").format("MM-DD"),
        }
    }

    public componentDidUpdate(prevProps: IDateSwipperProps) {
        let currentDate = prevProps.currentDate ? prevProps.currentDate : moment().format("MM-DD");
        this.setState({
            formerDate: moment(currentDate).subtract(1, "day").format("MM-DD"),
            nextDate: moment(currentDate).add(1, "day").format("MM-DD"),
        })
    }

    public render() {
        console.log(_.intersection([1], [4, 1, 2]));
        return (
            this.props.currentDate
                ? <div className="dataSwipper">
                    <div className="formerDate">{this.state.formerDate}</div>
                    <div className="currentDate">{this.props.currentDate}</div>
                    <div className="nextDate">{this.state.nextDate}</div>
                </div>
                : <div>
                    <span>{moment().format("MM-DD")}</span>
                </div>
        );
    }
}