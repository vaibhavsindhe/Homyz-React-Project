import "./GetStarted.css";
export default function GetStarted(){
    return(
        <section id="GetStarted" className="g-wrapper">
            <div className="paddings innerWidth g-container">
                <div className="flexColCenter inner-container">
                    <span className="primaryText">Get Started With Us</span>
                    <span className="secondaryText">
                        Subscribe and find super attractive price quotes from Us
                        <br />
                        Find your resedence soon
                    </span>
                    <button className="button">
                        <a href="mailto:xyz@gmail.com">Get Started</a>
                    </button>
                </div>
            </div>
        </section>
    )
}