import React from 'react';
import CurriculaDetailsCard from '../cards/CurriculaDetailsCard';
import { Button, Flex, CalendarIcon, Card, Image } from '@fluentui/react-northstar'
import '../styles/UpcomingEventsWidget.css'
import { List } from '@fluentui/react-northstar'
import LoadingAnimation from '../misc/LoadingAnimation'
import UpcomingEventsCard from '../cards/UpcomingEventsCard'
import Curricular from '../../images/Curricular.png'
const CurriculaDetailsWidget = () => {
   //State variables to update data and pass down
   const [error, setError] = React.useState(null);
   const [isLoaded, setIsLoaded] = React.useState(false);
   const [items, setItems] = React.useState([]);
   const listItems = [];
   // Calls once on component init
   React.useEffect(() => {
       //Api call to Django Server
       fetch(`https://tomdb.ngrok.io/UpcomingEvents/data/fetchData`)
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
               let url = `https://hcm12preview.sapsf.eu/sf/learning?destUrl=https%3A%2F%2Ftalenteam-stage.plateau.com%2flearning%2fuser%2fdeeplink%5fredirect%2ejsp%3flinkId%3dCURRICULA%26qualID%3d${item.curriculumID}%26fromSF%3dY&amp;company=talenteamT1`
               listItems.push(
                   {
                       key: item.userID,
                       media: ( <Image
                       src={Curricular}
                       avatar
                     /> ),
                       header: item.rootCurriculaID,
                       contentMedia: <a href={url} target="_blank"><Button content="Action" primary/></a>,
                       content: item.assignmentDate
                   },
             );
             })
       return(
           <div>
               <CurriculaDetailsCard listItems={listItems}/>
           </div>
       )
   }
}

export default CurriculaDetailsWidget;