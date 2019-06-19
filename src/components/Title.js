import React from 'react';

import { StateProvider, useStateValue } from "redux/StateContext";

const Title = () => {

    const [{ title }, dispatch] = useStateValue();
    
    return (
        <h1>{title}</h1>
    )
}

export default Title;