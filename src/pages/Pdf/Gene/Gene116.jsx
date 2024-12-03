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
    geneName: "CRHR1",
    datas: ["rs242924", "rs110402"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、トラウマ体験後のストレス反応に影響を与える可能性があります。CRHR1は、コルチコトロピン放出ホルモン受容体1をコードしており、ストレス応答における中心的な役割を果たします。この受容体は、視床下部で分泌されるコルチコトロピン放出ホルモン（CRH）と結合して、下垂体からの副腎皮質刺激ホルモン（ACTH）の分泌を促進し、ストレスホルモンであるコルチゾールの分泌を誘導します。",
  },
];

const Gene116 = () => {
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
        textContent={"トラウマ"}
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

      <GenePageNumber>149</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene116;
