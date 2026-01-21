export const StripeBuy = ({ className }) => {
    return (
        <div
            className={`border-2 p-4 rounded-lg md:flex md:flex-row place-text-center text-center ${className}`}
        >
            <div className="inline md:flex-1/2 place-content-center">
                <span className="text-2xl drop-shadow-md drop-shadow-amber-200">
                    Astro Medallion - $149
                </span>
                {" "}
                <span className="text-xl drop-shadow-none line-through text-slate-400">
                    $179
                </span>
            </div>
            <a
                className="inline-block bg-amber-200 text-cyan-900 p-1 w-25 h-10 border border-cyan-900 rounded-md no-underline m-4 text-xl drop-shadow-amber-500 drop-shadow-sm hover:drop-shadow-amber-300 hover:drop-shadow-lg text-center place-content-center"
                href="https://buy.stripe.com/bJe9AM2Ae4wG9tRb30bjW01"
                target="_blank"
                rel="noopener noreferrer"
            >
                Buy
            </a>
        </div>
    )
}
{
    /* <script async src="https://js.stripe.com/v3/buy-button.js"></script>

<stripe-buy-button
    buy-button-id="buy_btn_1SqJk548FE1IrZa2qPvzjKKx"
    publishable-key="pk_live_51Somao48FE1IrZa2LFxDDVmcaPfqwc2wHtC36Obn5Bzsylf7Qg9RLfsnR8M6YJIZzy6HBih4Lo5TMYrzYsS0bG2Y00mcUsvRP1"
></stripe-buy-button> */
}
