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
    geneName: "UGT1A1",
    datas: ["rs887829", "rs34983651", "rs6742078", "rs34946978"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、ビリルビンや特定の薬物のグルクロン酸抱合が不十分となる可能性があります。UGT1A1（UDP Glucuronosyltransferase Family 1 Member A1）は、グルクロン酸転移酵素をコードしています。この酵素は、ビリルビンやホルモン、特定の薬物などにグルクロン酸を結合させ、水溶性を高めて排泄しやすくする役割を持っています。",
  },
  {
    geneName: "UGT1A3",
    datas: [
      "rs45625338",
      "rs3821242",
      "rs17868336",
      "rs28898617",
      "rs45449995",
    ],
    level: 0,
    description:
      "この遺伝子に変異がある場合、ステロイドホルモンや脂質類の代謝に必要なグルクロン酸抱合が低下する可能性があります。UGT1A3（UDP Glucuronosyltransferase Family 1 Member A3）は、ホルモンや脂質、薬物などにグルクロン酸を結合する酵素をコードしており、主に肝臓で働いています。",
  },
  {
    geneName: "UGT1A4",
    datas: ["rs2011425", "rs4124874", "rs587776764"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、薬物やホルモンの代謝に関与するグルクロン酸抱合が不十分となる可能性があります。UGT1A4（UDP Glucuronosyltransferase Family 1 Member A4）は、特にアミン類や薬物に対してグルクロン酸を結合し、水溶性を高める酵素をコードしています。",
  },
];

const Gene50 = ({deltaPageCount}) => {
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
        textContent={"フェーズII UDP-グルクロン酸転移酵素"}
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

      <GenePageNumber>{deltaPageCount+89}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene50;
