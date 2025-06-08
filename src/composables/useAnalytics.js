import { track } from '@vercel/analytics'

export function useAnalytics() {
  // Track custom events
  const trackEvent = (eventName, properties = {}) => {
    track(eventName, properties)
  }

  // Track form submissions
  const trackFormSubmission = (formType, additionalData = {}) => {
    track('form_submission', {
      form_type: formType,
      ...additionalData
    })
  }

  // Track button clicks
  const trackButtonClick = (buttonName, section = '') => {
    track('button_click', {
      button_name: buttonName,
      section: section
    })
  }

  // Track service interest
  const trackServiceInterest = (serviceName) => {
    track('service_interest', {
      service: serviceName
    })
  }

  // Track navigation
  const trackNavigation = (destination) => {
    track('navigation', {
      destination: destination
    })
  }

  return {
    trackEvent,
    trackFormSubmission,
    trackButtonClick,
    trackServiceInterest,
    trackNavigation
  }
} 