import React from 'react';
import LearningPlanCard from '../cards/LearningPlanCard';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/LearningPlanWidget.css';
// Learning Plan Widget
export const LearningPlanWidget = (props) => {
    //State variables to update data and pass down
    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [items, setItems] = React.useState([]);
    // Calls once on component init
    React.useEffect(() => {
        //Api call to Django Server
        fetch(`http://127.0.0.1:8000/learningplan/data/fetchData/`)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result); 
              console.log(result);
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
    return <div>Loading...</div>;
    } else{
        return (
        // Create a Carousel of cards
        <>
            <Carousel>
                {items.map(item => (
                    <div class="carousel-div"> 
                    <LearningPlanCard avatar={props.avatar} title={item.title}/>  
                    <LearningPlanCard avatar={props.avatar} title={item.title}/> 
                    <LearningPlanCard avatar={props.avatar} title={item.title}/>  
                    </div>
                ))}
                
            </Carousel>
        </>
        )
    }
}

export default LearningPlanWidget;
