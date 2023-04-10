/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import NavBar from '~/components/Navbar'
import Spinner from '~/components/Spinner';
import { api } from '~/utils/api'

export default function Prebuild() {

    const router = useRouter()

    const id = router.query.id as string

    const { data } = api.prebuilts.getBuild.useQuery({ id: id })

    if (!data) return (
        <Spinner />
    )

    return (
        <>
            <NavBar />
            <div className="bg-slate-900 text-white">
                <div className="pt-6">
                    <nav aria-label="Breadcrumb">
                        <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                            <li className="text-lg font-bold">
                                {data?.name}
                            </li>
                        </ol>
                    </nav>

                    {/* Image gallery */}
                    <div className="mx-auto mt-6 max-w-2xl sm:px-6">
                        <div className="aspect-h-5 aspect-w-4 lg:aspect-h-6 lg:aspect-w-5 sm:overflow-hidden sm:rounded-lg">
                            <img
                                src={data?.image}
                                alt={data?.name}
                                className="h-3/5 w-3/5 object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* Product info */}
                    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{data?.name}</h1>
                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl tracking-tight text-white">${data?.price}</p>
                            <form className="mt-10">
                                <button
                                    type="submit"
                                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Add to cart
                                </button>
                            </form>
                        </div>

                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-white">{data?.description}</p>
                                </div>

                                <div className="mt-6 border-t border-gray-200 pt-6">
                                    <h3 className="sr-only">Details</h3>

                                    <div className="space-y-6">
                                        <div className="flex justify-between text-base font-medium text-white">
                                            <p>Processor</p>
                                            <p>{data?.cpu}</p>
                                        </div>
                                        <div className="flex justify-between text-base font-medium text-white">
                                            <p>Motherboard</p>
                                            <p>{data?.motherboard}</p>
                                        </div>
                                        <div className="flex justify-between text-base font-medium text-white">
                                            <p>RAM</p>
                                            <p>{data?.ram}</p>
                                        </div>
                                        <div className="flex justify-between text-base font-medium text-white">
                                            <p>Graphics Card</p>
                                            <p>{data?.gpu}</p>
                                        </div>
                                        {/* <div className="flex justify-between text-base font-medium text-white">
                                            <p>Storage</p>
                                            <p>{data?.storage}</p>
                                        </div> */}
                                        <div className="flex justify-between text-base font-medium text-white">
                                            <p>Power Supply</p>
                                            <p>{data?.psu}</p>
                                        </div>
                                        <div className="flex justify-between text-base font-medium text-white">
                                            <p>Case</p>
                                            <p>{data?.case}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}