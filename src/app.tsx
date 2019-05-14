import * as React from "react";
import Home from "pages/home";
import { renderRoutes, RouteConfig } from "react-router-config";
import browserHistory from "./utils/browserHistory";
import { Redirect, Router } from "react-router-dom";


const routes: RouteConfig[] = [
    {
        component: class extends React.Component {
            public render() {
                return <Redirect to={"/home"} />
                // return undefined;
            }
        },
        path: "/",
        exact: true,
    },
    {
        component: Home,
        path: "/home",
    }
]


export default class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            num: 1,
        }
    }

    render() {
        return (
            <Router history={browserHistory}>
                <div className="App">
                    {renderRoutes(routes)}
                </div>
            </Router>
        )
    }
}