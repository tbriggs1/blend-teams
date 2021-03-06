import FeaturedContentCard from '../cards/FeaturedContentCard';
import React from 'react';
import LearningPlanCard from '../cards/LearningPlanCard';
import Carousel from 'react-grid-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import '../styles/LearningPlanWidget.css';
import '../App.css';
import LoadingAnimation from '../misc/LoadingAnimation';
import FeaturedContentCatalogCard from '../cards/FeaturedContentCatalogCard';
import { Button } from '@fluentui/react-northstar';
import { Switch } from 'react-router';
import {Link}  from 'react-router-dom';
const FeaturedContentWidget = (props) => {
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
        <div className="display-button">
            <Link to="/FeaturedCatalog">
                <Button content="Add Content" secondary />
            </Link>
        </div>
        <Carousel className="carousel-div" cols={4} rows={1} gap={5} loop>
                    {items.map(item => (
                            <Carousel.Item>
                                <FeaturedContentCatalogCard avatar={props.avatar} title={item.title} description={item.description} url={item.itemDetailsDeeplink} type={item.componentTypeDesc}/> 
                            </Carousel.Item>
                    ))}            
            </Carousel>
        </>
        )
    }
}

export default FeaturedContentWidget;