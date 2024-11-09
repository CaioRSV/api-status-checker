import React from 'react'

import { ApiItem } from '@/app/utils/types';


type BodyProps = {
    apis: ApiItem[],
    addApi: (item:ApiItem)=>void,
    removeApi: (item:ApiItem)=>void,
}

const Body = ({apis, addApi, removeApi}:BodyProps) => {
  return (
    <div>
        <div className={`flex-1 Xbg-blue-800`} onClick={()=>{console.log(apis)}}>
            {
              'dsadsa'
            }
        </div>
    </div>
  )
}

export default Body