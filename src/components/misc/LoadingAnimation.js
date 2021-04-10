import React from 'react'
import { Animation, Provider } from '@fluentui/react-northstar'
import { RetryIcon } from '@fluentui/react-icons-northstar'

const spinner = {
  keyframe: {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
  duration: '5s',
  iterationCount: 'infinite',
}

const LoadingAnimation = () => (
  <Provider
    theme={{
      animations: {
        spinner,
      },
    }}
  >
    <Animation name="spinner" duration="1s">
      <RetryIcon circular bordered />
    </Animation>
  </Provider>
)

export default LoadingAnimation
