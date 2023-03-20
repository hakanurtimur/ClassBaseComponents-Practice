import { Component } from "react";



class ErrorBoundary extends Component {

    constructor () {
        super(); 
        this.state = {hasError: false}
    }

    componentDidCatch(error){
        console.log(error);
        this.setState({hasError: true})

    }

render() {
    if(this.state.hasError === true) {
        return <h1>Something Went Wrong!</h1>
    }
    return this.props.children;
}

}

export default ErrorBoundary