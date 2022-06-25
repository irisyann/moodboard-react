import React from 'react';

const Picture = (props) => {

    // console.log(props);
    return (
        <div>
            <a href="https://www.pexels.com">
                <img src={props.image.src.small} alt="" />
            </a>
        </div>
    )

}

export default Picture;