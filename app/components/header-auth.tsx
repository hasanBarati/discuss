

"use client"

import { useSession } from "next-auth/react";
import {
    Avatar,
    Button,
    NavbarItem
} from "@nextui-org/react";

import * as actions from "@/app/actions";



export default function HeaderAuth(){
   const session=useSession()

   let authContent: React.ReactNode;
   if(session.status ==="loading"){
      authContent=null
   }
   if (session?.data?.user) {
     authContent = <Avatar src={session.data.user.image || ""} />;
   } else {
     authContent = (
       <>
         <NavbarItem>
           <form action={actions.SignIn}>
             <Button type="submit" color="secondary" variant="bordered">
               Sign In
             </Button>
           </form>
         </NavbarItem>
 
         <NavbarItem>
           <form action={actions.SignOut}>
             <Button type="submit" color="primary" variant="flat">
               Sign Up
             </Button>
           </form>
         </NavbarItem>
       </>
     );
   }

   return authContent
}