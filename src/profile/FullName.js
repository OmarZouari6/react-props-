import React from 'react';
import PropTypes from "prop-types";

const FullName = props =>{
    const StyleObject = { color:"black", textAlign:'center', fontSize:'xxl', fontWeight:'bold'}
    return (  
    <div style={StyleObject}>
    <p>  welcome {props.name} </p>    
    </div>
    )
}
FullName.propTypes = PropTypes.string;
export default FullName ;