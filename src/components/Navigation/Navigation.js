import React from 'react';

const Navigation = ({OnRouteChange, IsSignedIn}) =>{
    if(IsSignedIn){
        return(    
        <nav style={{display:'flex', justifyContent: 'flex-end' }}>
            <p onClick={() => OnRouteChange('signout')}             
            className='f3 link dim underline black pa3 pointer'>Sign out</p>
        </nav>)
    } else{
        return(
    <nav style={{display:'flex', justifyContent: 'flex-end' }}>
            <p onClick={() => OnRouteChange('signin')}             
            className='f3 link dim underline black pa3 pointer'>Sign in</p>
            <p onClick={() => OnRouteChange('register')}             
            className='f3 link dim underline black pa3 pointer'>Register</p>
        </nav>
    )
    }
}

export default Navigation;