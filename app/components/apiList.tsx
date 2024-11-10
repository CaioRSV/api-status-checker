import React from 'react'


type ApiListProps = {
    viewGridMode: "onePerLine" | "manyPerLine"
}

const ApiList = ({viewGridMode}: ApiListProps) => {
  return (
    <div className={`w-full h-full bg-red-800`}>
        <p>{viewGridMode}</p>
        {/* <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p> */}
    </div>
  )
}

export default ApiList