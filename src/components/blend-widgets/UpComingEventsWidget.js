import React from 'react'
import UpcomingEventsCard from '../cards/UpcomingEventsCard'
import LoadingAnimation from '../misc/LoadingAnimation';
import { StarIcon, DownloadIcon, Button, Image, Text, Avatar } from '@fluentui/react-icons-northstar'

const UpComingEventsWidget = () => {
    //State variables to update data and pass down
    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [items, setItems] = React.useState([]);
    const [listItems, setListItems] = React.useState([]);
    // Calls once on component init
    React.useEffect(() => {
        //Api call to Django Server
        fetch(`https://tomdb.ngrok.io/UpcomingEvents/data/fetchData`)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result); 
              console.log(result);
                // Prints evach    
              result.map(item => {
                setListItems([
                    {
                        key: item.userID
                    }]);
              })
              
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
        console.log(listItems)
        return(
            <div>
                <UpcomingEventsCard listItems={listItems}/>
            </div>
        )
    }
}

export default UpComingEventsWidget;