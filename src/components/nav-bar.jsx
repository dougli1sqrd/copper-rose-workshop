import { RiArrowDownDoubleLine } from "@remixicon/react"

export const NavBar = () => {
    return (
        <div className="text-xl">
            <a href="#description" className="ml-2 mr-2">
                <RiArrowDownDoubleLine className="inline" />
                Description
            </a>
            <a href="#assembly" className="ml-2 mr-2">
                <RiArrowDownDoubleLine className="inline" />
                Assembly
            </a>
            <a href="#sunrise" className="ml-2 mr-2">
                <RiArrowDownDoubleLine className="inline" />
                Horizon Lights
            </a>
            <a href="#moon" className="ml-2 mr-2">
                <RiArrowDownDoubleLine className="inline" />
                Moon
            </a>
            <a href="#sun" className="ml-2 mr-2">
                <RiArrowDownDoubleLine className="inline" />
                Sun
            </a>
        </div>
    )
}
