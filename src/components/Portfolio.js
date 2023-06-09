import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">

        <div className="row skill">
          
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

            <div className="bars">

              <ul className="skills">
                  {
                    resumeData.skills && resumeData.skills.map((item) => {
                      return(
                        <li>
                        <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                        </span><em>{item.skillname}</em>
                        </li>
                      )
                    })
                  }
              </ul>
            </div>
          </div>
          <p><b>Other Technologies Worked with: </b>
            {resumeData.skillsDescription}
          </p>
        </div>
  </section>
        );
  }
}