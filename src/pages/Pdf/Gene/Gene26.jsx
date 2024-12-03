import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  {
    geneName: "NDUFS2",
    datas: ["rs150667550"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、ATP合成効率が低下し、細胞のエネルギー供給が不足する可能性があります。NDUFS2（NADH Oxidoreductase Core Subunit S2）は、複合体Iのもう一つの主要サブユニットで、電子伝達とプロトンポンプ活動に関わっています。NDUFS2は、複合体Iの構造安定性を高め、ミトコンドリア内でのエネルギー生成の効率をサポートします。",
  },
  {
    geneName: "NDUFS3",
    datas: ["rs863224106", "rs863224107", "rs28939714", "rs104894270"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、ATP合成効率が低下し、細胞のエネルギー供給が不足する可能性があります。NDUFS3（NADH Oxidoreductase Core Subunit S3）は、複合体Iのコアサブユニットの一つであり、電子伝達の過程で中心的な役割を果たしています。NDUFS3は、プロトン勾配の形成を補助し、細胞のATP生成に重要です。",
  },
  {
    geneName: "NDUFS4",
    datas: ["rs104893898", "rs104893899", "rs121908985", "rs587776949"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、ATP合成効率が低下し、細胞のエネルギー供給が不足する可能性があります。NDUFS4（NADH Oxidoreductase Subunit S4）は、複合体Iの補助サブユニットで、プロトンポンプと電子伝達機能の調節に関わります。NDUFS4は、複合体Iの活性維持に寄与し、ミトコンドリアのエネルギー産生を支援しています。",
  },
  {
    geneName: "NDUFS6",
    datas: ["rs267606913", "rs863224110", "rs863224111"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、ATP合成効率が低下し、細胞のエネルギー供給が不足する可能性があります。NDUFS6（NADH Oxidoreductase Subunit S6）は、ミトコンドリア電子伝達系の複合体Iの補助サブユニットで、電子伝達とプロトン移動の機能をサポートしています。NDUFS6は、複合体Iの構造を安定させ、ATP合成のためのプロトン勾配形成に寄与しています。",
  },
];

const Gene26 = () => {
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

      <GenePageNumber>65</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene26;
