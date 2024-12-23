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
      "この遺伝子に変異がある場合、体内でのグリホサートや他の環境毒素の代謝が影響を受ける可能性があります。CYP1A1（Cytochrome P450 Family 1 Subfamily A Member 1）は、シトクロムP450ファミリーに属する酵素で、環境毒素や多環芳香族炭化水素（PAHs）などを代謝し、酸化的に分解する役割を持っています。CYP1A1は主に肺や小腸で発現し、体外から取り込まれる有害物質の解毒や代謝において重要です。",
  },
];

const Gene88 = ({deltaPageCount}) => {
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
        textContent={"グリホサート"}
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

      <GenePageNumber>{deltaPageCount+121}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene88;
