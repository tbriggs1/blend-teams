import { Button, Flex, CalendarIcon, Card, Image } from '@fluentui/react-northstar'
import React from 'react'
import '../styles/UpcomingEventsWidget.css'
import { List } from '@fluentui/react-northstar'
import LoadingAnimation from '../misc/LoadingAnimation'
import UpcomingEventsCard from '../cards/UpcomingEventsCard'
import Curricular from '../../images/Curricular.png'

const UpComingEventsWidget = () => {
    return(
        <UpcomingEventsCard />
    )
}

export default UpComingEventsWidget;