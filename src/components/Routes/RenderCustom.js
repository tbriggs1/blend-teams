import React from 'react'
import CatalogWidget from '../blend-widgets/CatalogWidget'
import CurriculaDetailsWidget from '../blend-widgets/CurriculaDetailsWidget'
import FeaturedContentWidget from '../blend-widgets/FeaturedContentWidget'
import LearningPlanWidget from '../blend-widgets/LearningPlanWidget'
import UpComingEventsWidget from '../blend-widgets/UpComingEventsWidget'

const RenderCustom = () => {
    return(
        <div>
            <LearningPlanWidget />
            <CurriculaDetailsWidget />
            <FeaturedContentWidget />
            <CatalogWidget />
            <UpComingEventsWidget />
        </div>
    )
}

export default RenderCustom;