export default function ImageSwitcher() {
    return (

        <div className="py-10 w-full lg:lg:bg-[#37474F]">
            <div className="grid sm:grid-cols-2 items-start gap-14 p-8 mx-auto max-w-4xl bg-teal-300 
            shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-[sans-serif]">
                <div>
                    <h1 className="text-black tracking-wide text-4xl font-extrabold">Let&apos;s Talk</h1>
                    <p className="text-lg text-dark2 font-sans capitalize tracking-wider leading-8 mt-4">
                        we are waiting for your response.fill the form and plan a meeting with
                        us.
                    </p>

                    <div className="mt-12">
                        <h2 className="text-gray-800 text-xl font-bold">Email</h2>
                        <ul className="mt-4">
                            <li className="flex items-center">
                                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#000'
                                        viewBox="0 0 479.058 479.058">
                                        <path
                                            d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                            data-original="#000000" />

                                    </svg>
                                </div>
                                <a href="" className="text-dark1 text-sm ml-4">
                                    <strong className="text-lg">info@example.com</strong>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-gray-800 text-xl font-bold">Socials</h2>

                        <ul className="flex mt-4 space-x-4">
                            <li className="bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <i className="ri-youtube-fill text-2xl text-white font-extralight"></i>
                            </li>
                            <li className="bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <i className="ri-instagram-fill text-2xl text-white font-extralight"></i>                            </li>
                            <li className="bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <i className="ri-discord-fill text-2xl text-white font-extralight"></i>
                            </li>
                        </ul>
                    </div>
                </div>

                <form className="ml-auo space-y-4">
                    <input type='text' placeholder='Enter Name' required
                        className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-md outline-gray-500" />
                    <input type='email' placeholder='Enter Email' required
                        className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-gray-500" />
                    <input type='number' placeholder='Enter Number' required
                        className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-gray-500" />
                    <textarea placeholder='Enter Message' rows={6} required
                        className="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-gray-500"></textarea>
                    <button type='submit'
                        className="text-white bg-gray-700 focus:bg-gray-400 rounded-md text-md
                        lg:text-lg tracking-wider px-4 py-3 w-full !mt-6 capitalize lg:hover:scale-110
                        lg:hover:bg-gray-400 transition-all lg:focus:bg-gray-500">
                         send 
                    </button>
                </form>
            </div>
        </div>
    )
}
