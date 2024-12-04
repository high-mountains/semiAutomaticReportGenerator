import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  {
    geneName: "CYP2D6",
    datas: ["rs28371737"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、抗うつ薬や抗精神病薬、鎮痛薬などの代謝が影響を受ける可能性があります。CYP2D6（Cytochrome P450 Family 2 Subfamily D Member 6）は、抗うつ薬、抗精神病薬、β遮断薬など多くの薬物の代謝を担うシトクロムP450酵素です。CYP2D6は主に肝臓で発現しており、化合物の酸化と解毒を行います。",
  },
  {
    geneName: "CYP2E1",
    datas: ["rs2070676", "rs6413419"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、アルコールの代謝が低下する可能性があります。CYP2E1（Cytochrome P450 Family 2 Subfamily E Member 1）は、主に肝臓で発現し、アルコールや特定の有害物質、環境毒素の代謝に関与するシトクロムP450酵素です。CYP2E1は、エタノールの代謝や、脂肪酸の酸化にも関わり、化合物を酸化して解毒や排泄を助けます。",
  },
  {
    geneName: "CYP2R1",
    datas: ["rs1422405747", "rs202011621", "rs61495246"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、ビタミンDの活性化が不十分となる可能性があります。CYP2R1（Cytochrome P450 Family 2 Subfamily R Member 1）は、ビタミンD3を25-ヒドロキシビタミンD3に変換する酵素をコードしています。この変換は、ビタミンDが活性型に変換され、カルシウム代謝や骨の健康維持に利用されるために重要なステップです。",
  },
];

const Gene75 = ({deltaPageCount}) => {
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

      <GenePageNumber>{deltaPageCount+111}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene75;
