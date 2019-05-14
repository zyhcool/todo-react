import * as React from "react";
import * as _ from "lodash";
import "./dateSwipper.scss";
import * as moment from "moment";

interface IDateSwipperState {
    formerDate: string;
    nextDate: string;
}

interface IDateSwipperProps {
    currentDate?: string,
}

export class DateSwipper extends React.Component<IDateSwipperProps, IDateSwipperState> {
    // private static defaultProps: IDateSwipperProps = {
    //     currentDate: moment().format("mm-dd"),
    // }

    public constructor(props: IDateSwipperProps) {
        super(props);
        this.state = {
            formerDate: moment(this.props.currentDate).subtract(1, "day").format("mm-dd"),
            nextDate: moment(this.props.currentDate).add(1, "day").format("mm-dd"),
        }
    }

    public componentDidUpdate(prevProps: IDateSwipperProps) {
        let currentDate = prevProps.currentDate ? prevProps.currentDate : moment().format("mm-dd");
        this.setState({
            formerDate: moment(currentDate).subtract(1, "day").format("mm-dd"),
            nextDate: moment(currentDate).add(1, "day").format("mm-dd"),
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
                    <span>{moment().format("mm-dd")}</span>
                </div>
        );
    }
}