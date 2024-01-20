import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import {BsFillChatDotsFill} from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
export default function Contact(){
    return(
        <section id="Contact" className="contact-wrapper">
          <div className="paddings innerWidth flexRow contact-container">
            {/* left-side */}
            <div className="flexColStart contact-left">
                <span className="orangeText">Our Contacts</span>
                <span className="primaryText">Easy to Contact us</span>
                <span className="secondaryText">
                    We are always ready  to help by providing the best services for you.
                    <br />
                    We belive a good place to leave can make your life batter
                </span>


                <div className="flexColStart contactModes">

                    {/* firstRow */}
                    <div className="flexStart row">
                        {/* Call */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Call</span>
                                    <span className="secondaryText">9876543210</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Call Now
                            </div>
                        </div>
                        {/* Message */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Chat</span>
                                    <span className="secondaryText">9876543210</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Call Now
                            </div>
                        </div>

                    </div>

                    {/* second-row */}
                    <div className="flexStart row">
                        {/* E-mail */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <IoMail  size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">E-mail</span>
                                    <span className="secondaryText">xyz@gmail.com</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Vedio Call Now
                            </div>
                        </div>
                        {/* WhatsApp */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <IoLogoWhatsapp  size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Chat</span>
                                    <span className="secondaryText">9876543210</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Message Now
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* right-side */}
            <div className="contact-right">
                <div className="image-container">
                    <img src="./contact.png" alt="" />
                </div>
            </div>


          </div>
        </section>
    )
}