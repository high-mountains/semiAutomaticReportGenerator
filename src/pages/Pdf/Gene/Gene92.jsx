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
    geneName: "PEMT",
    datas: ["rs12325817"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、細胞膜の健康や脂質代謝に影響を与える可能性があります。PEMT（Phosphatidylethanolamine N-Methyltransferase）は、ホスファチジルエタノールアミンN-メチルトランスフェラーゼという酵素をコードしています。この酵素は、ホスファチジルエタノールアミンをホスファチジルコリンに変換する反応を触媒し、肝臓でのホスファチジルコリンの内因性合成に関わります。",
  },
  {
    geneName: "SELENOS",
    datas: ["rs34713741", "rs28665122", "rs28665122"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、抗酸化作用を持つセレンタンパク質の機能が低下する可能性があります。SELENOS（Selenoprotein S）は、セレノプロテインSをコードしており、細胞内の小胞体に存在して、タンパク質の品質管理とストレス応答に関与します。SELENOSは、異常なタンパク質の分解をサポートし、炎症反応の調節にも寄与しています。",
  },
];

const Gene92 = ({deltaPageCount}) => {
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
        textContent={"ビタミン&ミネラル"}
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

      <GenePageNumber>{deltaPageCount+131}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene92;
