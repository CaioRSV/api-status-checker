'use client';

import { createTheme, ThemeProvider } from "@mui/material";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Header from "./components/header";
import Body from "./components/body";
import { ApiItem, ToleranceType, ToleranceTypeValues, separator } from "./utils/types";

import { blueGrey, deepOrange } from '@mui/material/colors'

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
  
  const [labelList, setLabelList] = useState<string[]>();
  const [urlList, setUrlList] = useState<string[]>();
  const [toleranceList, setToleranceList] = useState<ToleranceType[]>();
  const [redirectList, setRedirectList] = useState<boolean[]>();
  
  const params = useSearchParams();
  const [url, setUrl] = useState<string>(`${process.env.NEXT_PUBLIC_BASE_URL ?? ''}/${params.toString()}`)

  const urlApisPopulation = () => {
    const labels = params.get("labels")?.split(separator);
    const urls = params.get("apiUrls")?.split(separator);
    const intervals = params.get("intervals")?.split(separator);
    const tolerance = params.get("tolerance")?.split(separator);
    const redirect = params.get("redirect")?.split(separator);

    // Failsafes (Error -> Reset URL and doesnt populate)
    if(!(labels && urls && intervals && tolerance && redirect)) {setUrl(process.env.NEXT_PUBLIC_BASE_URL ?? ''); return;}
    const ParamsSet = [labels, urls, intervals, tolerance, redirect];
    if(!ParamsSet.every(item => {item.length == labels.length})) {setUrl(process.env.NEXT_PUBLIC_BASE_URL ?? ''); return;}

    let apiItems:ApiItem[] = [];

    labels.forEach((item, index) => {
      apiItems.push({
        label: item,
        url: urls[index],
        checkInterval: parseInt(intervals[index]),
        toleranceType: typeof tolerance[index] , // Gotta check the typing bro TOFIX!!!!!!!!!
        allowRedirect: redirect[index],
      })
    })

  }

  const addApiItem = (item: ApiItem) => {
    setUrl(url)
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
          <div className={`
                m-4
                h-full sm:h-[500px] 
                max-h-full
                min-h-fit
                w-full sm:w-[1020px] 
                max-w-full 
                bg-[rgba(0,0,15,1)]
                rounded-md 
                border border-green-700
                border-opacity-50
                flex flex-col
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
