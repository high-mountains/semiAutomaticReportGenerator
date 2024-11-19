
const GenePageWrapper = (props) => {
    return(
            <div className={'border-[1rem] border-[rgba(0,0,0,0.1)] rounded-[2rem] page font relative pt-[30rem] px-[30rem] printUnit'}
                >
                {props.children}
            </div>
    )
}

export default GenePageWrapper;