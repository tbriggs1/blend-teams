import React from 'react'
import CatalogCard from '../cards/CatalogCard'
import LearningPlanCard from '../cards/LearningPlanCard';
import Carousel from 'react-grid-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { Input } from '@fluentui/react-northstar'
import '../styles/LearningPlanWidget.css';
import '../App.css';
import LoadingAnimation from '../misc/LoadingAnimation';
import WidgetNavBar from '../misc/WidgetNavBar';

const CatalogWidget = (props) => {
    //State variables to update data and pass down
    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [items, setItems] = React.useState([]);
    const [index, setIndex] = React.useState([]);
    const getA11ySelectionMessage = {
        onAdd: item => `${item} selected. Press left or right arrow keys to navigate selected items.`,
        onRemove: item => `${item} has been removed.`,
      }
    // Calls once on component init
    React.useEffect(() => {
        //Api call to Django Server
        fetch(`https://tomdb.ngrok.io/Catalog/data/`)
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
       <WidgetNavBar />
       <Carousel className="carousel-div" cols={4} rows={2} gap={5} loop>
                {items.map(item => (
                    <Carousel.Item>
                        <CatalogCard avatar={props.avatar} title={item.TITLE} description={item.DESCRIPTION} url={'https://www.automationanywhere.com/company/blog/rpa-thought-leadership/choosing-a-saas-technology-partner-for-enabling-change-management'} type={item.FORMAT}
                        picture={item.THUMBNAIL_URI}/> 
                    </Carousel.Item>
                ))}            
         </Carousel>
        </>
        )
    }
}

export default CatalogWidget;