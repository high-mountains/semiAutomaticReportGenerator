import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  {
    geneName: "SDHB",
    datas: [
      "rs876658461", "rs727503415", "rs587781270", "rs570278423", "rs876659329", "rs587782617", "rs876659491", 
      "rs876660368", "rs878854572", "rs397516833", "rs111430410", "rs397516835", "rs397516836", "rs74315371", 
      "rs878854575", "rs878854574", "rs786203800", "rs587782604"
    ],
    level: 0,
    description: "この遺伝子に変異がある場合、ミトコンドリア内でエネルギー産生が不十分になる可能性があります。SDHB（Succinate Dehydrogenase Complex Iron-Sulfur Subunit B）は、複合体IIの鉄-硫黄クラスターを含むサブユニットであり、電子をSDHAからユビキノンへと伝達する役割を担います。SDHBは、複合体IIの機能に必要不可欠で、TCA回路と電子伝達系の連結に寄与しています。", // Add description if needed
  },
  {
    geneName: "SDHC",
    datas: [
      "rs786203457", "rs764575966", "rs755235380", "rs1057517818", "rs587776653", "rs786202200", "rs876658301", 
      "rs786205146", "rs756676111", "rs201286421"
    ],
    level: 0,
    description: "この遺伝子に変異がある場合、ミトコンドリア内でエネルギー産生が不十分になる可能性があります。SDHC（Succinate Dehydrogenase Complex Subunit C）は、ミトコンドリア電子伝達系の複合体IIの一部で、スクシニン酸デヒドロゲナーゼの構成要素をコードしています。このサブユニットは、複合体IIに電子をユビキノンへ伝達する過程で構造的な支持を提供し、TCA回路と電子伝達系をつなぐ重要な役割を果たします。", // Add description if needed
  },
];

const Gene32 = () => {
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

      <GenePageNumber>71</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene32;
