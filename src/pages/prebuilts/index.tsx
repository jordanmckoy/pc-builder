/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @next/next/no-img-element */
import NavBar from "~/components/Navbar"
import { api } from "~/utils/api"
import Link from 'next/link'

export default function Prebuilts() {
    const { data } = api.prebuilts.getAllBuilds.useQuery()

    return (
        <div className="bg-slate-900 min-h-screen">
            <NavBar />
            {/* Products */}
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-white mb-5 font-bold text-xl">Prebuilts</h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {data?.map((build) => (
                        <Link href={"/prebuilts/" + build.id.toString()} key={build.id}>
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    src={build.image}
                                    alt={build.name}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-white font-bold">{build.name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-400">$ {build.price}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div >
    )
}