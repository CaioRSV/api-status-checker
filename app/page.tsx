'use client';

import { createTheme, ThemeProvider } from "@mui/material";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Header from "./components/header";
import Body from "./components/body";
import { ApiItem } from "./utils/types";

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
  const params = useSearchParams();
  const [url, setUrl] = useState<string>(`${process.env.NEXT_PUBLIC_BASE_URL ?? ''}/${params.toString()}`)

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
    <ThemeProvider theme={theme}>
      <div className={`bg-gradient-to-b from-black to-teal-950 w-full h-full`}>
        <div className="w-screen h-screen flex justify-center items-center p-4">
          <div className={`
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
