import React, { Component } from 'react';
import locationIcon from './locationicon.png';
import buildingIcon from './building.png';
import clockIcon from './clock.png';

function JobDetails() {
    return (
        <div className="wrapper">
            <div className="company-logo">
                <img src="https://user-images.githubusercontent.com/1689183/55673023-25239a00-5857-11e9-9699-5f2d0ab365cf.png" alt="" />
            </div>
            <p className="job-title">Freelance Video Editor</p>
            <div className="job-details">
                <p style={{ fontWeight: 'bold' }}>
                    <img className="icon" src={buildingIcon} alt="" />
                    The Weather Channel
              </p>

                <p>
                    <img className="icon" src={locationIcon} alt="" />
                    Atlanta, GA
              </p>
                <p>Apply by 6/6/2019
              </p>
            </div>
            <hr />
            <h2 className="job-description">
                Job Description
            </h2>
            <div>Tremolo Productions&nbsp;is an Academy Award-winning production company that produces documentary feature films and television projects. Helmed by director Morgan Neville, Tremolo's  2013 film, <em>20 Feet From Stardom</em>, won numerous awards including the 2014 Academy Award for Best Documentary and a Grammy Award for Best Music Film. Tremolo’s most recent films include the acclaimed documentary <em>Best of Enemies</em>, <em>The Music of Strangers: Yo-Yo Ma and The Silk Road Ensemble</em>, <em>Won't You Be My Neighbor?</em>, and <em>They'll Love Me When I'm Dead</em>, as well as the Netflix series <em>Ugly Deliciou</em>s and <em>Abstract</em>.</div>
            <h2>What you can expect:</h2>
            <ul><li>A well-rounded experience on all phases of documentary production from development and research, to production, and through the distribution and release phases of the process</li><li>A strong collaborative atmosphere where we encourage you to share your ideas</li><li>A creative and engaging environment</li><li>A new challenge every day</li></ul>
            <h2>Tasks you will encounter:</h2>
            <ul><li>On set PA tasks, assisting crew with setup, running errands, using muscle and creativity when needed</li><li>Production office experience, phones, errands</li><li>Research for projects in production and development of new projects</li><li>Post-production, editing and media management tasks, transcribing, media managing, etc.</li></ul>
            
        </div>
    )
}

export default JobDetails;