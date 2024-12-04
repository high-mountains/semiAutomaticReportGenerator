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
    geneName: "ADORA2A",
    datas: ["rs5751876"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、カフェインの作用による覚醒効果や不安感に対する感受性に影響を与える可能性があります。ADORA2Aは、アデノシンA2A受容体というタンパク質をコードしており、神経系においてアデノシンと結合することで細胞内シグナルを伝達します。この受容体は、特に脳の神経細胞で発現が高く、ドーパミンシステムや神経伝達の調整に関与しています。",
  },
  {
    geneName: "CYP1A2",
    datas: ["rs72547517", "rs72547515"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、体内でのカフェインの分解が遅くなる可能性があります。CYP1A2（Cytochrome P450 Family 1 Subfamily A Member 2）は、主に肝臓で発現するシトクロムP450酵素で、カフェインや特定の薬物、環境毒素の代謝に関与しています。CYP1A2は、化合物を酸化し水溶性を高めて排出を促進する解毒機能を持ちます。",
  },
];

const Gene87 = ({deltaPageCount}) => {
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
        textContent={"カフェイン"}
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

      <GenePageNumber>{deltaPageCount+120}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene87;
