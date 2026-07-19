import { useState } from "react"

export const Gallery = ({ items = [], className = "" }) => {
    const [imgState, setImgState] = useState({
        current: 0,
        next: 0,
    })
    const [state, setState] = useState(STATIC)

    return (
      <div className={`w-12/12 border-2 rounded-lg ${className}`}>
            {items.length > 0 ? (
                <GalleryMain
                    item={items[imgState.current]}
                    state={state}
                    setState={setState}
                    onFadeOut={() => {
                        // Update current from next
                        setImgState({
                            current: imgState.next,
                            next: imgState.next,
                        })
                    }}
                />
            ) : null}
            <div>
                {items.map((item, i) => {
                    const borderClass =
                        i == imgState.next
                            ? "border-amber-500"
                            : "border-transparent"
                    return (
                        <div
                            key={i}
                            className={`w-2/12 inline-block m-1 border-2 ${borderClass} cursor-pointer`}
                            onClick={() => {
                                if (i != imgState.current) {
                                    setImgState({
                                        current: imgState.current,
                                        next: i,
                                    })
                                    setState(FADE_OUT)
                                }
                            }}
                        >
                            {item}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const STATIC = "static"
const FADE_OUT = "fade-out"
const FADE_IN = "fade-in"

export const GalleryMain = ({
    item,
    state,
    setState = (s) => {},
    onFadeOut = () => {},
}) => {
    let opacity
    if (state === FADE_OUT) {
        opacity = "opacity-0"
    } else {
        opacity = "opacity-100"
    }

    return (
        <div
            className={`transition-opacity duration-250 ${opacity} ease-in-out border border-transparent rounded-lg`}
            onTransitionEnd={() => {
                if (state == FADE_OUT) {
                    onFadeOut()
                    setState(FADE_IN)
                } else if (state == FADE_IN) {
                    setState(STATIC)
                }
            }}
        >
            {item}
        </div>
    )
}

