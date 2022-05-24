import Head from 'next/head'
import React from 'react'

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>{props.pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <div className="body">
        {props.children}
      </div>
    </div>
  )
}
