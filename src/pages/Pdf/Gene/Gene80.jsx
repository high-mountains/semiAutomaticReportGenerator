import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  {
    geneName: "ZO-2(TJP2)",
    datas: ["rs121918299", "rs587777521", "rs746830415"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、腸壁の透過性が増加する可能性があります。ZO-2（Tight Junction Protein 2）は、タイトジャンクションと呼ばれる細胞間接着構造において重要なタンパク質で、腸や血管などの組織でバリア機能を維持します。TJP2は、細胞間の密着性を高め、分子が細胞間を通過しないようにすることで、組織の選択的透過性を調節します。",
  },
];

const Gene80 = ({deltaPageCount}) => {
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

      <GenePageNumber>{deltaPageCount+119}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene80;
