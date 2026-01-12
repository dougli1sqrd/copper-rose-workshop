export const Caption = ({ caption, className, children }) => {
    return (
        <div className={`${className}`}>
            <figure className="table border border-amber-100 rounded-md mt-2 ml-2 mr-2">
                {children}
                <figcaption className="table-caption caption-bottom text-center text-med italic">
                    {caption}
                </figcaption>
            </figure>
        </div>
    )
}
