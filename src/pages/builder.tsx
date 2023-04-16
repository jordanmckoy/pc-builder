/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useSession } from "next-auth/react";
import Head from "next/head";
import NavBar from "~/components/Navbar";
import SignInModal from "~/components/SignInModal";
import Table from "~/components/table/Table";


export default function Builder() {
    const { data: sessionData } = useSession();
    if (!sessionData) {
        return <SignInModal />
    }

    return (
        <>
            <Head>
                <title>Builder</title>
                <meta name="description" content="With ❤ from Tropic" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <div className="bg-gray-900 dark:bg-slate-900 min-h-screen">
                <h2 className="text-white font-bold text-2xl px-10 pt-5">Pc Builder</h2>
                <Table />
            </div>
        </>
    );
}
