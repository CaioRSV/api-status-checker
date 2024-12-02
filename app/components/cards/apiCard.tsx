import React from 'react'

type ApiCardProps = {
    viewGridMode: "onePerLine" | "manyPerLine"
}

const ApiCard = ({viewGridMode}: ApiCardProps) => {
  return (
    <div className={`bg-blue-800 flex h-[400px]`}
    >
        12345
        12345
        12345
        12345
        12345
        12345
        12345
    </div>
  )
}

export default ApiCard