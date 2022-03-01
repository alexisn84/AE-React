import React from 'react';

function Resume() {

    return (
        <div className='columns'>
            <div className='column'>
                <p className='content is-medium'>Resume</p>
                <br />

                <a
                    className="button is-primary"
                    href={process.env.PUBLIC_URL + "/ae-resume.pdf"}
                    target="_blank" rel="noreferrer"
                    >
                    <span className="icon">
                        <i className="fas fa-download"></i>
                    </span>
                    <span>Download My Resume</span>
                    </a>
                    <br />
                    <br/>
            </div>
            <div className='column'>
                <p className='content is-medium'>Skills</p>
                <br />
                <ul>
                    <li>HTML, CSS, Javascript</li>
                    <li>REST API, MySQL, JSON</li>
                    <li>React, Mongoose</li>
                    <li>GitHub, Git Bash</li>
                </ul>
            </div>
        </div>
    )
}


export default Resume;