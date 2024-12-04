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
    geneName: "NAT1",
    datas: [
      "rs1474593589",
      "rs1275254501",
      "rs775745792",
      "rs1182777627",
      "rs770576147",
      "rs4986782",
    ],
    level: 0,
    description:
      "この遺伝子に変異がある場合、体内でのアミン類や薬物の代謝が不十分となる可能性があります。NAT1（N-Acetyltransferase 1）は、芳香族アミンやヒドラジン類などの化合物をアセチル化して解毒する役割を担う酵素をコードしています。この酵素は、特に薬物や環境毒素の代謝に関与し、化合物の水溶性を高めて排出を促進します。",
  },
  {
    geneName: "NAT2",
    datas: [
      "rs1208",
      "rs1799930",
      "rs1801280",
      "rs1801279",
      "rs1799931",
      "rs1041983",
      "rs1799929",
    ],
    level: 0,
    description:
      "この遺伝子に変異がある場合、体内でのアミン類や薬物の代謝が不十分となる可能性があります。\nNAT2（N-Acetyltransferase 2）は、N-アセチルトランスフェラーゼ2という酵素をコードしており、特定の薬物や環境毒素、芳香族アミンのアセチル化に関与しています。この酵素は、薬物代謝の速度に影響を与え、個人の薬物応答に関わる重要な要因です。",
  },
];

const Gene47 = ({deltaPageCount}) => {
  // Fetch gene data from Redux store
  const geneData = useSelector((state) => state.pdfData?.geneData || []);

  // Memoize the updated gene data to avoid unnecessary recalculations
  const updatedGeneData = useMemo(() => {
    return updateDangerLevel(initialGeneData, geneData);
  }, [geneData]);

  return (
    <PageWrapper>
      <Text sidebar={1} textContent={"フェーズII N-アセチルトランスフェラーゼ"} containerStyle={{ marginBottom: "10rem" }} />

      {/* Render gene information dynamically */}
      {updatedGeneData.map((item, index) => (
        <GeneInformationMiddle
          key={index}
          geneName={item.geneName}
          datas={item.datas}
          level={item.level}
          description={item.description}
        />
      ))}

      <GenePageNumber>{deltaPageCount+85}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene47;
