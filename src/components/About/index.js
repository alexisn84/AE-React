import React from 'react';

function About () {

    return(
        
        <section>
            <div className="center" id="about">
                <h1 className="page-header">About Me</h1>
            </div>
            <div className="center">
                <img 
                    src={require('../../../public/img/ae-profile.jpg')}
                    alt="about-me"
                    className="photo" />
            </div>
            <div>
                <p className='content is-medium'> In 2021 I made a bold career move from Accounting to
                    being a Software Engineer. I am fortunate that in my lifetime, so far, I have found
                    two things that I not only love but excel at.
                </p>
            </div>
        </section>
    );
}


export default About;

