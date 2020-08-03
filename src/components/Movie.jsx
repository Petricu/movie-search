import React from "react";

export default function Movie(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>Average rating: {props.avgVote}</p>
            <p>Release: {props.releaseDate}</p>
            <p>{props.overview}</p>
        </div>
    )
}