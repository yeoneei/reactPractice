import React from 'react';

export default class ContactDetail extends React.Component{
    render(){
        const details = (<div>Selected</div>);
        const blank = (<div>not Selected</div>);
        return(
            <div>
                {this.props.isSelected? details : blank}
            </div>
        );
    }
}