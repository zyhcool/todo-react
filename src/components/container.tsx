import * as React from "react";

export default class Container extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <div style={containerStyle}>{this.props.children}</div>
        )
    }
}

const containerStyle: React.CSSProperties = {
    maxWidth: "600px",
    width: "100%",
    margin: 0,
    padding: 0,
    backgroundColor: "skyblue",
    height: "-webkit-fill-available",

}