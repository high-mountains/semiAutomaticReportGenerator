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
    geneName: "ADH1B",
    datas: ["rs1229984", "rs2066702"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、アルコールの代謝が影響を受ける可能性があります。ADH1B（Alcohol Dehydrogenase 1B）は、アルコールデヒドロゲナーゼ1Bという酵素をコードしています。この酵素は、エタノールをアセトアルデヒドに酸化する反応を触媒し、アルコール代謝の初期段階で活性を持ちます。",
  },
  {
    geneName: "ADH1C",
    datas: ["rs698"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、アルコールの代謝が影響を受ける可能性があります。ADH1Cは、アルコールデヒドロゲナーゼの一種で、ADH1Bと共にエタノールをアセトアルデヒドに酸化する役割を果たします。ADH1Cの活性も遺伝的多型によって異なり、アルコール代謝の速度や耐性に影響を与えます。ADH1Cは、アルコール代謝やその分解過程においてADH1Bと協調して働き、解毒プロセスを促進します。",
  },
  {
    geneName: "ALDH2",
    datas: ["rs671"],
    level: 0,
    description:
      "こ の 遺 伝 子 に 変 異 が あ る 場 合、ア ル コ ー ル の 代謝が影響を受ける可能性があります。ALDH2（Aldehyde Dehydrogenase2）は、アルデヒドデヒドロゲナーゼ2という酵素をコードしています。この酵素は、主に肝臓で活性を持ち、エタノール代謝においてアセトアルデヒドを酢酸に変換する役割を果たします。ALDH2は、アセトアルデヒドの解毒に重要で、これによりアルコール摂取後の身体反応に影響を与えます。",
  },
];

const Gene85 = ({deltaPageCount}) => {
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
        textContent={"アルコール"}
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

      <GenePageNumber>{deltaPageCount+124}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene85;
