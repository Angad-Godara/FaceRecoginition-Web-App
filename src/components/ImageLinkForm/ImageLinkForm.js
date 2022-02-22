import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = () =>{
    return(
        <div>
            <p className='f4'>
                {'This magic brain will detect faces in your picture, just give it a try...'}
            </p>
            <div className='center'>
                <div className='form center pa4 ma4 br3 shadow-5'>
                    <input className='f4 pa2 center w-70' type='text'></input>
                    <button className='w-30 grow center ma1 f4 link ph3 pv2 white bg-light-purple pointer'>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;