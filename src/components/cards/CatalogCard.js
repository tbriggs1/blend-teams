import React from 'react'
import { Button, Flex, Image, Text, Avatar, Card } from '@fluentui/react-northstar'
import { StarIcon, DownloadIcon, MoreIcon } from '@fluentui/react-icons-northstar'

const CatalogCard = (props) => {
    return(
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
            <Image src="https://fabricweb.azureedge.net/fabric-website/assets/images/wireframe/square-image.png" className="card-img"/>
            <Text content={props.description} />
          </Flex>
        </Card.Body>
        <Card.Footer>
          <Flex space="between">
          <a class="anchor" href={props.url} target='_blank'><Button content="Launch"/></a>
            <Flex>
              <Button icon={<StarIcon />} iconOnly text title="Favourite" />
              <Button icon={<DownloadIcon />} iconOnly text title="Download" />
              <Button icon={<MoreIcon />} iconOnly text title="More" />
            </Flex>
          </Flex>
        </Card.Footer>
      </Card>
    )
}

export default CatalogCard;