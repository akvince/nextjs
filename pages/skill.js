import React from 'react'
import Nav from '../components/nav'
import Badge from '../components/badge'

const skills = [
  {name: 'HTML', score: '85', icon: 'fab fa-html5 badge'},
  {name: 'CSS', score: '85', icon: 'fab fa-css3-alt badge'},
  {name: 'Sass', score: '60', icon: 'fab fa-sass badge'},
  {name: 'Javascript', score: '70', icon: 'fab fa-js badge'},
  {name: 'Gulp', score: '65', icon: 'fab fa-gulp badge'},
  {name: 'Linux', score: '70', icon: 'fab fa-linux badge'}
];

const Skill = () => (
  <div>
    <Nav />

    <h1>skill page</h1>
    <div className="flex flex-around flex-middle font-large margin-b badge-skill">
      {skills.map((skill) =>(
        <Badge name={skill.name} score={skill.score} icon={skill.icon} />
      ))}
    </div>

  </div>
)

export default Skill
