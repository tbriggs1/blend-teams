import { Button, Flex, CalendarIcon, Card, Image, List } from '@fluentui/react-northstar'
import React from 'react'
import '../styles/UpcomingEventsWidget.css'


const UpcomingEventsCard = (listItems) => {
  
    //Gets the list from the list array
  const list = listItems.listItems

    return(
        <div className="UpcomingEventsMain">
             <Card class="upcoming-card" aria-roledescription="card with avatar, image and action buttons">
                <Card.Header>
                    <Flex space="between">
                        <Button content="All Events" />
                        <Flex>
                            <CalendarIcon />
                            
                        </Flex>
                    </Flex>
                    </Card.Header>
                    <Card.Body>
                    <Flex column gap="gap.small">
                        <List defaultSelectedIndex={0} items={list}/>
                    </Flex>
                    </Card.Body>
        </Card>
        </div>
    )
}

export default UpcomingEventsCard;