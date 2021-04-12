import { Component } from "react"

interface AppProps { }

interface AppState {
    hasError: boolean
}

class ErrorBoundary extends Component<AppProps, AppState> {
    constructor(props: AppProps | Readonly<AppProps>) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    render() {
        if (this.state.hasError) {
            return <h1>Что-то пошло не так. Мы обязательно разберемся!</h1>
        }

        return this.props.children
    }
}


export default ErrorBoundary