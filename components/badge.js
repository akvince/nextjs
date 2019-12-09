import React from 'react'
import "../css/style.css"

const Badge = (props) => (
  <div className="text-center + ${props.name.toLower()}">
    <div className="badge">
      <div className="badge-inner">
        <div className="badge-front">
        <i className={props.icon}></i>
        </div>
        <div className="badge-back">
          <div className="badge">
            {props.score}%
          </div>
        </div>
      </div>
    </div>
    <div>{props.name}</div>
    <style jsx>{`
      .badge {
        background-color: transparent;
        vertical-align: sub;
        margin: 0 auto 5px;
        width: 65px;
        height: 65px;
        border-radius: 190px;
        font-size: 40px;
        text-align: center;
        color: #fff;
        perspective: 1000px; /* Remove this if you don't want the 3D effect */
      }
      .badge-no-flip{
        background-color: #293133;
        vertical-align: middle;
        margin-top: 13px;
      }
      /* This container is needed to position the front and back side */
      .badge-inner {
        position: relative;
        border-radius: 190px;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.4s;
        transform-style: preserve-3d;
      }
      
      /* Do an horizontal flip when you move the mouse over the flip box container */
      .badge:hover .badge-inner {
        transform: rotateY(180deg);
      }
      
      /* Position the front and back side */
      .badge-front, .badge-back {
        border-radius: 190px;
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
      }
      
      /* Style the front side (fallback if image is missing) */
      .badge-front {
        background-color: #293133;
        color: #fff;
      }
      
      /* Style the back side */
      .badge-back {
        font-size: 30px;
        background-color: #293133;
        color: white;
        transform: rotateY(180deg);
      }
      .badge-skill .badge-back .badge{
        font-size: 30px;
        margin-top: 13px;
      }
    `}</style>
  </div>

)

export default Badge
