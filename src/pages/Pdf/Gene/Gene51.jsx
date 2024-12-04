import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  {
    geneName: "UGT1A6",
    datas: ["rs1105879", "rs1105880", "rs17863783"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、フェノール類や他の有害化学物質のグルクロン酸抱合が低下する可能性があります。UGT1A6（UDP Glucuronosyltransferase Family 1 Member A6）は、フェノール性化合物や環境毒素に対してグルクロン酸を転移し、解毒や排泄を助ける酵素をコードしています。",
  },
  {
    geneName: "UGT1A7",
    datas: ["rs11692021"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、特定の発がん性物質や化学物質の代謝が影響を受け、グルクロン酸抱合が低下する可能性があります。UGT1A7（UDP Glucuronosyltransferase Family 1 Member A7）は、芳香族および多環性化合物にグルクロン酸を結合し、水溶性を高める役割を持つ酵素をコードしています。",
  },
];

const Gene51 = ({deltaPageCount}) => {
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

      <GenePageNumber>{deltaPageCount+89}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene51;
