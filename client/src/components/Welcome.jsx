import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle} from "react-icons/bs";

import { Loader } from "./"  

const Welcome = () => {
    const connectWallet = () => {

    }

    return (
        <div className="flex w-full justify-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col mf:mr-10">
                    <h1 className="texxt-3x1 sm:text-5x1 text-white text-gradient py-1">
                        Send Crypt <br/> across the world
                    </h1>
                </div>
                <p className="text-left  mt-85 text-white font-light md:w-9/12 w-11/12 text-base">
                    Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto
                </p>
                <button 
                    type="button" 
                    onClick={connectWallet} 
                    className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
                    <p className="text-white text-space font-semibold">Connect Wallet</p>
                </button>
            </div>
        </div>

    )
}

export default Welcome;