import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  {
    geneName: "IL6",
    datas: ["rs1800795", "rs1800796", "rs1800797"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、免疫細胞の炎症反応が影響を受ける可能性があります。IL6は、感染や組織損傷に応じてマクロファージやT細胞、その他の免疫細胞によって分泌される炎症性サイトカインで、急性期反応や慢性炎症の調整に重要な役割を果たします。IL6は、免疫細胞の活性化や抗体の産生を促進することで、体内の防御反応を強化します。",
  },
  {
    geneName: "IL6R",
    datas: ["rs4129267"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、免疫細胞の炎症反応が影響を受ける可能性があります。IL6Rは、IL6受容体をコードしており、細胞表面に存在してIL6と結合することで細胞内シグナル伝達を開始します。IL6Rは、特に免疫細胞や肝細胞で発現が高く、炎症応答や急性期タンパク質の生成に関わります。",
  },
  {
    geneName: "IL10",
    datas: ["rs1800871", "rs1800896", "rs3024505"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、免疫細胞の炎症反応が影響を受ける可能性があります。IL10（Interleukin 10）は、抗炎症性のサイトカインで、免疫応答の調節に重要な役割を果たします。この分子は、マクロファージやT細胞などの免疫細胞から分泌され、炎症性サイトカインの産生を抑制することで免疫系の過剰な活性化を防ぎます。",
  },
  {
    geneName: "IL13",
    datas: ["rs1800925", "rs1295686", "rs20541"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、免疫細胞の炎症反応が影響を受ける可能性があります。IL13は、主にヘルパーT細胞（Th2）によって分泌されるサイトカインで、B細胞の分化と抗体産生を促進します。また、IL13は、気道や消化管での粘液産生を増加させることでアレルギー反応に関与し、寄生虫感染に対する免疫応答にも寄与します。",
  },
];

const Gene95 = () => {
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

      <GenePageNumber>126</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene95;
