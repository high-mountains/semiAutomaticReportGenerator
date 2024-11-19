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
                    mainTitle={"私たちの遺伝子検査について"}
                />
                {/* <p className=" text-justify"> */}
                {`私たちの遺伝子検査は、750以上の<span style='color: #007AFF;'>SNP（単一ヌクレオチド多型）</span>を解析することで、あなたの体質や健康リスクをさまざまな側面から把握することができます。\n
これらの情報を基に、個々の遺伝的特性に最適化された健康管理プランを提供し、日常生活の質を向上させるお手伝いをいたします。\n<span style=>従来の遺伝子検査の多くは、希少疾患・難病リスクが高い傾向にある・低い傾向にあることを伝えています。\nせっかく遺伝子検査をしても「では何をすれば良いのか」と次の一歩に繋がる情報はありませんでした。\n私たちの遺伝子検査は、医学論文に基づいた情報から、健康管理に役立つ情報提供を目指しております。(https://jene-inc.com/paper)\n
検査結果は理解しやすい形で実際の生活に取り入れていただけるようサポートします。\nあなたが持つ遺伝子情報を最大限に活用し、健康で充実した人生を送るための具体的なアクションプランを提供します。\nあなたの未来をより健康で輝かしいものにするため、私たちの遺伝子検査サービスをご活用ください。`
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
                {/* </p> */}

                <div className="w-[60rem] h-[60rem] absolute mb-[58rem] bottom-0 left-2/4 translate-x-[-50%]">
                    <img src="./bg/logo.svg" alt="" className="w-full h-full" />
                </div>
                <PageNumber>04</PageNumber>
            </PageWrapper>
        </>
    );
};

export default Page4;
