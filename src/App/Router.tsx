import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// pages
import Top from '@/App/pages/Top/Top'
// import ComponentList from 'containers/ComponentList'

const BaseRouter: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Top} />
      <Redirect to="/" />
    </Switch>
  )
}

export default BaseRouter
