import * as React from "react";
import Home from "pages/home";

export default class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            num: 1,
        }
    }

    render() {
        return (
            <div>
                <Home />
            </div>
        )
    }
}