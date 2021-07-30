import React from "react";
import tab1bg from "./tab1bg.png";
import tab2bg from "./tab2bg.png";
import skill from "./skill.png";
function Team() {
    return (

        <>
            <main id="climbMain">
                <section id="teamTopText">
                    <div id="twoClimb">
                        <span id="two">02.</span><span id="climb">Climb</span>
                    </div>
                    <div id="acTextTwo">
                        <p>Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue. </p>
                    </div>
                </section>

                <section id="tabOuter">
                    <div id="tabInner">
                        <input type="radio" id="radio1" name="radio" />
                        <input type="radio" id="radio2" name="radio" />
                        <label for="radio1" id="label1">Mountain 1</label>
                        <label for="radio2" id="label2">Mountain 2</label>
                        <div id="tab1" style={{ backgroundImage: `url(${tab1bg})` }}>
                            <div id="schedule1">
                                <div className="heading">
                                    <h4>Schedule</h4>
                                </div>
                                <div className="timePlace">
                                    <p>25 Nov 2016&nbsp;&nbsp;&nbsp;Vestibulum viverra</p>
                                    <p>28 Nov 2016&nbsp;&nbsp;&nbsp;Vestibulum viverra</p>

                                    <p>18 Dec 2016&nbsp;&nbsp;&nbsp;Vestibulum viverra</p>

                                    <p>7 Jan 2017&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vestibulum viverra</p>
                                </div>
                            </div>
                        </div>

                        <div id="tab2" style={{ backgroundImage: `url(${tab2bg})` }}>
                            <div id="schedule2">
                                <div className="heading">
                                    <h4>Schedule</h4>
                                </div>
                                <div className="timePlace">
                                <p>17 Nov 2016&nbsp;&nbsp;&nbsp;Vestibulum viverra</p>

                                <p>13 Dec 2016&nbsp;&nbsp;&nbsp;Vestibulum viverra</p>
                                <p>28 Dec 2016&nbsp;&nbsp;&nbsp;Vestibulum viverra</p>

                                <p>9 Feb 2017&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vestibulum viverra</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer id="footer">
                    <div id="footerLogo">
                    <img src={skill} alt="footLogo" />
                    <p>LOSANGELES<br/>MOUNTAINS</p>
                    </div>

                    <div id="copyRight">
                   <p>COPYRIGHT 2016. ALL RIGHTS RESERVED.</p>
                    </div>

                </footer>

            </main>
        </>
    );
}

export default Team;