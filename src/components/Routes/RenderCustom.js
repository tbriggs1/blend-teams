import React from 'react'
import RenderCatalog from './RenderCatalog'
import RenderCurriculaDetails from './RenderCurriculaDetails'
import FeaturedContentWidget from '../blend-widgets/FeaturedContentWidget'
import RenderLearningPlan from './RenderLearningPlan'
import RenderUpcomingEvents from './RenderUpcomingEvents'
import RenderFeaturedContent from './RenderFeaturedContent'

const RenderCustom = () => {
    return(
        <div>
            <RenderLearningPlan />
            <RenderCurriculaDetails />
            <RenderFeaturedContent />
            <RenderCatalog />
            <RenderUpcomingEvents/>
        </div>
    )
}

export default RenderCustom;