'use client';

import React, { useState } from 'react'
import { motion } from "framer-motion";
import ApiCard from './cards/apiCard';

type ApiListProps = {
    viewGridMode: "onePerLine" | "manyPerLine"
}

const ApiList = ({viewGridMode}: ApiListProps) => {  
  return (
    <motion.div className={`flex w-full h-full 
      flex-wrap
      overflow-y-scroll
    bg-red-800`}
      layout
      style={{
        flexDirection: viewGridMode=='manyPerLine'?'row':'column',
        ...(viewGridMode=='manyPerLine'?{
          justifyContent: 'center',
          alignItems: 'start'
        }:{
          alignItems: 'center'
        })
      }}
    >    
        <motion.div layout transition={{
          ease: "easeOut",
        }}
          style={{
            width: viewGridMode=='manyPerLine'?'400px':'100%',
            overflow: 'hidden',
        }}
          className={`bg-green-800`}
        >
          <ApiCard viewGridMode={viewGridMode} />
        </motion.div>

        <motion.div layout
            style={{
              width: viewGridMode=='manyPerLine'?'400px':'100%',
              overflow: 'hidden',
          }}
          className={`bg-green-800`}
        >
          <ApiCard viewGridMode={viewGridMode}/>
        </motion.div>

        <motion.div layout
            style={{
              width: viewGridMode=='manyPerLine'?'400px':'100%',
              overflow: 'hidden',
          }}
        >
          <ApiCard viewGridMode={viewGridMode}/>
        </motion.div>

        <motion.div layout
            style={{
              width: viewGridMode=='manyPerLine'?'400px':'100%',
              overflow: 'hidden',
          }}
        >
          <ApiCard viewGridMode={viewGridMode}/>
        </motion.div>
        <ApiCard viewGridMode={viewGridMode}/>
        <ApiCard viewGridMode={viewGridMode}/>
        <ApiCard viewGridMode={viewGridMode}/>
        <ApiCard viewGridMode={viewGridMode}/>
        <ApiCard viewGridMode={viewGridMode}/>
        <ApiCard viewGridMode={viewGridMode}/>
        <ApiCard viewGridMode={viewGridMode}/>
        <ApiCard viewGridMode={viewGridMode}/>
        <ApiCard viewGridMode={viewGridMode}/>
        <ApiCard viewGridMode={viewGridMode}/>
        <ApiCard viewGridMode={viewGridMode}/>
        <ApiCard viewGridMode={viewGridMode}/>
        <ApiCard viewGridMode={viewGridMode}/>
        <ApiCard viewGridMode={viewGridMode}/>
        <ApiCard viewGridMode={viewGridMode}/>
        <ApiCard viewGridMode={viewGridMode}/>
        <ApiCard viewGridMode={viewGridMode}/>
        <ApiCard viewGridMode={viewGridMode}/>
        <ApiCard viewGridMode={viewGridMode}/>
        <ApiCard viewGridMode={viewGridMode}/>
        <ApiCard viewGridMode={viewGridMode}/>

    </motion.div>
  )
}

export default ApiList