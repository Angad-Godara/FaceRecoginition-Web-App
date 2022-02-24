import React from 'react';

const FaceRecognition = ({imageUrl}) => {
    return(
        <div>
            <img alt='pic' src={imageUrl}></img>
        </div>
    )
}

export default FaceRecognition;