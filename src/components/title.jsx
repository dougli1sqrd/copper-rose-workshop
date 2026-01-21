import { SITE_ROOT } from "../Config"
import { CopperRose } from "./copper-rose"

export const Title = () => {
    return (
        <a href={`${SITE_ROOT}`} className="no-underline drop-shadow-none">
            <div className="flex flex-row">
                <div className="flex-1/3 mr-2 drop-shadow-lg drop-shadow-amber-300">
                    <CopperRose />
                </div>
                <div className="ml-2 flex-2/3 text-4xl font-bold drop-shadow-lg drop-shadow-amber-300 text-amber-100">
                    Copper Rose <br />
                    Workshop
                </div>
            </div>
        </a>
    )
}
