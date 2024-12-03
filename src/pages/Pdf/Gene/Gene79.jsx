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
    geneName: "IL10",
    datas: ["rs1800871", "rs1800896", "rs3024505"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、免疫系が過剰に反応しやすくなり、腸内バリアの透過性が増加する可能性があります。IL10（Interleukin 10）は、抗炎症性のサイトカインで、免疫応答の調節に重要な役割を果たします。この分子は、マクロファージやT細胞などの免疫細胞から分泌され、炎症性サイトカインの産生を抑制することで免疫系の過剰な活性化を防ぎます。",
  },
  {
    geneName: "ZO-2(TJP2)",
    datas: ["rs121918299", "rs587777521", "rs746830415"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、腸壁の透過性が増加する可能性があります。ZO-2（Tight Junction Protein 2）は、タイトジャンクションと呼ばれる細胞間接着構造において重要なタンパク質で、腸や血管などの組織でバリア機能を維持します。TJP2は、細胞間の密着性を高め、分子が細胞間を通過しないようにすることで、組織の選択的透過性を調節します。",
  },
];

const Gene79 = () => {
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
        textContent={"Leaky"}
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

      <GenePageNumber>115</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene79;
