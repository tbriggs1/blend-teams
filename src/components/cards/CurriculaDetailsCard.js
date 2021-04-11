import { Button, Flex, Image, Text, Avatar, Card } from '@fluentui/react-northstar'
import React from 'react'
import { StarIcon, DownloadIcon, MoreIcon,CalendarIcon } from '@fluentui/react-icons-northstar'
import '../styles/CurriculaDetailsWidget.css'
import { List } from '@fluentui/react-northstar'


const CurriculaDetailsCard = (listItems) => {

    //Gets the list from the list array
  const list = listItems.listItems
 
    return(
        <div className="UpcomingEventsMain">
             <Card class="upcoming-card" aria-roledescription="card with avatar, image and action buttons">
              
                    <Card.Body>
                    <Flex column gap="gap.small">
                        <List defaultSelectedIndex={0} items={list} />
                    </Flex>
                    </Card.Body>
        </Card>
        </div>
    )
}

export default CurriculaDetailsCard;