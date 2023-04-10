/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Transition, Dialog, RadioGroup } from "@headlessui/react"
import { XMarkIcon, ShieldCheckIcon, CheckIcon } from "@heroicons/react/24/outline"
import { useState, Fragment } from "react"
import { type Part } from "~/pages/builder"
import { api } from "~/utils/api"

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}


export default function Cpu() {
    const [open, setOpen] = useState(false)
    const [selectedCPU, setSelectedCPU] = useState<Part>(null)

    const { data } = api.parts.getParts.useQuery();

    return (
        <>
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                <div key="CPU" className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-white">CPU</dt>
                    <dd className="mt-2 text-sm text-gray-500">
                        <p className="text-white text-lg font-bold">{selectedCPU?.brand} {selectedCPU?.model}</p>
                        <p className="text-white text-lg">${selectedCPU?.price}</p>
                    </dd>

                </div>
            </dl>
            <div className="mt-5">
                <button onClick={() => setOpen(true)} type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-bg-gray-on-hover-cards">
                    Pick a CPU
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
                                            onClick={() => setOpen(false)}
                                        >
                                            <span className="sr-only">Close</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>

                                        <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                                            <div className="sm:col-span-4 lg:col-span-5">
                                                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                                                    <img src={selectedCPU?.image} alt={selectedCPU?.model} className="object-cover object-center" />
                                                </div>
                                            </div>
                                            <div className="sm:col-span-8 lg:col-span-7">
                                                <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{selectedCPU?.brand} {selectedCPU?.model}</h2>

                                                <section aria-labelledby="information-heading" className="mt-4">
                                                    <h3 id="information-heading" className="sr-only">
                                                        Product information
                                                    </h3>

                                                    <div className="flex items-center">
                                                        <p className="text-lg text-gray-900 sm:text-xl">{selectedCPU?.price}</p>
                                                    </div>

                                                    {selectedCPU?.stock && (
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
                                                        <RadioGroup value={selectedCPU} onChange={setSelectedCPU}>
                                                            <RadioGroup.Label className="block text-sm font-medium text-gray-700">
                                                                CPU
                                                            </RadioGroup.Label>
                                                            <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                                {data?.cpus.map((cpu) => (
                                                                    <RadioGroup.Option
                                                                        as="div"
                                                                        key={cpu.model}
                                                                        value={cpu}
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
                                                                                    {cpu.brand} {cpu.model}
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
                                                                ))}
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
                                                            Add to bag
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
        </>
    )
}
