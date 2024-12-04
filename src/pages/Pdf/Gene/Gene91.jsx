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
    geneName: "MTNR1A",
    datas: ["rs12506228"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、体内時計や睡眠調節が影響を受ける可能性があります。MTNR1Aは、メラトニン受容体1Aというタンパク質をコードしており、脳の松果体で分泌されるホルモン、メラトニンに結合することで睡眠覚醒サイクルを調節します。MTNR1Aは、特に視交叉上核で発現し、昼夜のリズムや季節性の行動調整にも影響を与えます。",
  },
];

const Gene91 = ({deltaPageCount}) => {
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
        textContent={"メラトニン"}
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

      <GenePageNumber>{deltaPageCount+124}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene91;
