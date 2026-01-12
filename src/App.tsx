import "./App.css"
import Description from "./copy/astro-medallion/desc-short.mdx"
import Brief from "./copy/astro-medallion/brief.mdx"
import Sunrise from "./copy/astro-medallion/sunrise-sunset.mdx"
import Moon from "./copy/astro-medallion/moon-phase.mdx"
import Sun from "./copy/astro-medallion/sun.mdx"
import Assembly from "./copy/astro-medallion/assembly.mdx"
import { Gallery } from "./components/gallery"
import { RiArrowDownDoubleLine, RiHexagonLine } from "@remixicon/react"
import Bg from "./assets/astro-mdallion-wires.png"
import { Title } from "./components/title"
import { EcwidButton } from "./components/ecwid-button"
import { HexGlow } from "./components/hex-glow"
import { NavBar } from "./components/nav-bar"


const items = [
    <img src="astro-medallion/PXL_20251121_165222077.PORTRAIT.jpg"/>,
    <img src="astro-medallion/PXL_20251121_165206066.PORTRAIT.jpg" />,
    <img src="astro-medallion/PXL_20251121_165412159.PORTRAIT.jpg" />,
    <img src="astro-medallion/PXL_20251121_165541186.PORTRAIT.jpg" />,
    <video
        autoPlay
        muted
        loop
        src="astro-medallion/PXL_20251118_203009175.mp4"
    />,
]

export function App() {
    return (
        <article className="m-2 ">
            <header className="bg-[url(./assets/astro-medallion-wires.png)]">
                <div className="bg-indigo-950/25">
                    <div className="">
                        <div className="flex flex-row mb-2 mr-2 w-100%">
                            <div className="h-full leading-1 flex-3/12 mr-2">
                                <Title />
                            </div>
                            <div className="h-full align-bottom flex-3/6 text-2xl text-amber-100 text-right ml-2">
                                <nav>
                                    <NavBar />
                                </nav>
                                <marquee>
                                    Astro Medallion - Planetary Clock - Buy now!
                                </marquee>
                            </div>
                        </div>
                    </div>
                    <HexGlow />
                </div>
            </header>
            <div className="md:flex md:flex-row mb-2">
                <div className="md:basis-7/12 mr-2">
                    <Gallery items={items} />
                </div>
                <div className="md:basis-5/12 ml-4">
                    <Brief />
                    <EcwidButton className="h-60 m-5 bg-secondary hover:shadow-lg border hover:border-2 border-amber-100 rounded-lg shadow-amber-300" />
                </div>
            </div>
            <div id="description" className="flex flex-row mt-2 justify-center">
                <div className="basis-9/12">
                    <Description />
                </div>
            </div>
            <HexGlow />
            <div id="assembly" className="flex flex-row mt-2 justify-center">
                <div className="basis-9/12">
                    <Assembly />
                </div>
            </div>
            <HexGlow />
            <div id="sunrise" className="flex flex-row mt-2 justify-center">
                <div className="basis-9/12">
                    <Sunrise />
                </div>
            </div>
            <HexGlow />
            <div id="moon" className="flex flex-row mt-2 justify-center">
                <div className="basis-9/12">
                    <Moon />
                </div>
            </div>
            <HexGlow />
            <div id="sun" className="flex flex-row mt-2 justify-center">
                <div className="basis-9/12">
                    <Sun />
                </div>
            </div>
        </article>
    )
}
