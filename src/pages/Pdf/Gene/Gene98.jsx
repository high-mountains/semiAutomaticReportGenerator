import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  {
    geneName: "CTLA4",
    datas: ["rs231775"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、免疫系の調整に影響を及ぼす可能性があります。CTLA4は、主にT細胞表面に発現する免疫調節分子で、免疫応答を抑制する役割を持っています。CTLA4は、抗原提示細胞上のCD80/CD86分子と結合することで、T細胞の活性化を抑制し、過剰な免疫反応を防ぎます。",
  },
  {
    geneName: "DRD2",
    datas: ["rs1076560", "rs6277", "rs1800497"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、神経系の炎症抑制作用が影響を受ける可能性があります。DRD2（Dopamine Receptor D2）は、ドーパミンD2受容体をコードしており、ドーパミンが結合するとアデニル酸シクラーゼを抑制するGタンパク質共役型受容体です。DRD2は、神経伝達物質の放出や運動調節、報酬系において重要な役割を果たし、行動の調節や意思決定にも関与しています。",
  },
  {
    geneName: "SOCS1",
    datas: [
      "rs2141124542",
      "rs2069578995",
      "rs1244284678",
      "rs2069586831",
      "rs2069587477",
    ],
    level: 0,
    description:
      "この遺伝子に変異がある場合、免疫系の調整に影響を及ぼす可能性があります。SOCS1は、サイトカインシグナル抑制因子で、特定のサイトカインシグナルを負のフィードバックで調節するタンパク質です。SOCS1は、主にJAK-STAT経路の活性化を抑制し、炎症応答や免疫細胞の過剰な活性化を防ぎます。",
  },
];

const Gene98 = ({deltaPageCount}) => {
  // Fetch gene data from Redux store
  const geneData = useSelector((state) => state.pdfData?.geneData || []);

  // Memoize the updated gene data to avoid unnecessary recalculations
  const updatedGeneData = useMemo(() => {
    return updateDangerLevel(initialGeneData, geneData);
  }, [geneData]);

  return (
    <PageWrapper>
      <Text
        sidebar={1}
        textContent={"炎症OFF"}
        containerStyle={{ marginBottom: "10rem" }}
      />

      {/* Render each gene information dynamically */}
      {updatedGeneData.map((item, index) => (
        <GeneInformationMiddle
          key={index}
          geneName={item.geneName}
          datas={item.datas}
          level={item.level}
          description={item.description}
        />
      ))}

      <GenePageNumber>{deltaPageCount+128}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene98;
