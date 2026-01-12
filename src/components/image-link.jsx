export const ImgA = ({ href, active = true, className }) => {
    return active ? (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:drop-shadow-none ${className}`}
        >
            <img src={href} />
        </a>
    ) : (
        <img src={href} />
    )
}
