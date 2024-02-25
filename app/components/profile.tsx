import { useSession } from "next-auth/react";

export default function Profile(){
    const session=useSession()

    if(session.data?.user){
     return <div> sign in</div>
    }

    return <div>sin out</div>
}