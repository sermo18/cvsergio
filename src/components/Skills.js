import React, { Component } from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
class Skills extends Component {
  render() {
   

    return (
      <div className="skills container p-12 mx-auto" id="skills">
        <h1 className="text-black italic text-4xl p-2" >Skills</h1>
        <div className="grid grid-cols-3 sm:grid-cols-1 gap-4 p-12">
          {this.props.skills.map((skill, i) => (
            <div key={i} className="p-4">
              <Progress
                percent={skill.value}
                
              
              />

              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Skills;
