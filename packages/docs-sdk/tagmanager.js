import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'react-router'
import routes from './routes'

import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'GTM-TLR5CTB'
}

TagManager.initialize(tagManagerArgs)

const app = document.getElementById('app')
ReactDOM.render(<Router routes={routes} />, app)

