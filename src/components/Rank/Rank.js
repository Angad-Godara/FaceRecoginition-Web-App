import React from 'react';

const Rank = ({name, enteries}) =>{
    return(
        <div>
        <div className='white f4'>
            {`Hey ${name}, your current rank is....`}
        </div>
        <div className='f2 white'>
            {enteries}
        </div>
    </div>
    );
}

export default Rank;