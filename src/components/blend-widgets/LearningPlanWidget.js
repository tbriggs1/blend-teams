import React from 'react';
import '../styles/LearningPlanWidget.css';
import LearningPlanCard from '../cards/LearningPlanCard';

const LearningPlanWidget = (props) => (
    <div className="Card Carousel">
    <LearningPlanCard avatar={props.avatar}/>
    <LearningPlanCard avatar={props.avatar}/>
    <LearningPlanCard avatar={props.avatar}/>
    </div>
)

export default LearningPlanWidget;
