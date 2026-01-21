import { RiPlanetFill } from "@remixicon/react"

export const PlanetColors = () => {
    return (
        <div className="inline-grid md:grid-cols-5 md:grid-rows-2 grid-cols-2 grid-rows-5 gap-2">
            <span>
                <RiPlanetFill className="inline text-[#E8D0FF]" /> Moon
            </span>
            <span>
                <RiPlanetFill className="inline text-[#00FF00]" /> Mercury
            </span>
            <span>
                <RiPlanetFill className="inline text-[#FF00CB]" /> Venus
            </span>
            <span>
                <RiPlanetFill className="inline text-[#FFBA00]" /> Sun
            </span>
            <span>
                <RiPlanetFill className="inline text-[#FF0000]" /> Mars
            </span>
            <span>
                <RiPlanetFill className="inline text-[#FE6900]" /> Jupiter
            </span>
            <span>
                <RiPlanetFill className="inline text-[#BAFF00]" /> Saturn
            </span>
            <span>
                <RiPlanetFill className="inline text-[#6800FF]" /> Uranus
            </span>
            <span>
                <RiPlanetFill className="inline text-[#00FFB4]" /> Neptune
            </span>
            <span>
                <RiPlanetFill className="inline text-[#00CCFF]" /> Earth
            </span>
        </div>
    )
}
