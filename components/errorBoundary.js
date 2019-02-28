import * as React from "react";

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }
    static getDerivedStateFromError(error) {
        console.log("getDerivedStateFromError");
        return { hasError: true };
    }
    componentDidCatch(error, info) {
        console.log("componentDidCatch");
    }
    render() {
        return (
            this.state.hasError
                ? <div>Something has went wrong</div>
                : this.props.children
        )
    }
}