/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import TableHeader from './TableHeader'
import { faTags } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Parts } from '~/lib/data'

export default function Table() {

    type PcPartSegment = {
        name: string | null,
        id: string | undefined,
        category: string,
        image: string | null,
        price: number | null,
        rating: number | null,
        stock: number | null,
        description: string | null,
    }

    type Build = {
        cpu: PcPartSegment,
        motherboard: PcPartSegment,
        ram: PcPartSegment,
        gpu: PcPartSegment,
        storage: PcPartSegment,
        psu: PcPartSegment,
        case: PcPartSegment,
        cooling: PcPartSegment,
        // eslint-disable-next-line @typescript-eslint/ban-types
    } | {}


    const data = Parts

    const createBlankState = (category: string): PcPartSegment => {
        return {
            category,
            id: undefined,
            name: null,
            image: null,
            price: null,
            stock: null,
            rating: null,
            description: null,
        };
    };

    // TODO: Refactor this to use a single state object

    const [cpu, setCpu] = useState<PcPartSegment>(createBlankState("CPU"));

    const [motherboard, setMotherboard] = useState<PcPartSegment>(createBlankState("MOTHERBOARD"));

    const [ram, setRam] = useState<PcPartSegment>(createBlankState("RAM"));

    const [gpu, setGpu] = useState<PcPartSegment>(createBlankState("GPU"));

    const [storage, setStorage] = useState<PcPartSegment>(createBlankState("STORAGE"));

    const [psu, setPsu] = useState<PcPartSegment>(createBlankState("POWER SUPPLY"));

    const [case_, setCase] = useState<PcPartSegment>(createBlankState("CASE"));

    const [cooling, setCooling] = useState<PcPartSegment>(createBlankState("COOLING"));

    // TODO: Implement a feature to save builds to local storage
    const handleBuild = () => {
        const build: Build = {
            cpu: cpu,
            motherboard: motherboard,
            ram: ram,
            gpu: gpu,
            storage: storage,
            psu: psu,
            case: case_,
            cooling: cooling,
        }

        console.log(build)
    }

    const rows = [
        { get: cpu, set: setCpu, parts: data.filter((part: { category: string; }) => part.category === "CPU") },
        { get: motherboard, set: setMotherboard, parts: data.filter((part: { category: string; }) => part.category === "MOTHERBOARD") },
        { get: ram, set: setRam, parts: data.filter((part: { category: string; }) => part.category === "RAM") },
        { get: gpu, set: setGpu, parts: data.filter((part: { category: string; }) => part.category === "GPU") },
        { get: storage, set: setStorage, parts: data.filter((part: { category: string; }) => part.category === "STORAGE") },
        { get: psu, set: setPsu, parts: data.filter((part: { category: string; }) => part.category === "POWER SUPPLY") },
        { get: case_, set: setCase, parts: data.filter((part: { category: string; }) => part.category === "CASE") },
        { get: cooling, set: setCooling, parts: data.filter((part: { category: string; }) => part.category === "COOLING") },
    ]

    const handlePartSelection = <T extends PcPartSegment>(id: string, parts: T[], setPart: React.Dispatch<React.SetStateAction<PcPartSegment | undefined>>) => {
        if (id === "blank") {
            const category = parts[0]?.category
            if (category) setPart(createBlankState(category))
        }
        const partData = parts.find(part => part.id === id)

        if (partData) setPart(partData)
    }

    return (
        <>
            {/* <!-- Table Section --> */}
            <div className="max-w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* <!-- Card --> */}
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                                <TableHeader />
                                {/* <!-- Table --> */}
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-slate-800">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        Category
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        Product
                                                    </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-left">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        Price
                                                    </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-left">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        Rating
                                                    </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-left">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        Stock
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        Action
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-right"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                        {rows.map((row) => (
                                            <tr className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800">
                                                <td className="h-px w-px whitespace-nowrap">

                                                    <div className="block h-full p-6" >
                                                        <span className="text-sm text-gray-600 dark:text-gray-400">{row.get.category}</span>
                                                    </div>

                                                </td>
                                                <td className="h-px w-px whitespace-nowrap">
                                                    <div className="block h-full p-6" >
                                                        <div className="flex items-center gap-x-4">
                                                            {
                                                                row.get.image &&
                                                                <img className="flex-shrink-0 h-[2.375rem] w-[2.375rem] rounded-md" src={row.get.image} alt="Image Description" />
                                                            }
                                                            <div>
                                                                <span className="block text-sm font-semibold whitespace-normal text-gray-800 dark:text-gray-200">{row.get.name}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="h-px w-px whitespace-nowrap">

                                                    <div className="block h-full p-6" >
                                                        <div className="inline-flex items-center gap-1.5 py-0.5 px-2 text-white">
                                                            <span className="inline-flex items-center justify-center h-10 w-10 rounded-full">
                                                                <FontAwesomeIcon className='h-5 w-5 text-white' icon={faTags} />
                                                            </span>
                                                            {row.get.price}
                                                        </div>
                                                    </div>

                                                </td>
                                                <td className="h-px w-px whitespace-nowrap">
                                                    <div className="block h-full p-6 " >
                                                        <div className="inline-flex items-center gap-1.5 py-0.5 px-2 text-white">
                                                            {row.get.rating && row.get.rating > 0 &&
                                                                [...Array(row.get.rating)].map(() =>
                                                                    <svg className="w-3 h-3 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                    </svg>
                                                                )
                                                            }
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="h-px w-px whitespace-nowrap">
                                                    <div className="block h-full p-6" >
                                                        {row.get.stock && row.get.stock > 0 ?
                                                            <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-lg font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                                <svg className="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                                </svg>
                                                                {row.get.stock} In Stock
                                                            </span>
                                                            :
                                                            <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-lg font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                                                                Out of stock
                                                            </span>
                                                        }

                                                    </div>
                                                </td>
                                                <td className="h-px w-px whitespace-nowrap">
                                                    <div className="block h-full p-6">
                                                        <select onChange={(e) => {
                                                            handlePartSelection(e.target.value, row.parts, row.set as React.Dispatch<React.SetStateAction<PcPartSegment | undefined>>)
                                                        }} className="p-2 w-full rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                                                            <option value={"blank"}>Choose a Part</option>
                                                            {row.parts.map((part) =>
                                                                <option value={part.id}>{part.name}</option >
                                                            )}
                                                        </select>
                                                    </div>
                                                </td>
                                                <td className="h-px w-px whitespace-nowrap">
                                                    {row.get.id && (<>
                                                        <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" data-hs-overlay={"#" + "modal-" + row.get.id}>
                                                            View
                                                        </button>
                                                        <div id={"modal-" + row.get.id} className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
                                                            <div className="flex justify-center hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all h-auto">
                                                                <div className="flex flex-col bg-white border w-3/6 shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                                                    <div className="flex flex-col justify-center items-center bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                                                        {row.get.image && (
                                                                            <img className="w-96 h-96" src={row.get.image} alt="Image Description" />
                                                                        )}
                                                                        <div className="p-4 md:p-5">
                                                                            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                                                                {row.get.name}
                                                                            </h3>
                                                                            <p className="mt-1 text-gray-800 dark:text-gray-400 whitespace-normal">
                                                                                {row.get.description}
                                                                            </p>
                                                                            <p className="mt-1 text-lg font-bold dark:text-white">
                                                                                $ {row.get.price}
                                                                            </p>
                                                                        </div>
                                                                        <button type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-overlay={"#" + "modal-" + row.get.id}>
                                                                            Close
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {/* <!-- End Table --> */}
                                {/* <!-- Footer --> */}
                                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
                                    <div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            <span className="font-semibold text-gray-800 dark:text-gray-200">9</span> results
                                        </p>
                                    </div>

                                    <div>
                                        <div className="inline-flex gap-x-2">
                                            <button type="button" onClick={() => handleBuild()} className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-10 w-16 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm  dark:focus:ring-offset-gray-800">
                                                <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Footer --> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Card --> */}
            </div >
            {/* <!-- End Table Section --> */}
        </>
    )
}
