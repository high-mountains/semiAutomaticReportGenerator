import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  {
    geneName: "UGT1A1",
    datas: ["rs34983651", "rs6742078", "rs34946978"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、BPAの代謝と排泄が不十分となる可能性があります。UGT1A1（UDP Glucuronosyltransferase Family 1 Member A1）は、グルクロン酸転移酵素をコードしています。この酵素は、ビリルビンやホルモン、特定の薬物などにグルクロン酸を結合させ、水溶性を高めて排泄しやすくする役割を持っています。",
  },
  {
    geneName: "UGT2B15",
    datas: ["rs1902023"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、BPAの代謝と排泄が不十分となる可能性があります。UGT2B15（UDP Glucuronosyltransferase Family 2 Member B15）は、グルクロン酸転移酵素の一種で、ステロイドホルモンや脂質、薬物などの代謝に関与します。この酵素もグルクロン酸を結合させて、代謝物の水溶性を高め、体外への排出を促進します。",
  },
  {
    geneName: "COX2",
    datas: ["rs1131341", "rs1800566"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、BPAによる炎症反応が増加しやすくなる可能性があります。COX2（Cyclooxygenase 2）は、シクロオキシゲナーゼ2という酵素をコードしており、プロスタグランジンの合成に関与します。この酵素は、炎症や痛みの反応があるときに誘導され、プロスタグランジンの生成を通じて炎症応答を調節します。",
  },
];

const Gene39 = ({deltaPageCount}) => {
  // Fetch gene data from Redux store
  const geneData = useSelector((state) => state.pdfData?.geneData || []);

  // Memoize the updated gene data to avoid unnecessary recalculations
  const updatedGeneData = useMemo(() => {
    return updateDangerLevel(initialGeneData, geneData);
  }, [geneData]);

  return (
    <PageWrapper>
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

      <GenePageNumber>{deltaPageCount+77}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene39;
