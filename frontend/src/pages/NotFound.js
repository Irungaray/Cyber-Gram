import React from 'react'
import { Helmet } from 'react-helmet';

export const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Pets! - Not Found</title>
        <meta name='description' content='Pet photos' />
      </Helmet>
      <h1>This page doesnt exists :(</h1>
    </>
  )
}
