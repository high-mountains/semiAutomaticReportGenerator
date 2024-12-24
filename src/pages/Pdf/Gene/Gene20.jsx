import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  {
    geneName: "COQ8B",
    datas: [
      "rs398122983", "rs398122981", "rs28493229", "rs398122978", "rs398122979",
      "rs398122980", "rs398122982"
    ],
    level: 0,
    description:
      "この遺伝子に変異がある場合、CoQ10の生合成が阻害され、エネルギー産生が低下する可能性があります。COQ8B（Coenzyme Q8B, ATPase）は、コエンザイムQの生合成に関与するATPase活性を持つタンパク質をコードしています。このタンパク質は、コエンザイムQの生合成複合体の安定性と機能の調整に関与しており、ミトコンドリアでの電子伝達とエネルギー産生の効率に寄与しています。",
  },
  {
    geneName: "COQ9",
    datas: ["rs786205897", "rs267606751"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、CoQ10の生合成が阻害され、エネルギー産生が低下する可能性があります。COQ9（Coenzyme Q9）は、コエンザイムQの生合成複合体で補助的な役割を果たすタンパク質をコードしています。COQ9は、コエンザイムQの構造や安定性に関わり、電子伝達系でのユビキノンの適切な供給を支援します。",
  },
  {
    geneName: "COQ10A",
    datas: ["rs199765776"],
    level: 0,
  },
  {
    geneName: "COQ10B",
    datas: ["rs3731570"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、CoQ10の生合成が阻害され、エネルギー産生が低下する可能性があります。COQ10AおよびCOQ10B（Coenzyme Q10 Homolog A/B）は、コエンザイムQのホモログとして働くタンパク質をコードしています。これらは、コエンザイムQの生合成や安定性をサポートする役割を果たし、特にミトコンドリアの電子伝達系におけるユビキノンの供給に重要です。COQ10AとCOQ10Bの機能は類似しており、コエンザイムQの適切な濃度を維持することで細胞のエネルギー産生を助けています。",
  },
];

const Gene20 = ({deltaPageCount}) => {
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

      <GenePageNumber>{deltaPageCount+59}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene20;
