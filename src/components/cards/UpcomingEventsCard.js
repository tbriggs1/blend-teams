import { Button, Flex, CalendarIcon, Card } from '@fluentui/react-northstar'
import React from 'react'
import '../styles/UpcomingEventsWidget.css'
import { List } from '@fluentui/react-northstar'

const UpcomingEventsCard = (listItems) => {
   


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
                        <List defaultSelectedIndex={0} items={listItems} />
                    </Flex>
                    </Card.Body>
        </Card>
        </div>
    )
}

export default UpcomingEventsCard;