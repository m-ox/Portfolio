import React from 'react'
import { Link } from 'react-router-dom'

export default function() {
    return (
        <div>
            <h2>That page doesn't exist!</h2>
            <Link to="/">Return to home</Link>
        </div>
    )
}