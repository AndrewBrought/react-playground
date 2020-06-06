import React from 'react'

function About() {
    return (
        <React.Fragment>
            <h1>About</h1>
            <p>This is the TodoList app v1.0.0.  It is part of a React crash course</p>
        </React.Fragment>
    )
}

export default About;

//ghost element, doesn't show up in the dom, but needed for jsx when you return something