import { Button } from "@nextui-org/react";
import * as actions from '@/app/actions'
import { auth } from "./auth";

export default async function Home() {
  const session=await auth()

  return <>
    <form action={actions.SignIn}>
    <Button type="submit">sign in</Button>
    </form>
    <form action={actions.SignOut}>
    <Button type="submit">sign out</Button>
    </form>
    {session?.user ? <div>sign in</div>:<div>signout</div>}
  </>;
}
