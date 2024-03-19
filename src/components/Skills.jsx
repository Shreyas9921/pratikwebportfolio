// components/Skills.jsx

const Skills = () => {
    return (
      <div className="skills-container">
        <h2>Skills</h2>
        <div className="grid-skills">
          <div className="skill-card javascript">
            <i className="fa-brands fa-js js-icon"></i>
            <p>JavaScript</p>
          </div>
          <div className="skill-card react">
            <i className="fa-brands fa-react react-icon"></i>
            <p>React</p>
          </div>
          <div className="skill-card nextjs">
            <i className="fa-brands fa-NEXT NEXT-icon"></i>
            <p>NEXT.js</p>
          </div>
          <div className="skill-card java">
            <i className="fa-brands fa-java java-icon"></i>
            <p>Java</p>
          </div>
          <div className="skill-card github">
            <i className="fa-brands fa-github github-icon"></i>
            <p>Github</p>
          </div>
          <div className="skill-card mysql">
            <i className="fa-brands fa-sql sql-icon"></i>
            <p>Mysql</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Skills;
  