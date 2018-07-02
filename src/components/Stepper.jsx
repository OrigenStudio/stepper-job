import React from 'react';

class Stepper extends React.Component {
constructor(props) {
    super(props)
    this.state={
        expanded: props.defaultExpanded || false,
    }
}
render() {
    const {steps} = this.props;
    
    console.log(steps);
    
    return (
        <div>
            
        </div>
    )
}
}

export default Stepper;