import React from 'react';
import LearningPlanCard from '../cards/LearningPlanCard';
import Carousel from 'react-grid-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import '../styles/LearningPlanWidget.css';
import '../App.css';
import LoadingAnimation from '../misc/LoadingAnimation';
// Learning Plan Widget
export const LearningPlanWidget = (props) => {
    //State variables to update data and pass down
    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [items, setItems] = React.useState([]);
    const [index, setIndex] = React.useState([]);
    // Calls once on component init
    React.useEffect(() => {
        //Api call to Django Server
        fetch(`https://tomdb.ngrok.io/learningplan/data/fetchData/`)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result); 
              console.log(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])
    
    if (error) {
    return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
    return <div className="LoadingAnimation"><LoadingAnimation /></div>
    } else{
        return (
        // Create a Carousel of cards
        <>
       <Carousel className="carousel-div" cols={4} rows={1} gap={5} loop>
                {items.map(item => (
                    <Carousel.Item>
                        <LearningPlanCard avatar={props.avatar} title={item.title} description={item.description} url={item.itemDetailsDeeplink} type={item.componentTypeDesc}/> 
                    </Carousel.Item>
                ))}            
         </Carousel>
        </>
        )
    }
}

export default LearningPlanWidget;


