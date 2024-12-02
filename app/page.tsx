'use client';

import { createTheme, ThemeProvider } from "@mui/material";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Header from "./components/header";
import Body from "./components/body";
import { ApiItem, ToleranceTypeValues, isToleranceType, separator } from "./utils/types";

import { blueGrey } from '@mui/material/colors'

export default function Home() {
  //Theme
  const theme = createTheme({
    components: {},
    palette: {
      mode: 'dark',
      primary: blueGrey,
    }
  })
  //
  const [apiList, setApiList] = useState<ApiItem[]>([]);

  const params = useSearchParams();
  const [url, setUrl] = useState<string>(`${process.env.NEXT_PUBLIC_BASE_URL ?? ''}/${params.toString()}`)

  const assureUrlObjects = () => { // Making it a function to use in the add and remove url
    const labels = params.get("labels")?.split(separator);
    const urls = params.get("urls")?.split(separator);
    const intervals = params.get("intervals")?.split(separator);
    const tolerance = params.get("tolerance")?.split(separator);
    const redirect = params.get("redirect")?.split(separator);

    // Failsafes (Error -> Reset URL and doesnt populate)
    if(!(labels && urls && intervals && tolerance && redirect)) {setUrl(process.env.NEXT_PUBLIC_BASE_URL ?? ''); return;}
    if([labels, urls, intervals, tolerance, redirect].some(item => {item.length != labels.length})) {setUrl(process.env.NEXT_PUBLIC_BASE_URL ?? ''); return;}

    return {
      labels,
      urls,
      intervals,
      tolerance,
      redirect
    };
  }

  const urlApisPopulation = () => {

    const paramsObject = assureUrlObjects();
    if(!paramsObject) return;
    
    const {
      labels,
      urls,
      intervals,
      tolerance,
      redirect
    } = paramsObject;

    // Populating the ApiList
    let apiItems:ApiItem[] = [];

    labels.forEach((item, index) => {
      apiItems.push({
        label: item,
        url: urls[index],
        checkInterval: parseInt(intervals[index]),
        toleranceType: isToleranceType(tolerance[index]) ? tolerance[index] : "onlyAccept", // Fallback: onlyAccept
        allowRedirect: redirect[index].toLocaleLowerCase() == 'true',
      })
    });
    setApiList(apiItems);
  }

  const addApiItem = (item: ApiItem) => {

    // Update ApiList
    setApiList(prev => [...prev, {
      ...item
    }]);

    // Update URL

    const labelsRaw = apiList.map(item => {item.label});
    const labelPart = `labels=`+labelsRaw.join(',|');

    const urlsRaw = apiList.map(item => {item.url});
    const urlPart = `urls=`+urlsRaw.join(',|');

    const intervalRaw = apiList.map(item => {item.checkInterval});
    const intervalPart = `interval=`+intervalRaw.join(',|');

    const toleranceRaw = apiList.map(item => {item.toleranceType});
    const tolerancePart = `tolerance=`+toleranceRaw.join(',|');

    const redirectRaw = apiList.map(item => {item.allowRedirect});
    const redirectPart = `redirect=`+redirectRaw.join(',|');

    console.log('___');
    console.log(apiList);
    console.log(`${url}/${[labelPart, urlPart, intervalPart, tolerancePart, redirectPart].join('&')}`);
  }

  const removeApiItem = (item: ApiItem) => {

  }

  useEffect(() => {
    urlApisPopulation();
  }, [])
  //teal.950
  return (
    <ThemeProvider theme={theme}>
      <div className={`bg-gradient-to-b from-black to-teal-950 w-screen h-screen min-h-fit`}>
        <div className="w-full h-full flex justify-center items-center min-h-fit">
          {/* <div className={`bg-red-800 p-2 text-white`} onClick={()=>{addApiItem({
            label: "teste_",
            url: "_url_",
            checkInterval: 0,
            toleranceType: "onlyAccept",
            allowRedirect: true
          })}}>CLIQUE AQUI</div> */}
          <div className={`
                m-4
                sm:min-h-[500px] 
                sm:h-[50%]
                max-h-full
                sm:max-h-[90%]
                min-h-fit
                w-full 
                sm:min-w-[1020px]
                max-w-full
                sm:max-w-[60%]
                bg-[rgba(0,0,15,1)]
                rounded-md 
                border border-green-700
                border-opacity-50
                flex flex-col
                overflow-hidden
              `}
            >
            <Header url={url} />

            <Body 
              apis={apiList} 
              addApi={addApiItem} 
              removeApi={removeApiItem}
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
