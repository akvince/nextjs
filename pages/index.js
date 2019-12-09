import React from 'react'
import Nav from '../components/nav'

const infos = [
  {id: 'Nom & Prénom : ', test: 'Deflandre Vincent'},
  {id: 'Date de naissance : ', test: '19/07/1990'},
  {id: 'Profession : ', test: 'Développeur front-end'},
  {id: 'Affectation : ', test: 'IT-Room'},
  {id: 'Mission actuelle : ', test: 'La Redoute'},
]

const Home = () => (
  <div>
    <Nav />

    <div id="home">
      <div className="flex flex-around flex-middle">
        <div className="first-content">
          <div className="text-center margin-b">
            <i className="fas fa-exclamation-triangle"></i> Work in progress <i class="fas fa-exclamation-triangle"></i>
          </div>
          <div className="flex">
            <div className="pict">
              <i className="fas fa-user"></i>
            </div>
            <div id="presentation">
              {infos.map((info) =>(
                <div>{info.id} <span>{info.test}</span></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    <style jsx>{`
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
