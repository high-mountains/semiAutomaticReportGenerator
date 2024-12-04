import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  {
    geneName: "COQ2",
    datas: ["rs121918231", "rs121918233", "rs863223936", "rs767298430", "rs121918232"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、CoQ10の生合成が阻害され、エネルギー産生が低下する可能性があります。COQ2（Coenzyme Q2, Polyprenyltransferase）は、コエンザイムQ（ユビキノン）の生合成経路で必要な酵素をコードしています。この酵素は、ポリプレニル基をベンゾキノンに付加する役割を持ち、ミトコンドリアの電子伝達系でのATP生成に重要な役割を果たしています。",
  },
  {
    geneName: "COQ3",
    datas: ["rs6925344", "rs146934336", "rs6912105", "rs200092962", "rs9483838"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、CoQ10の生合成が阻害され、エネルギー産生が低下する可能性があります。COQ3（Coenzyme Q3, Methyltransferase）は、コエンザイムQの生合成経路に関与し、ベンゾキノン構造のメチル化を行う酵素をコードしています。このメチル化は、ユビキノンの生成に不可欠なステップです。",
  },
  {
    geneName: "COQ4",
    datas: ["rs766317663", "rs775607037", "rs758522459", "rs143441644", "rs786204771"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、CoQ10の生合成が阻害され、エネルギー産生が低下する可能性があります。COQ4（Coenzyme Q4, Structural Component）は、コエンザイムQ合成複合体の構造的安定に関与するタンパク質をコードしています。COQ4は、コエンザイムQの生合成酵素複合体を組み立てる際に重要で、生合成の効率を高めています。",
  },
];

const Gene18 = ({deltaPageCount}) => {
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

      <GenePageNumber>{deltaPageCount+57}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene18;
