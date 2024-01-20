import React from "react";
import "./Hero.css";
import { IoLocationOutline } from "react-icons/io5";
import CountUp from "react-countup";
import {motion} from "framer-motion";
import Slide from '../Slide/Slide';

export default function Hero(){
    return (
        <section id="hero" className="hero-wraper">
            <div className="paddings innerWidth flexRow hero-container">
                
                {/* left-side */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle"></div>
                        <motion.h1 
                        initial={{y:"2rem",opacity:0}} 
                        animate={{y:0, opacity:1}} 
                        transition={{duration:2,type:"spring"}}>
                            Discover<br />Most Suitable <br /> Property
                        </motion.h1>
                    </div>
                    <div className="flexColStart hero-description">
                        <span className="secondaryText">Find a variety of properties that suit you vary easily</span>
                        <span className="secondaryText">Forget all difficulties in finding a residency for you</span>
                    </div>
                    <div className="flexRow search-bar">
                        <IoLocationOutline color="var(--blue)" size={25}/>
                        <input type="text" />
                        <button className="button">Search</button>
                    </div>
                    <div className="flexRow stats">
                        <div className="flexColCenter stat">
                            <span><CountUp start={8800} end={9000} duration={4}/><span>+</span></span>
                            <span className="secondaryText">Premium Products</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span><CountUp start={1950} end={2000} duration={4}/><span>+</span></span>
                            <span className="secondaryText">Happy Customers</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span><CountUp start={0} end={28} duration={4}/><span>+</span></span>
                            <span className="secondaryText">Award winnings</span>
                        </div>
                    </div>
                </div>

                {/* right-side */}
                <div className="flexCenter hero-right">
                        <motion.div 
                        initial={{x:"7rem",opacity:0}}
                        animate={{x:0,opacity:1}}
                        transition={{
                            duration:2,
                            type:"spring"
                        }}
                        className="flexCol hero-image-box">
                            <Slide/>
                        </motion.div>
                </div>
            </div>
        </section>
    )
}