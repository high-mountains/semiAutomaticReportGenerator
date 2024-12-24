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
    geneName: "UCP2",
    datas: ["rs659366", "rs660339"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、エネルギー消費が減少しやすくなり、体重増加やBMIの上昇に影響を与える可能性があります。UCP2は、ミトコンドリア内膜に存在するタンパク質で、プロトンの流入を調整することでATP合成からのエネルギーを熱として放出します。このプロセスは、細胞の酸化ストレスを軽減し、エネルギー代謝や脂肪酸の酸化に影響を与えます。",
  },
];

const Gene115 = ({deltaPageCount}) => {
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
        textContent={"BMI"}
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

      <GenePageNumber>{deltaPageCount+154}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene115;
