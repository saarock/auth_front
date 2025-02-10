import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const LoadingComponent = () => {
    const auth = useSelector(state => state.auth);
    
    return (
        <>
            {
                auth.loading ? <h1>Loading</h1> : ""
            }
        </>
    )
}

export default LoadingComponent