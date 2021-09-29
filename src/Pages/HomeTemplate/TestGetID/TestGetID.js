import React from 'react'

export default function TestGetID(props) {

    var id = props.match.params.id;

    return (
        <div style={{ marginTop: "150px" }} className="text-light">
            {id}
        </div>
    )
}
