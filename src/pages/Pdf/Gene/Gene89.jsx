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
    geneName: "GLRX",
    datas: [
      "rs3756705",
      "rs146662850",
      "rs4561",
      "rs11135434",
      "rs3777209",
      "rs9314160",
      "rs1047420",
    ],
    level: 0,
    description:
      "この遺伝子に変異がある場合、細胞内のグルタチオンのリサイクルと除去が不十分となる可能性があります。GLRXは、グルタレドキシンというタンパク質をコードしており、酸化還元反応に関わって細胞内の抗酸化防御をサポートします。特に、グルタチオンを介してタンパク質のチオール基の還元を行い、酸化ストレスから細胞を保護します。",
  },
];

const Gene89 = () => {
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
        textContent={"グルタチオン除去"}
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

      <GenePageNumber>122</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene89;
