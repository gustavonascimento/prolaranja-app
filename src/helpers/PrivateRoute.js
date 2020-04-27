import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Router from '../router'

const PrivateRoute = ({ component: Component, routeInfo, ...props }) => {

  const renderComponent = (innerProps) => {
    console.log(routeInfo)
    if (routeInfo.template) {
      console.log('template')
      return (
        <routeInfo.template>
          <routeInfo.component {...innerProps} />
        </routeInfo.template>
      )
    } else {
      return <routeInfo.component {...innerProps} />
    }
  }

  return (
    <Route
      {...props}
      render={innerProps => {
        if (true) {
          return renderComponent(innerProps)
        } else {
          return (<Redirect to={Router.routes.login.path} />)
        }
      }}
    />
  )
}

export default PrivateRoute