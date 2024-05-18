import { Dispatch, ReactNode, SetStateAction } from "react"
import styles from "./modal.module.css";

interface Props {
    children: ReactNode
    title: string
    active: boolean
    handleActive: Dispatch<SetStateAction<boolean>>
}

export default function Modal({ children, title, active, handleActive }: Props) {
    return (
        <div id="settingsModal" data-modal-backdrop="static" tabIndex={-1} aria-hidden="true" className={`${active ? "" : "hidden"} ${styles.modal} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full bg-gray-950 bg-opacity-20`}>
            <div className="relative p-4 w-full max-w-3xl m-auto max-h-full">
                <div className="relative bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <h3 className="text-xl font-semibold">
                            {title}
                        </h3>
                        <button type="button" onClick={() => handleActive(false)} className="bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="settingsModal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <div className="p-4 md:p-5 space-y-4">
                        {children}
                    </div>

                    {/* <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
                        <button data-modal-hide="settingsModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">I accept</button>
                        <button data-modal-hide="settingsModal" type="button" className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Decline</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}