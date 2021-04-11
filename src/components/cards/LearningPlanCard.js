import { Button, Flex, Image, Text, Avatar, Card } from '@fluentui/react-northstar'
import React from 'react'
import { StarIcon, DownloadIcon, MoreIcon } from '@fluentui/react-icons-northstar'
import '../styles/LearningPlanWidget.css';
import student from '../../images/studentlearning.jpg'
import { Item } from 'react-grid-carousel';

const LearningPlanCard = (props) => {

    return (
      //Render the cards, passing props from LearningPlanWidget
      <>
      <Card aria-roledescription="card with avatar, image and action buttons" className="card">
        <div class="card-header">
        <Card.Header>
          <Flex gap="gap.small">
            <Avatar
              image={props.avatar}
              label="Copy bandwidth"
              name="Robert Tolbert"
              status="unknown"
            />
            <Flex column>
              <Text content={props.title} weight="bold" className="card-title"/>
              <Text content={props.type} size="small" />
            </Flex>
          </Flex>
        </Card.Header>
        </div>
        <Card.Body>
          <Flex column gap="gap.small">
            <Image src={student} className="card-img"/>
            <Text content={props.description} />
          </Flex>
        </Card.Body>
        <Card.Footer>
          <Flex space="between">
          <a class="anchor" href={props.url} target='_blank'><Button content="Launch" primary/></a>
            <Flex>
              <Button icon={<StarIcon />} iconOnly text title="Favourite" />
              <Button icon={<DownloadIcon />} iconOnly text title="Download" />
              <Button icon={<MoreIcon />} iconOnly text title="More" />
            </Flex>
          </Flex>
        </Card.Footer>
      </Card>
      </>
    )
}

export default LearningPlanCard;
