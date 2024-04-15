"use client"

import Image from "next/image";
import Link from "next/link";
import { Icon } from "semantic-ui-react";


export default function JoinLayout({ children }){
    return(
        <div className="h-screen flex justify-between bg-[#272727]">
        <div className="absolute top-0 left-0 w-full flex justify-between p-4">
        <Link href="/">
        <Image src="/images/logo.png" alt="logo" width={200} height={30}/>
        </Link>
        <Link href="/">
        <Icon name='close' style={{color:"#f50202", margin:0, fontSize:26}}/>
        </Link>
        </div>
        <div className="w-1/2 flex justify-center items-center">{ children }</div>
        <div className="sign-wallpaper"></div>

        </div>
    )
}