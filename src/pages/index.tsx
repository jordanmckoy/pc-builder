import Head from "next/head";
import Link from "next/link";
import NavBar from "~/components/Navbar";

export default function Home() {
    return (
        <>
            <Head>
                <title>GamerzJA</title>
                <meta name="description" content="With ❤ from Tropic" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="min-h-screen bg-slate-900">
                <NavBar />
                <div>
                    <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                            <svg
                                viewBox="0 0 1024 1024"
                                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                                aria-hidden="true"
                            >
                                <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                                <defs>
                                    <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                        <stop stopColor="#7775D6" />
                                        <stop offset={1} stopColor="#E935C1" />
                                    </radialGradient>
                                </defs>
                            </svg>
                            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                    Start gaming with
                                    <br />
                                    <p className='text-blue-500'>GamerzJA!</p>
                                </h2>
                                <p className="mt-6 text-lg leading-8 text-gray-300">
                                    Welcome to GamerzJA, your one-stop-shop for custom built gaming PCs. Our team of expert technicians and gamers have designed the ultimate gaming machine to take your gaming experience to the next level.
                                </p>
                                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                    <Link
                                        href="/builder"
                                        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                    >
                                        Get started
                                    </Link>

                                    <Link
                                        href="/about"
                                        className="text-sm font-semibold leading-6 text-white">
                                        Learn more <span aria-hidden="true">→</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="relative mt-16 h-80 lg:mt-8">
                                <img
                                    className="absolute left-0 top-0 w-fit sm:w-[57rem] sm:max-w-none md:w-[57rem] md:max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                                    src="/assets/hero.jpg"
                                    alt="App screenshot"
                                />
                            </div>
                        </div>
                    </div>
                    {/* <!-- Icon Blocks --> */}
                    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
                            {/* <!-- Icon Block --> */}
                            <div className="text-center">
                                <div className="flex justify-center items-center w-12 h-12 bg-gray-50 border border-gray-200 rounded-full mx-auto dark:bg-gray-800 dark:border-gray-700">
                                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                    </svg>
                                </div>
                                <div className="mt-3">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Quality Components</h3>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400">We use high-quality components from trusted brands in all our builds.</p>
                                </div>
                            </div>
                            {/* <!-- End Icon Block --> */}

                            {/* <!-- Icon Block --> */}
                            <div className="text-center">
                                <div className="flex justify-center items-center w-12 h-12 bg-gray-50 border border-gray-200 rounded-full mx-auto dark:bg-gray-800 dark:border-gray-700">
                                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z" />
                                        <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z" />
                                        <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
                                    </svg>
                                </div>
                                <div className="mt-3">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Custom PC Builds</h3>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400">We build custom PCs tailored to your needs and budget.</p>
                                </div>
                            </div>
                            {/* <!-- End Icon Block --> */}

                            {/* <!-- Icon Block --> */}
                            <div className="text-center">
                                <div className="flex justify-center items-center w-12 h-12 bg-gray-50 border border-gray-200 rounded-full mx-auto dark:bg-gray-800 dark:border-gray-700">
                                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                        <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                    </svg>
                                </div>
                                <div className="mt-3">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Technical Expertise</h3>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400">Our team has extensive technical knowledge and experience in PC building.</p>
                                </div>
                            </div>
                            {/* <!-- End Icon Block --> */}

                            {/* <!-- Icon Block --> */}
                            <div className="text-center">
                                <div className="flex justify-center items-center w-12 h-12 bg-gray-50 border border-gray-200 rounded-full mx-auto dark:bg-gray-800 dark:border-gray-700">
                                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                        <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                    </svg>
                                </div>
                                <div className="mt-3">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">24/7 Support</h3>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400">We offer support, including maintenance, upgrades, and repairs, with 24/7 availability.</p>
                                </div>
                            </div>
                            {/* <!-- End Icon Block --> */}
                        </div>
                    </div>
                    {/* <!-- End Icon Blocks --> */}
                </div>

                <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
                    {/* <!-- Grid --> */}
                    <div className="text-center">
                        <div>
                            <a className="flex-none text-xl font-semibold text-black dark:text-white" href="#" aria-label="Brand">GamerzJA</a>
                        </div>
                        {/* <!-- End Col --> */}

                        <div className="mt-3">
                            <p className="text-gray-500">© 2023 GamerzJA. All rights reserved.</p>
                        </div>

                        {/* <!-- Social Brands --> */}
                        <div className="mt-3 space-x-2">
                            <a className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800" href="#">
                                <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                </svg>
                            </a>
                            <a className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800" href="#">
                                <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                </svg>
                            </a>
                        </div>
                        {/* <!-- End Social Brands --> */}
                    </div>
                    {/* <!-- End Grid --> */}
                </footer>
            </div >
        </>
    )
}