import React from 'react';

import { connect } from 'react-redux';

class Item extends React.Component {
    // remove = () => {
    //   this.props.remove(this.props._id);
    // }
    render() {
        return ( <
            li > { this.props.name } <
            a href = "#/"
            onClick = {
                this.props.remove(this.props._id)
            } > & times; < /a> <
            /li>
        );
    }
}

function dispatchToProps(dispatch) {
    return {
        remove: id => () => {
            dispatch({ type: 'DEL', _id });
        }
    }
}

const ReduxItem = connect(null, dispatchToProps)(Item);

export default ReduxItem;