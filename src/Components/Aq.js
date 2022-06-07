import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

function Aq(props) {
    const [isExpanded, setIsExpanded] = useState(false)
    const changeState = () => {
        setIsExpanded(!isExpanded)
    }
    return (
        <div className={`faq ${isExpanded ? "active" : ""}`}>
            <h3 className="faq-title">{props.question}</h3>
            <p className="faq-text">{props.ans}</p>
            <button className="faq-toggle" onClick={changeState}>
                <FontAwesomeIcon icon={faChevronDown} className="fa-chevron-down"/>
                <FontAwesomeIcon icon={faXmark} className="fa-times"/>
            </button>
        </div>
    )
}

export default Aq