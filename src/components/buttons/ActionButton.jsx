export default function ActionButton({ children }) {
    return (
        <button className="px-5 py-2 border-3 rounded-lg font-light bg-white drop-shadow text-(--primary-color)">
            {children}
        </button>
    )
}