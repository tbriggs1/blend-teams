import React from 'react';
import LearningPlanCard from '../cards/LearningPlanCard';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/LearningPlanWidget.css';
// Learning Plan Widget
const LearningPlanWidget = (props) => (
    // Create a Carousel of cards
  <Carousel>
        <div className="carousel-div">
            <LearningPlanCard avatar={props.avatar}/>
            <LearningPlanCard avatar={props.avatar}/>
            <LearningPlanCard avatar={props.avatar}/>
            <LearningPlanCard avatar={props.avatar}/>
            <LearningPlanCard avatar={props.avatar}/>
        </div>
        <div className="carousel-div">
            <LearningPlanCard avatar={props.avatar}/>
            <LearningPlanCard avatar={props.avatar}/>
            <LearningPlanCard avatar={props.avatar}/>
            <LearningPlanCard avatar={props.avatar}/>
            <LearningPlanCard avatar={props.avatar}/>
        </div>
   </Carousel>

  
)

export default LearningPlanWidget;
