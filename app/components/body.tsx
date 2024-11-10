import React, { useState } from 'react'

import { ApiItem } from '@/app/utils/types';

import { CiGrid2H } from "react-icons/ci";
import { CiGrid41 } from "react-icons/ci";


import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ApiList from './apiList';

type BodyProps = {
    apis: ApiItem[],
    addApi: (item:ApiItem)=>void,
    removeApi: (item:ApiItem)=>void,
}

const Body = ({apis, addApi, removeApi}:BodyProps) => {
  const [viewGridMode, setViewGridMode] = useState<"onePerLine" | "manyPerLine">("onePerLine");

  return (
    <div className={`w-full h-full flex-1 flex flex-col items-center p-2 min-h-fit`} onClick={()=>{console.log(apis)}}>
      <ToggleButtonGroup
        value={viewGridMode}
        exclusive
        onChange={(event, newValue) => {
          if(newValue !== null){
            setViewGridMode(newValue);
          }
        }}
        color="primary"
      >
        <ToggleButton value="onePerLine">
          <CiGrid2H/>
        </ToggleButton>
        <ToggleButton value="manyPerLine">
          <CiGrid41/>
        </ToggleButton>
      </ToggleButtonGroup>
      
      <ApiList viewGridMode={viewGridMode}/>

    </div>
  )
}

export default Body