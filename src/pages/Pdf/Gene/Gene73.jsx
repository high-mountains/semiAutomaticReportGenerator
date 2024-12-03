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
    geneName: "CYP1A1",
    datas: ["rs1048943", "rs1799814"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、有害化合物の代謝能力が低下する可能性があります。CYP1A1（Cytochrome P450 Family 1 Subfamily A Member 1）は、シトクロムP450ファミリーに属する酵素で、環境毒素や多環芳香族炭化水素（PAHs）などを代謝し、酸化的に分解する役割を持っています。",
  },
  {
    geneName: "CYP1A2",
    datas: ["rs72547517", "rs72547515"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、カフェインや特定の薬物の代謝が遅くなる可能性があります。CYP1A2（Cytochrome P450 Family 1 Subfamily A Member 2）は、主に肝臓で発現するシトクロムP450酵素で、カフェインや特定の薬物、環境毒素の代謝に関与しています。",
  },
  {
    geneName: "CYP1B1",
    datas: ["rs1056836", "rs1800440", "rs10012"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、内因性ホルモンの代謝が低下する可能性があります。CYP1B1（Cytochrome P450 Family 1 Subfamily B Member 1）は、ステロイドホルモンや発がん性物質を酸化的に代謝する役割を持つ酵素です。CYP1B1は、特に眼や生殖器系などで発現が多く、体内のホルモン調整や環境毒素の分解に関与します。",
  },
  {
    geneName: "CYP2A6",
    datas: ["rs1801272"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、ニコチンや特定の薬物の代謝が遅くなる可能性があります。CYP2A6（Cytochrome P450 Family 2 Subfamily A Member 6）は、肝臓で主に発現するシトクロムP450酵素で、ニコチンや特定の薬物、環境毒素の代謝に関与しています。CYP2A6は、ニコチンを代謝する主要な酵素であり、代謝の個人差が喫煙行動やニコチン依存に影響を与えることがあります。",
  },
];

const Gene73 = () => {
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
        textContent={"CYP450"}
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

      <GenePageNumber>109</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene73;
