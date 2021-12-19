import React from 'react';
import PropTypes from "prop-types";

const Profession = props =>{
    const StyleObject = { color:"blue", textAlign:'center', fontSize:'Large', fontWeight:'bold'}
    return (  
        <div style={StyleObject}>
    <p>  I am a {props.prof} learning web development with GOMYCODE </p>    
    </div>
    )
}

Profession.propTypes = PropTypes.string;
export default Profession;