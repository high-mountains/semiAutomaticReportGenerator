import PageWrapper from "../../components/Pdf/PageWrapper";
import PageNumber from "../../components/Pdf/PageNumber";
import PageHeader from "../../components/Pdf/PageHeader";
import Text from "../../components/Pdf/Text";
import pdfJson from "../../utils/dummyPdf.json";

const Page4 = () => {
    return (
        <>
            <PageWrapper>
                <PageHeader
                    subtitle={"Our Genetic Test"}
                    mainTitle={"About our genetic testing"}
                />
                {`Our genetic testing analyzes over 750 <span style='color: #007AFF;'>SNPs (single nucleotide polymorphisms)</span> to understand various aspects of your constitution and health risks.\n
Based on this information, we will provide you with a health management plan optimized for your individual genetic characteristics and help you improve the quality of your daily life.\nMost conventional genetic tests only tell you whether you have a high or low risk of rare or intractable diseases.\nEven if you take a genetic test, you may not know what to do next and not have any information to help you take the next step.\nOur genetic tests aim to provide information based on medical papers that is useful for health management.\n
We will support you in incorporating the test results into your daily life in an easy-to-understand format.\nWe will provide you with a concrete action plan to make the most of your genetic information and live a healthy and fulfilling life.\nPlease take advantage of our genetic testing services to make your future healthier and brighter.`
                    .split("\n")
                    .map((line, index) => (
                        <Text
                            key={index}
                            className="whitespace-pre-wrap text-justify mb-[16rem]"
                            textContent={line}
                            textColor={pdfJson.mainTextColor}
                            containerStyle={{ width: "526rem" }}
                        />
                    ))}
                <div className="w-[60rem] h-[60rem] absolute mb-[58rem] bottom-0 left-2/4 translate-x-[-50%]">
                    <img src="./bg/logo.svg" alt="" className="w-full h-full" />
                </div>
                <PageNumber>04</PageNumber>
            </PageWrapper>
        </>
    );
};

export default Page4;
