import React from 'react';
import PropTypes from "prop-types";

const Bio = props =>{
    const StyleObject = { color:"orange", textAlign:'center', fontSize:'Medium'}
    return (  
        <div style={StyleObject}> 
    <p>  I am {props.age} years old and I come from Tunisia </p>    
    </div>
    )
}
Bio.propTypes = PropTypes.number.isRequired;
export default Bio;