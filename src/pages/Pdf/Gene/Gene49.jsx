import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  {
    geneName: "SULT1E1",
    datas: ["rs3736599"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、エストロゲンの代謝が低下し、ホルモンバランスが乱れる可能性があります。SULT1E1（Sulfotransferase Family 1E Member 1）は、エストロゲンに硫酸基を転移するスルホトランスフェラーゼ酵素をコードしており、特にエストロゲンの代謝と不活性化に関与しています。この酵素は、エストロゲンの生物活性を調整し、体内のホルモンバランスを維持するために重要です。",
  },
  {
    geneName: "SULT2B1",
    datas: ["rs1303127476", "rs1114167425"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、コレステロールやステロイドの代謝への代謝機能が低下する可能性があります。SULT2B1（Sulfotransferase Family 2B Member 1）は、コレステロールおよびデヒドロエピアンドロステロン（DHEA）に対して硫酸基を転移する酵素をコードしています。この酵素には、2つのアイソフォーム（SULT2B1aとSULT2B1b）が存在し、異なる組織で役割を果たしています。",
  },
];

const Gene49 = ({deltaPageCount}) => {
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

      <GenePageNumber>{deltaPageCount+87}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene49;
