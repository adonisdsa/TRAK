import NextHead from 'next/head'
import React from 'react'
import ReactGA from 'react-ga'
import Router from 'next/router'

// GA Tracking Id
const gaTrackingId = '249967759'


Router.onRouteChangeComplete = () => {
  ReactGA.initialize(gaTrackingId)
  ReactGA.pageview(window.location.pathname)
}

export default class extends React.Component {
  render () {
    return (
      <NextHead>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`} />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || []
          function gtag(){
            dataLayer.push(arguments)
          }
          gtag('js', new Date())
          gtag('config', '${gaTrackingId}')
        `}} />
      </NextHead>
    )
  }
}