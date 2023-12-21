import React from "react"
import SearchInput from "../searchInput";

interface IHeader{
    setSearchInput: (text: string) => void
}

const Header: React.FC<IHeader> = ({ setSearchInput }) => {
    return(
        <div className="flex justify-between mb-8 items-center sm:flex-row flex-col">
            <h1 className="sm:mb-0 mb-4 font-bold text-2xl"><span className="text-[#15D47B]">Extract</span><span className="font-normal">Light</span></h1>

            <SearchInput getString={(text) => setSearchInput(text)}/>
        </div>
    )
}

export default Header;