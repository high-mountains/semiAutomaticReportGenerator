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
    geneName: "MTRR",
    datas: ["rs1801394"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、ホモシステイン代謝やメチオニンサイクルに影響を与える可能性があります。MTRR（Methionine Synthase Reductase）は、メチオニンシンターゼの活性を維持するための補助酵素で、MTRが反応を繰り返し行えるように再活性化する役割を持っています。MTRRは、ビタミンB12を必要とする反応を介してMTRの活性状態を維持し、ホモシステインの再メチル化とメチル供給において重要です。",
  },
  {
    geneName: "TCN2",
    datas: ["rs1801198", "rs1461973241", "rs9606756"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、ビタミンB12の吸収や利用効率が低下する可能性があります。\nTCN2（Transcobalamin 2）は、コバラミンを細胞に供給するための運搬タンパク質で、ビタミンB12と結合し、細胞内への取り込みを助けます。TCN2は、ビタミンB12を体内の各組織に供給し、メチル化反応や赤血球形成を支えています。",
  },
];

const Gene70 = ({deltaPageCount}) => {
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
        textContent={"ビタミンB12"}
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

      <GenePageNumber>{deltaPageCount+106}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene70;
