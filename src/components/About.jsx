import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faGithub,
    faLinkedin,
    faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import google from '../assets/google.png'

const About = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <h2 className="text-center mb-4">About NewziFy</h2>
                    <p>NewziFy is a cutting-edge news web application designed to deliver the latest and most relevant news from around the world. With its intuitive user interface and robust features, staying informed has never been easier.</p>
                    <h4 className="mt-4">Key Features:</h4>
                    <ul>
                        <li>Personalized News Feed: Tailored to your interests, ensuring you never miss out on important stories.</li>
                        <li>Search Functionality: Easily find articles on topics that matter to you.</li>
                        <li>Push Notifications: Stay updated with breaking news alerts and personalized recommendations.</li>
                        <li>Social Media Integration: Share articles effortlessly with your friends and followers.</li>
                        <li>Bookmarking and Saving: Save articles for later reading and organize them for easy access.</li>
                        <li>Commenting and Discussion: Engage with other users and share your opinions on news articles.</li>
                    </ul>
                    <h4 className="mt-4">UI Design:</h4>
                    <p>NewziFy boasts a sleek and user-friendly interface, designed to provide a seamless browsing experience. With its clean layout and intuitive navigation, finding and consuming news articles is a breeze.</p>
                    <h4 className="mt-4">Notification on News Channel</h4>
                    <p>The daily updates on news channel will be sent on <span style={{fontSize:'bold'}}> social media platform </span>, so connect with us and be on touch.</p>
                    <div className=" mt-5 d-flex justify-content-around align-items-center mx-auto" style={{ maxWidth: '15rem' }}>
                        <a href="https://github.com/JasmineE1308" className="github">
                            <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: 'black',marginInline:'.5rem' }} />
                        </a>
                        <a href="https://www.linkedin.com/in/jasmine" style={{marginInline:'.5rem' }} className="linkedin">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                        <a href="https://twitter.com/jasmine" className="twitter social" style={{marginInline:'.5rem',color:'black' }}>
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a href="https://discord.com/users/OPTIMUS#3832" className="discord social" >
                            <FontAwesomeIcon icon={faDiscord} size="2x" />
                        </a>
                        <div>
                            <a href="jasminechristo2@gmail.com" className="mail social">
                                <img src={google} className="" style={{ height: '44px', width: '44px' }} />
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
