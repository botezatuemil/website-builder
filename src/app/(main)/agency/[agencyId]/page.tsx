import React from 'react'

type Props = {}

const Page = ({params}: {params: {agencyId: string}}) => {
  return (
    <div>{params.agencyId}</div>
  )
}

export default Page