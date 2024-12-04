import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  {
    geneName: "NDUFB11",
    datas: ["rs786205225", "rs1057519073", "rs876657384"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、ATP合成効率が低下し、細胞のエネルギー供給が不足する可能性があります。NDUFB11（NADH Oxidoreductase Subunit B11）は、複合体Iの一部で、主に電子伝達を補助する役割を果たしています。このサブユニットは、複合体Iの構造的安定に寄与し、プロトン勾配の形成とミトコンドリアでのATP合成の効率向上に貢献しています。",
  },
  {
    geneName: "NDUFS1",
    datas: [
      "rs863224103", "rs372691318", "rs786205666", "rs863224100", "rs149271416", "rs397515447",
      "rs199422225", "rs199422224", "rs397515383", "rs863224099", "rs151279101", "rs387907199",
      "rs863224097", "rs370009373", "rs767122069", "rs201034481", "rs370411488"
    ],
    level: 0,
    description:
      "この遺伝子に変異がある場合、ATP合成効率が低下し、細胞のエネルギー供給が不足する可能性があります。NDUFS1（NADH Oxidoreductase Core Subunit S1）は、ミトコンドリア電子伝達系複合体Iのコアサブユニットの一つであり、NADHからユビキノンへの電子伝達に重要な役割を果たします。NDUFS1は、複合体I内での電子移動とプロトンポンプ機能を支え、ATP合成に必要なプロトン勾配の維持に貢献します。",
  },
];

const Gene25 = ({deltaPageCount}) => {
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

      <GenePageNumber>{deltaPageCount+64}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene25;
