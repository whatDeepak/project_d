import Post from "@/components/forms/Post";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function Page() {
    const user = await currentUser();
    if (!user) return null;

    // fetch organization list created by user
    const userInfo = await fetchUser(user.id);
    if (!userInfo?.onboarded) redirect("/onboarding");

    return (
      <>
        <h1 className='head-text'>Create</h1>

        <Post userId={userInfo._id} />
      </>
    );
  }
  
  export default Page;