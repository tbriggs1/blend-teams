import { Button, Flex, Image, Text, Avatar, Card } from '@fluentui/react-northstar'
import React from 'react'
import { StarIcon, DownloadIcon, MoreIcon,CalendarIcon } from '@fluentui/react-icons-northstar'
import '../styles/UpcomingEventsWidget.css'
import { List } from '@fluentui/react-northstar'

const UpcomingEventsCard = () => {
    const items = [
        {
          key: 'robert',
          media: (
            <Image
              src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/RobertTolbert.jpg"
              avatar
            />
          ),
          header: 'Robert Tolbert',
          contentMedia: <Button content="Action" primary />,
          content: 'Program the sensor to the SAS alarm through the haptic SQL card!',
        },
        {
          key: 'celeste',
          media: (
            <Image
              src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/CelesteBurton.jpg"
              avatar
            />
          ),
          header: 'Celeste Burton',
          contentMedia: <Button content="Action" primary />,
          content: 'Use the online FTP application to input the multi-byte application!',
        },
        {
          key: 'cecil',
          media: (
            <Image
              src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/CecilFolk.jpg"
              avatar
            />
          ),
          header: 'Cecil Folk',
          contentMedia: <Button content="Action" primary />,
          content: 'The GB pixel is down, navigate the virtual interface!',
        },
      ]


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
                        <List defaultSelectedIndex={0} items={items} />
                    </Flex>
                    </Card.Body>
        </Card>
        </div>
    )
}

export default UpcomingEventsCard;