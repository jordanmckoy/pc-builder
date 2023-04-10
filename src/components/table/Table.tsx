/* eslint-disable @next/next/no-img-element */
import TableHeader from './TableHeader'
import { faTags } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CPU, Case, Cooler, GPU, Motherboard, PSU, RAM, Storage } from '@prisma/client'
import { Dispatch, SetStateAction, useState } from 'react'
import { Part } from '~/lib/types'
import { api } from '~/utils/api'


export default function Table() {

    const { data } = api.parts.getParts.useQuery()

    type Build = {
        cpu: Part,
        motherboard: Part,
        ram: Part,
        gpu: Part,
        storage: Part,
        psu: Part,
        case: Part,
        cooling: Part,
    } | {}

    const createBlankState = ()=> {
        return {
            id: null,
            brand: null,
            model:null,
            image: null,
            price: null,
            stock: null,
        };
    };

    // TODO: Refactor this to use a single state object

    const [cpu, setCpu] = useState<Part>(createBlankState());

    const [motherboard, setMotherboard] = useState<Part>(createBlankState());

    const [ram, setRam] = useState<Part>(createBlankState());

    const [gpu, setGpu] = useState<Part>(createBlankState());

    const [storage, setStorage] = useState<Part>(createBlankState());

    const [psu, setPsu] = useState<Part>(createBlankState());

    const [case_, setCase] = useState<Part>(createBlankState());

    const [cooling, setCooling] = useState<Part>(createBlankState());

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

    type Row = {
        get: Part;
        set: Dispatch<SetStateAction<Part>>;
        parts: CPU[] | Motherboard[] | Cooler[] | RAM[] | GPU[] | Storage[] | Case[] | PSU[] | undefined;
        category: string;
    }

    const rows : Row[] = [
        { get: cpu, set: setCpu, parts: data?.cpus, category: "CPU" },
        { get: cooling, set: setCooling, parts: data?.coolers, category: "CPU Cooler"},
        { get: motherboard, set: setMotherboard, parts: data?.motherboards, category:"Motherboard" },
        { get: ram, set: setRam, parts: data?.ram, category:"RAM" },
        { get: gpu, set: setGpu, parts: data?.gpus, category: "GPU" },
        { get: storage, set: setStorage, parts: data?.storage, category:"Storage" },
        { get: psu, set: setPsu, parts: data?.psus, category:"Power Supply" },
        { get: case_, set: setCase, parts: data?.cases, category: "Case"},
    ]

    const handlePartSelection = (id: string, category:string, setPart: React.Dispatch<React.SetStateAction<Part | undefined>>) => {
        if (id === "blank") {
            setPart(createBlankState())
        }

        switch (category) {
            case "CPU":
                const cpu = data?.cpus.find(part => (part.id === id))
                if (cpu) setPart(cpu) 
                break;
            case "CPU Cooler":
                const cooler = data?.coolers.find(part => (part.id === id))
                if (cooler) setPart(cooler) 
                break
            case "Motherboard":
                const motherboard = data?.motherboards.find(part => (part.id === id))
                if (motherboard) setPart(motherboard) 
                break
            case "RAM":
                const ram = data?.ram.find(part => (part.id === id))
                if (ram) setPart(ram) 
                break
            case "GPU":
                const gpu = data?.gpus.find(part => (part.id === id))
                if (gpu) setPart(gpu) 
                break
            case "Storage":
                const storage = data?.storage.find(part => (part.id === id))
                if (storage) setPart(storage) 
                break
            case "Power Supply":
                const psu = data?.psus.find(part => (part.id === id))
                if (psu) setPart(psu) 
                break
            case "Case":
                const case_ = data?.cases.find(part => (part.id === id))
                if (case_) setPart(case_) 
                break
        }
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
                                                        <span className="text-sm text-gray-600 dark:text-gray-400">{row.category}</span>
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
                                                                <span className="block text-sm font-semibold whitespace-normal text-gray-800 dark:text-gray-200">{row.get.brand} {row.get.model}</span>
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
                                                            if(row.parts) {
                                                                const part = 
                                                                handlePartSelection(e.target.value, row.category, row.set as React.Dispatch<React.SetStateAction<Part | undefined>>)
                                                            }
                                                        }} className="p-2 w-full rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                                                            <option value={"blank"}>Choose a Part</option>
                                                            {row.parts && row.parts.map((part) =>
                                                                <option value={part.id}>{part.brand} {part.model}</option >
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
                                                                                {row.get.brand} {row.get.model}
                                                                            </h3>
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