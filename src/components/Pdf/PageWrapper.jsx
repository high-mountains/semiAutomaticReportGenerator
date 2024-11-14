import pdfJson from "../../utils/dummyPdf.json";

const PageWrapper = (props) => {
    return(
            // <div className={'page font outline outline-1 relative pt-[30rem] px-[30rem] printUnit'} 
            // style={{ outlineColor: `${pdfJson.mainTextColor}` }}
            // >
            <div className={'border-[1rem] border-[rgba(0,0,0,0.1)] rounded-[2rem] page font relative pt-[30rem] px-[30rem] printUnit'}
                >
                {props.children}
            </div>
    )
}

export default PageWrapper;