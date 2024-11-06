import PageWrapper from "../../../../components/Pdf/PageWrapper";
import PageNumber from "../../../../components/Pdf/PageNumber";
import PageHeader from "../../../../components/Pdf/PageHeader";

const Merit = () => {
    return(<>
    <PageWrapper>
        <PageHeader 
            subtitle={"Glutamate Type"}
            mainTitle={"グルタメートタイプ"}>
        </PageHeader>
        <p>Glutamate merit</p>
        {/* <Ablity/> */}
        <PageNumber>
            07
        </PageNumber>
    </PageWrapper>

    </>)
}

export default Merit;
