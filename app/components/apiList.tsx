'use client';

import React, { useState } from 'react'
import { motion } from "framer-motion";

type ApiListProps = {
    viewGridMode: "onePerLine" | "manyPerLine"
}

const ApiList = ({viewGridMode}: ApiListProps) => {
  //to fix not correct logic to make the div animate flex changes
  const [viewMode, setViewMode] = useState<"onePerLine"|"manyPerLine">(viewGridMode);
  return (
    <motion.div className={`w-full h-full bg-red-800`} style={{
      ...(viewGridMode=="manyPerLine" ? {
        display: 'flex'
      } : {})
    }}>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
        <p>{viewGridMode}</p>
    </motion.div>
  )
}

export default ApiList