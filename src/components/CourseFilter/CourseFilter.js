import React from 'react';
import { Button } from 'antd';
const ButtonGroup = Button.Group;

const CourseFilter = () => {
    return (
        <div style={{ margin: 6,marginBottom:0 }}>
            <ButtonGroup>
                <Button>Vue</Button>
                <Button>React</Button>
                <Button>Angular</Button>
            </ButtonGroup>
        </div>
    );
}

export default CourseFilter;


