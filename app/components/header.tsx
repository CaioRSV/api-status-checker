
'use client';
import React, { useState } from 'react'
import { CiShare1 } from "react-icons/ci"
import { IoCloseSharp } from "react-icons/io5";

import { Button, Snackbar } from '@mui/material';

type HeaderProps = {
  url: string,
}

const Header = ({url}:HeaderProps) => {
  const [toast, setToast] = useState<boolean>(false);

  const action = (
    <>
    <Button variant="text" onClick={()=>{setToast(false)}} color="inherit">
      <IoCloseSharp size={16}/>
    </Button>
    </>
  )

  return (
    <>
    <div className={`w-full flex p-3 justify-center items-center bg-[rgba(0,0,0,0.2)]`}>
        <div className={`flex-1 p-2 flex justify-center items-center font-thin font-sans`}>
          <p className={`text-lg text-green-300`}>Status das APIs</p>
        </div>
        <Button className={`rounded-lg`} color="inherit" onClick={()=>{setToast(true)}}>
          <CiShare1 size={20} className={`m-2`}/>
        </Button>

        <Snackbar
            open={toast}
            autoHideDuration={3000}
            onClose={()=>{setToast(false)}}
            message="Link da área de trabalho copiado"
            anchorOrigin={{vertical: "bottom" , horizontal: "right"}}
            action={action}
        />
          
    </div>
    
    </>

  )
}

export default Header;