import { RiHexagonLine } from "@remixicon/react"

export const HexGlow = () => {
    return (
        <div className="flex justify-around m-5">
            {[...Array(3)].map((k, i) => {
                return (
                    <RiHexagonLine
                        className="font-bold drop-shadow-lg drop-shadow-amber-300 text-amber-100"
                        key={i}
                        size={32}
                    />
                )
            })}
        </div>
    )
}
