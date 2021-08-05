import React from 'react';

const BuildControls = (props) => {
    return (
        <div className="d-flex">
            <div style={{ fontWeight: "bold", fontSize: "1.2rem" }} className="mr-auto ml-5">{props.label}</div>
            <button className="btn btn-danger btn-sm m-1" onClick={props.remove}>Less</button>
            <button className="btn btn-success btn-sm m-1" onClick={props.added}>More</button>
        </div>
    );
};

export default BuildControls;