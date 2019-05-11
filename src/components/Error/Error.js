import React from 'react';
import { Alert } from 'antd';
const Error = ()=>{
    return (<Alert
        message="Error"
        description="页面不存在*_*"
        type="error"
        showIcon
    />);
}
export default Error;