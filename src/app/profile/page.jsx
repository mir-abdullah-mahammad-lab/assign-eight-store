'use client'
import { authClient} from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const Profile = () => {
    const {data:session} = authClient.useSession()
    // console.log(session.user,'SESSION')
    const {name, email, image} = session.user


    return (
        <div>
            {session.user? <div className="flex flex-col justify-center space-y-7">
            <h1 className="text-5xl text-red-300 italic"> Name: {name}</h1>
            <div className="flex items-center">
                <h2>Profile picture: </h2>
                <Image
            src={image}
            alt="not available"
            height={200}
            width={200}
            className="rounded-full"></Image>
            </div>
            <h2>Email: {email}</h2>
        </div> : <Link href={"/"}><button className="btn btn-success">Home</button></Link>}
        </div>
    );
};

export default Profile;