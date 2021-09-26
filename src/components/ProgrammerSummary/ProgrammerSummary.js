import React from 'react';
import './ProgrammerSummary.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';

const ProgrammerSummary = (props) => {
    const { img, name, gender, email, phone, experience, salary } = props.programmer;
    return (
        <div className="programmer-summary">
            <div className="container">
                <div className="row row-cols-1 p-2">
                    <div className="card">
                        <div className="programmer-img p-2">
                            <img className="img" src={img} alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p>Gender : {gender}</p>
                            <p>Email : {email}</p>
                            <p>Phone no : {phone}</p>
                            <p>Working Experience : {experience}</p>
                            <p>Monthly Salary : {salary} USD </p>
                            <button className="programmer-btn" onClick={() => props.handleProgrammerAdded(props.programmer)}><FontAwesomeIcon icon={faHandHoldingUsd} /> Add Salary To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProgrammerSummary;