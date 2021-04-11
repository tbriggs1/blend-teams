import { Button, Flex, CalendarIcon, Card, Image } from '@fluentui/react-northstar'
import React from 'react'
import '../styles/UpcomingEventsWidget.css'
import { List } from '@fluentui/react-northstar'
import LoadingAnimation from '../misc/LoadingAnimation'
import UpcomingEventsCard from '../cards/UpcomingEventsCard'
import Curricular from '../../images/Curricular.png'

const UpComingEventsWidget = () => {

      //State variables to update data and pass down
      const [error, setError] = React.useState(null);
      const [isLoaded, setIsLoaded] = React.useState(false);
      const [items, setItems] = React.useState([]);
      const listItems = [];
      // Calls once on component init
      React.useEffect(() => {
          //Api call to Django Server
          fetch(`https://tomdb.ngrok.io/Curricula/data/fetchData/`)
            .then(res => res.json())
            .then(
              (result) => {
                setIsLoaded(true);
                setItems(result); 
                  // Prints evach    
               
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
      return <div className="LoadingAnimation"><LoadingAnimation/></div>
      } else{
          console.log(listItems)
           items.map(item => {
                  let url = `https://talenteam-stage.plateau.com/learning/user/deeplink_redirect.jsp?linkId=SCHEDULED_OFFERING_DETAILS&scheduleID=${item.scheduleID}&fromSF=Y&company=talenteamT1`
                  listItems.push(
                      {
                          key: item.scheduleID, //SchedID
                          media: ( <div className="date-div"><div><h4 className="date">12</h4></div><div className="line"></div><div className="monthDiv"><h4 className="month">Apr</h4></div> </div>),
                          header: item.scheduleID, //Title
                          contentMedia: <a href={url} target="_blank"><Button content="Action" primary/></a>,
                          content: item.startDateTime //Date
                      },
                );
                })
          return(
              <div>
                  <UpcomingEventsCard listItems={listItems}/>
              </div>
          )
      }
}

export default UpComingEventsWidget;