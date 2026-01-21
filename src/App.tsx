import "./App.css"
import Description from "./copy/astro-medallion/desc-short.mdx"
import Brief from "./copy/astro-medallion/brief.mdx"
import Sunrise from "./copy/astro-medallion/sunrise-sunset.mdx"
import Moon from "./copy/astro-medallion/moon-phase.mdx"
import Sun from "./copy/astro-medallion/sun.mdx"
import Assembly from "./copy/astro-medallion/assembly.mdx"
import { Gallery } from "./components/gallery"
import {
    RiGiftLine,
    RiGithubFill,
    RiInstagramFill,
    RiInstagramLine,
} from "@remixicon/react"
import { Title } from "./components/title"
import { EcwidButton } from "./components/ecwid-button"
import { StripeBuy } from "./components/stripe-buy"
import { HexGlow } from "./components/hex-glow"
import { NavBar } from "./components/nav-bar"

const items = [
    <img src="astro-medallion/PXL_20251121_165222077.PORTRAIT.jpg" />,
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
        <>
            <link rel="shortcut icon" href="./assets/hexagon-line.svg"></link>
            <article className="m-2 ">
                <header className="bg-[url(./assets/astro-medallion-wires.png)]">
                    <div className="bg-indigo-950/25">
                        <div className="">
                            <div className="md:flex md:flex-row mb-2 mr-2 w-100%">
                                <div className="h-full md:flex-3/12 mr-2">
                                    <Title />
                                </div>
                                <div className="h-full align-bottom md:flex-3/6 text-2xl text-amber-100 text-right ml-2">
                                    <nav>
                                        <NavBar />
                                    </nav>
                                    <marquee>
                                        Astro Medallion - Planetary Clock - Buy
                                        now!
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
                        <StripeBuy className=""/>
                    </div>
                </div>
                <div
                    id="description"
                    className="flex flex-row mt-2 justify-center"
                >
                    <div className="basis-9/12">
                        <Description />
                    </div>
                </div>
                <HexGlow />
                <div
                    id="assembly"
                    className="flex flex-row mt-2 justify-center"
                >
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
            <footer className="pb-5">
                <div className="flex flex-row justify-center">
                    <div className="basis-9/12 text-center">
                        <a
                            href="https://github.com/dougli1sqrd/astro-medallion"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="m-2"
                        >
                            <RiGithubFill size={32} className="inline" />
                        </a>
                        <a
                            href="https://www.instagram.com/copper.rose.workshop/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="m-2"
                        >
                            <RiInstagramLine size={32} className="inline" />
                        </a>
                        <a
                            href="https://www.etsy.com/shop/CopperRoseWorks"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="m-2"
                        >
                            <RiGiftLine size={32} className="inline" />
                        </a>
                    </div>
                </div>
            </footer>
            <div className="p-5">

            <HexGlow/>
            </div>
        </>
    )
}
