import * as React from "react";

export default class Container extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div style={containerStyle}>{this.props.children}</div>
        )
    }
}

const containerStyle = {
    maxWidth: "600px",
    width: "100%",
    margin: 0,
    padding: 0,
    backgroundColor: "skyblue",
    height: "-webkit-fill-available",

}