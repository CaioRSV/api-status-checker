'use client';

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Header from "./components/header";
import Body from "./components/body";
import { ApiItem } from "./utils/types";

export default function Home() {
  const [apiList, setApiList] = useState<ApiItem[]>([]);
  const params = useSearchParams();
  const [url, setUrl] = useState<string>(`${process.env.NEXT_PUBLIC_BASE_URL ?? ''}${params.toString()}`)

  const urlApisPopulation = () => {

  }

  const addApiItem = (item: ApiItem) => {

  }

  const removeApiItem = (item: ApiItem) => {

  }

  useEffect(() => {
    urlApisPopulation();
  }, [])
  //teal.950
  return (
    <div className={`bg-gradient-to-b from-black to-teal-950 w-full h-full`}>
      <div className="w-screen h-screen flex justify-center items-center p-4">
        <div 
          className={`
              h-full sm:h-[500px] 
              max-h-full 
              w-full sm:w-[1020px] 
              max-w-full 
              bg-gradient-to-b from-black from-5% to-blue-950
              bg-opacity-5 
              rounded-md 
              border border-green-700 
              flex flex-col
  `}
        >
          <Header url={url} />

          <Body apis={apiList} addApi={addApiItem} removeApi={removeApiItem} />
        </div>
      </div>
    </div>
  );
}
