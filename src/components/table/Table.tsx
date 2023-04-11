/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @next/next/no-img-element */
import TableHeader from './TableHeader'
import { faTags } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { type Dispatch, type SetStateAction, useState, useEffect } from 'react'
import type { Part } from '~/lib/types'
import { api } from '~/utils/api'
import { Transition, Dialog, RadioGroup } from "@headlessui/react"
import { XMarkIcon, ShieldCheckIcon, CheckIcon } from "@heroicons/react/24/outline"
import { Fragment } from "react"

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

type Row = {
    get: Part;
    set: Dispatch<SetStateAction<Part>>;
    parts: Part[];
    category: string;
}

export default function Table() {
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        import('preline')
    }, [])


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
    } | null

    const createBlankState = () => {
        return {
            id: null,
            brand: null,
            model: null,
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



    if (!data?.cpus || !data?.motherboards || !data?.ram || !data?.gpus || !data?.storage || !data?.psus || !data?.cases || !data?.coolers) return (<div>Loading...</div>)

    const rows: Row[] = [
        { get: cpu, set: setCpu, parts: data?.cpus, category: "CPU" },
        { get: cooling, set: setCooling, parts: data?.coolers, category: "CPU Cooler" },
        { get: motherboard, set: setMotherboard, parts: data?.motherboards, category: "Motherboard" },
        { get: ram, set: setRam, parts: data?.ram, category: "RAM" },
        { get: gpu, set: setGpu, parts: data?.gpus, category: "GPU" },
        { get: storage, set: setStorage, parts: data?.storage, category: "Storage" },
        { get: psu, set: setPsu, parts: data?.psus, category: "Power Supply" },
        { get: case_, set: setCase, parts: data?.cases, category: "Case" },
    ]

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
                                                                row.get?.image &&
                                                                <img className="flex-shrink-0 h-[2.375rem] w-[2.375rem] rounded-md" src={row.get.image} alt="Image Description" />
                                                            }
                                                            <div>
                                                                <span className="block text-sm font-semibold whitespace-normal text-gray-800 dark:text-gray-200">{row.get?.brand} {row.get?.model}</span>
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
                                                            {row.get?.price} USD
                                                        </div>
                                                    </div>

                                                </td>

                                                <td className="h-px w-px whitespace-nowrap">
                                                    <div className="block h-full p-6" >
                                                        {row.get?.stock && row.get?.stock > 0 ?
                                                            <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-lg font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                                <svg className="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                                </svg>
                                                                {row.get?.stock} In Stock
                                                            </span>
                                                            :
                                                            <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-lg font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                                                                Out of stock
                                                            </span>
                                                        }

                                                    </div>
                                                </td>
                                                <td className="h-px w-px whitespace-nowrap">
                                                    <ActionButton category={row.category} get={row.get} parts={row.parts} set={row.set} />
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
                    </div >
                </div >
                {/* <!-- End Card --> */}
            </div >
            {/* <!-- End Table Section --> */}
        </>
    )
}

function ActionButton(row: Row) {
    const [open, setOpen] = useState(false)

    return (
        <div className="block h-full p-6" >
            <div className="mt-5">
                <button onClick={() => setOpen(true)} type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-bg-gray-on-hover-cards">
                    Pick a Part
                </button>
            </div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                                enterTo="opacity-100 translate-y-0 md:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 md:scale-100"
                                leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                            >
                                <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                                    <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                                        <button
                                            type="button"
                                            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                                            onClick={() => {
                                                setOpen(false)
                                                row.set?.(null)
                                            }}
                                        >
                                            <span className="sr-only">Close</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>

                                        <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                                            <div className="sm:col-span-4 lg:col-span-5">
                                                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                                                    {row.get?.image && (
                                                        <img src={row.get?.image} className="object-cover object-center" />
                                                    )}
                                                </div>
                                            </div>
                                            <div className="sm:col-span-8 lg:col-span-7">
                                                <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{row.get?.brand} {row.get?.model}</h2>

                                                <section aria-labelledby="information-heading" className="mt-4">
                                                    <h3 id="information-heading" className="sr-only">
                                                        Product information
                                                    </h3>

                                                    <div className="flex items-center">
                                                        <p className="text-lg text-gray-900 sm:text-xl">$ {row.get?.price} USD</p>
                                                    </div>

                                                    {row.get?.stock && (
                                                        <div className="mt-6 flex items-center">
                                                            <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                                                            <p className="ml-2 font-medium text-gray-500">In stock and ready to ship</p>
                                                        </div>
                                                    )}
                                                </section>

                                                <section aria-labelledby="options-heading" className="mt-6">
                                                    <h3 id="options-heading" className="sr-only">
                                                        Product options
                                                    </h3>
                                                    <div className="sm:flex sm:justify-between">
                                                        {/* Size selector */}
                                                        <RadioGroup value={row.get?.id}
                                                            onChange={(e: unknown) => {
                                                                const data = e as Part
                                                                if (data && data.id) {
                                                                    row.set(data)
                                                                }
                                                            }}
                                                        >
                                                            <RadioGroup.Label className="block text-sm font-medium text-gray-700">
                                                                {row.category}
                                                            </RadioGroup.Label>
                                                            <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                                {row.parts && (
                                                                    row.parts?.map((data) => (
                                                                        <RadioGroup.Option
                                                                            as="div"
                                                                            key={data?.model}
                                                                            value={data}

                                                                            className={({ active }) =>
                                                                                classNames(
                                                                                    active ? 'ring-2 ring-indigo-500' : '',
                                                                                    'relative block cursor-pointer rounded-lg border border-gray-300 p-4 focus:outline-none'
                                                                                )
                                                                            }
                                                                        >
                                                                            {({ active, checked }) => (
                                                                                <>
                                                                                    <RadioGroup.Label as="p" className="text-base font-medium text-gray-900">
                                                                                        {data?.brand} {data?.model}
                                                                                    </RadioGroup.Label>
                                                                                    <div
                                                                                        className={classNames(
                                                                                            active ? 'border' : 'border-2',
                                                                                            checked ? 'border-indigo-500' : 'border-transparent',
                                                                                            'pointer-events-none absolute -inset-px rounded-lg'
                                                                                        )}
                                                                                        aria-hidden="true"
                                                                                    />
                                                                                </>
                                                                            )}
                                                                        </RadioGroup.Option>
                                                                    ))
                                                                )
                                                                }
                                                            </div>
                                                        </RadioGroup>
                                                    </div>

                                                    <div className="mt-6">
                                                        <button
                                                            onClick={() => {
                                                                setOpen(false)
                                                            }}
                                                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                                                        >
                                                            Add to List
                                                        </button>
                                                    </div>
                                                    <div className="mt-6 text-center">
                                                        <a href="#" className="group inline-flex text-base font-medium">
                                                            <ShieldCheckIcon
                                                                className="mr-2 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                                                aria-hidden="true"
                                                            />
                                                            <span className="text-gray-500 group-hover:text-gray-700">Lifetime Guarantee</span>
                                                        </a>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root >
        </div>
    )
}


