import React, {Dispatch, SetStateAction} from 'react'
import walletIcon from '../img/wallet.png'
import trash from '../img/delete.png'
import add from '../img/add.png'
import addWallet from './addWallet'

type Props = {
    wallets: Array<string>,
    username: string,
    isSelected: boolean,
    setIsSelected: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = (props: Props) => {
  return (
    <div className="flex h-screen w-16 flex-col justify-between border-e bg-white">
  <div>
    <div className="inline-flex h-16 w-16 items-center justify-center">
      <span
        className="grid h-10 w-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600"
      >
        {props.username[0]}
      </span>
    </div>

    <div className="border-t border-gray-100">
      <div className="px-2">
        <div className="py-4">
          <button
            className="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700"
            onClick={()=> props.setIsSelected(true)}
          >
            <img src={add} alt='addWallet'/>

            <span
              className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
            >
              Add Wallet
            </span>
          </button>
        </div>

        <ul className="space-y-1 border-t border-gray-100 pt-4">
            {props.wallets.map((wallet, index) => (
                <li key={index}>
                    <button
              className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            >
                <img src={walletIcon} alt='wallet'/>
              <span
                className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
              >
                {wallet}
              </span>
            </button>
                </li>
            ))}
        </ul>
      </div>
    </div>
  </div>

  <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
    <form action="/delete">
      <button
        type="submit"
        className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
      >
        <img src={trash} alt='delete'/>
        <span
          className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
        >
          Delete wallet
        </span>
      </button>
    </form>
  </div>
</div>
  )
}

export default Sidebar