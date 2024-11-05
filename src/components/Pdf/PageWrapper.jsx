const PageWrapper = (props) => {
    return(
            <div className="page font outline outline-1 relative pt-[30rem] px-[30rem] printUnit">
                {props.children}
            </div>
    )
}

export default PageWrapper;