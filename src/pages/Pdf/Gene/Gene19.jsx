import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  {
    geneName: "COQ6",
    datas: ["rs397514479", "rs753489572"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、CoQ10の生合成が阻害され、エネルギー産生が低下する可能性があります。COQ6（Coenzyme Q6, Monooxygenase）は、コエンザイムQの生合成に必要な一連の酸化反応を担うモノオキシゲナーゼ酵素をコードしています。COQ6は、特に芳香族環の水酸化を触媒し、ユビキノン生成の途中段階に重要です。",
  },
  {
    geneName: "COQ7",
    datas: ["rs864321686"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、CoQ10の生合成が阻害され、エネルギー産生が低下する可能性があります。COQ7（Coenzyme Q7, Hydroxylase）は、コエンザイムQの生合成経路で芳香族環の水酸化反応を行う酵素をコードしています。COQ7は、コエンザイムQの完全な構造の形成に不可欠で、ミトコンドリア機能の維持に重要です。",
  },
  {
    geneName: "COQ8A",
    datas: [
      "rs863223884", "rs863223887", "rs387906299", "rs387906298", "rs119468005",
      "rs119468008", "rs748118737", "rs755933881", "rs201908721", "rs199874519",
      "rs578189699", "rs119468004", "rs771578775", "rs119468009", "rs119468006", "rs886042265"
    ],
    level: 0,
    description:
      "この遺伝子に変異がある場合、CoQ10の生合成が阻害され、エネルギー産生が低下する可能性があります。COQ8A（Coenzyme Q8A, ATPase）およびCOQ8B（Coenzyme Q8B, ATPase）は、ATPase活性を持ち、コエンザイムQの生合成複合体の安定性や活性調整に関わるタンパク質をコードしています。これらのタンパク質は、コエンザイムQの生合成経路を支援する役割を果たします。",
  },
];

const Gene19 = ({deltaPageCount}) => {
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

      <GenePageNumber>{deltaPageCount+58}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene19;
