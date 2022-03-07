import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
    if (imageUrl !== '') {
        return (
            <div className='center'>
                <div className='absolute ma2'>
                    <img
                        alt='Please give me a jpg image link'
                        id='inputimage'
                        src={imageUrl}
                        width='500px' height='auto'
                    />
                    <div className='bounding-box' style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
                </div>
            </div>
        )
    }
    return (
        <div></div>
    )
}

export default FaceRecognition;