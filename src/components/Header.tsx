import React from 'react'
import pfp from '../img/pfp.png'

type Props = {
    username: string;
}

const Header = (props: Props) => {
  return (
    <header>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
        <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            EtherView
            </h1>
        </div>
        <div className="text-center sm:text-left">
            <h1 className="text-2xl text-gray-900 sm:text-s">
            {props.username} Dashboard
            </h1>
        </div>


        <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <button
            className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
            type="button"
            >
            Logout
            </button>
        </div>
        </div>
    </div>
    </header>
  )
}

export default Header