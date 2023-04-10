/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Head from "next/head";
import NavBar from "~/components/Navbar";
import Table from "~/components/table/Table";


export default function Builder() {
  return (
    <>
      <Head>
        <title>Builder</title>
        <meta name="description" content="With ❤ from Tropic" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="bg-slate-900 min-h-screen">
        <h2 className="text-white font-bold text-2xl px-10 pt-5">Pc Builder</h2>
        <Table />
      </div>
    </>
  );
}
