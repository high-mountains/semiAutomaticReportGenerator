import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  {
    geneName: "TRAF1",
    datas: ["rs3761847"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、炎症シグナル伝達の調整が不十分となる可能性があります。TRAF1は、TNF受容体関連因子であり、TNFシグナル伝達の調節を行うタンパク質です。TRAF1は、主に細胞の生存や炎症反応のシグナル伝達に関わり、細胞がストレスや免疫刺激に応答する際に必要な役割を果たします。",
  },
];

const Gene97 = ({deltaPageCount}) => {
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

      <GenePageNumber>{deltaPageCount+130}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene97;
