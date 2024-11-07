import pdfJson from "../../utils/dummyPdf.json";

const PageWrapper = (props) => {
    return(
            <div className={'page font outline outline-1 relative pt-[30rem] px-[30rem] printUnit'}
                style={{ outlineColor: `${pdfJson.mainTextColor}` }}>
                {props.children}
            </div>
    )
}

export default PageWrapper;