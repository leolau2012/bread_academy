import React from 'react';
import { Alert } from 'antd';
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, info);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <Alert
                    message="Error"
                    description="网络出错，请稍后重试*_*"
                    type="error"
                    showIcon
                />;
        }

        return this.props.children;
    }
}
export default ErrorBoundary;