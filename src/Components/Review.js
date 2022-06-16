import React, { useEffect, useState } from "react";

function Review(props) {
    const[isLoaded, setIsLoaded] = useState(false)
    const changeState = () => {
        setIsLoaded(!isLoaded)
    }
    
    useEffect(() => {
        setTimeout(changeState, 2500)
    }, [])

    return (
        <div className="card">
            <div className={`card-header ${isLoaded ? '' : 'animated-bg'}`}>
                {isLoaded ? (<img src={props.data.header}></img>) : ''}
            </div>
            <div className="card-content">
                <h3 className={`card-title ${isLoaded ? '' : 'animated-bg animated-bg-text'}`}>
                    {isLoaded ? props.data.title : ''}
                </h3>
                <p className="card-excerpt" id="excerpt1">
                    {isLoaded ? props.data.excerpt : ''}
                    <span className={`${isLoaded ? '' : 'animated-bg animated-bg-text'}`}>&nbsp;</span>
                    <span className={`${isLoaded ? '' : 'animated-bg animated-bg-text'}`}>&nbsp;</span>
                    <span className={`${isLoaded ? '' : 'animated-bg animated-bg-text'}`}>&nbsp;</span>
                </p>
                <div className="author">
                    <div className={`profile-img ${isLoaded ? '' : 'animated-bg'}`}>
                        {isLoaded ? (<img src={props.data.profile_img}></img>) : ''}
                    </div>
                    <div className="author-info">
                        <strong className={`${isLoaded ? '' : 'animated-bg animated-bg-text'}`}>
                            {isLoaded ? props.data.aname : ''}
                        </strong>
                        <small className={`${isLoaded ? '' : 'animated-bg animated-bg-text'}`}>
                            {isLoaded ? props.data.date : ''}
                        </small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review