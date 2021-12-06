import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const profilepic = "images/" + this.props.data.image;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About dimo</h2>

              <div className="row">
                <div className="columns w-50">
                  <h2>Contributors</h2>
                  <p>
                    <a href="https://github.com/myouuu">
                      <span>Meriem Mrabent</span>
                    </a>
                    <br />
                    <a href="https://github.com/acauchois">
                      <span>Alexis Cauchois</span>
                    </a>
                    <br />
                    <a href="https://github.com/FaycalTOURE">
                      <span>Fayçal Toure</span>
                    </a>
                    <br />
                    <a href="https://github.com/gensjaak">
                      <span>Jean-Jacques Akakpo</span>
                    </a>
                  </p>
                </div>
                <div className="columns w-50">
                  <h2>Tools</h2>
                  <p>
                    <span>Go</span>
                    <br />
                    <span>DiscordGo</span>
                    <br />
                    <span>PostgreSQL</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
