import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  {
    geneName: "CHKA",
    datas: ["rs10791957"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、コリンの代謝や細胞膜リン脂質の合成が低下する可能性があります。\nCHKA（Choline Kinase Alpha）は、コリンキナーゼαという酵素をコードしており、コリンをホスホコリンに変換する反応を触媒します。",
  },
  {
    geneName: "ELOVL2",
    datas: ["rs953413"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、長鎖不飽和脂肪酸の合成が阻害される可能性があります。ELOVL2（Elongation of Very Long Chain Fatty Acids Protein 2）は、非常に長鎖の脂肪酸を延長する酵素をコードしています。この酵素は、脂肪酸合成経路において、特に長鎖ポリ不飽和脂肪酸（PUFA）の生成に関与し、細胞膜の構造や機能、シグナル伝達に重要です。",
  },
  {
    geneName: "PEMT",
    datas: ["rs12325817"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、肝臓の脂質代謝に影響を与える可能性があります。PEMT（Phosphatidylethanolamine N-Methyltransferase）は、ホスファチジルエタノールアミンN-メチルトランスフェラーゼという酵素をコードしています。この酵素は、ホスファチジルエタノールアミンをホスファチジルコリンに変換する反応を触媒し、肝臓でのホスファチジルコリンの内因性合成に関わります。",
  },
  {
    geneName: "SELENOS",
    datas: ["rs34713741", "rs28665122", "rs28665122"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、抗酸化作用を持つセレンタンパク質の機能が低下する可能性があります。SELENOS（Selenoprotein S）は、セレノプロテインSをコードしており、細胞内の小胞体に存在して、タンパク質の品質管理とストレス応答に関与します。SELENOSは、異常なタンパク質の分解をサポートし、炎症反応の調節にも寄与しています。",
  },
];

const Gene36 = ({deltaPageCount}) => {
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

      <GenePageNumber>{deltaPageCount+75}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene36;
