function Title({ className, children }) {
    return (
        <p className={`text-2xl font-bold text-[#7269ef] dark:text-[#b8b8d8] ${className}`}>{children}</p>
    )
}

export default Title