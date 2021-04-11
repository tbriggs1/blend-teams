import { Button, Flex, Image, Text, Avatar, Card } from '@fluentui/react-northstar'
import React from 'react'
import { StarIcon, DownloadIcon, MoreIcon,CalendarIcon } from '@fluentui/react-icons-northstar'
import '../styles/CurriculaDetailsWidget.css'
import { List } from '@fluentui/react-northstar'


const CurriculaDetailsCard = (listItems) => {
  console.log(listItems)

  const list = listItems.listItems
  console.log(list)  
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
                        <List defaultSelectedIndex={0} items={list} />
                    </Flex>
                    </Card.Body>
        </Card>
        </div>
    )
}

export default CurriculaDetailsCard;