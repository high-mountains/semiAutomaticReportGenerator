import PageWrapper from "../../../../components/Pdf/PageWrapper";
import PageNumber from "../../../../components/Pdf/PageNumber";
import PageHeader from "../../../../components/Pdf/PageHeader";

const Periodanalyze = (props) => {
    return(<>
        <PageWrapper>
            <PageHeader 
                subtitle={"Glutamate Type"}
                mainTitle={"グルタメートタイプ"}>
            </PageHeader>
            <p>
                Glutamate PeriodAnalyze
            </p>
            <PageNumber>
                06
            </PageNumber>
        </PageWrapper>

    </>)
}

export default Periodanalyze;
