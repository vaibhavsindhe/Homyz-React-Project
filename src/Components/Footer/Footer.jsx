import "./Footer.css";
import { FaInstagramSquare,FaFacebook,FaLinkedin} from "react-icons/fa";
import { FaSquareXTwitter,FaSquareThreads } from "react-icons/fa6";

export default function Footer(){
    return(
        <section className="f-wrapper">
            <div className="paddings innerWidth flexRow f-container">
                {/* left-side */}
                <div className="flexColStart f-left">
                    <img src="/logo2.png" alt="" width={120} />
                    <span className="secondaryText">
                        Our vision is to make all people
                        <br />
                        the best place to live for them
                    </span>
                </div>

                {/* center */}
                <div className="flexCol f-center">
                    <span className="primaryText">
                        Social Media
                    </span>
                    <div className="flexRow social-icons-div">
                        <a className="social-icon" href=""><FaInstagramSquare/></a>
                        <a className="social-icon" href=""><FaFacebook/></a>
                        <a className="social-icon"  href=""><FaLinkedin/></a>
                        <a className="social-icon" href=""><FaSquareXTwitter/></a>
                        <a className="social-icon" href=""><FaSquareThreads/></a>
                      
                    </div>
                </div>

                {/* right-side */}
                <div className="flexColStart f-right">
                    <span className="primaryText">Infomation</span>
                    <span className="secondaryText">Humnabad</span>
                    <div className="flexCenter f-menu">
                        <a href="#hero">Home</a>
                        <a href="#Resedency">Resedency</a>
                        <a href="#Value">Value</a>
                        <a href="#Contact">Contact</a>
                     </div>

                </div>

                
            </div>
        </section>
    )
}