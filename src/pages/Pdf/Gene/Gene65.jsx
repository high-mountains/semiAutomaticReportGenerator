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
    geneName: "CAT",
    datas: ["rs7943316"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、過酸化水素の分解が不十分となり、酸化ストレスに対する体内の防御が弱まる可能性があります。CAT（Catalase）は、カタラーゼという抗酸化酵素をコードしています。この酵素は、細胞内で過酸化水素を水と酸素に分解する反応を触媒し、酸化ストレスから細胞を保護する役割を果たします。",
  },
  {
    geneName: "CBS",
    datas: [
      "rs121964962",
      "rs121964963",
      "rs121964965",
      "rs121964967",
      "rs121964972",
      "rs375846341",
      "rs398123151",
    ],
    level: 0,
    description:
      "この遺伝子に変異がある場合、ホモシステインの代謝が影響を受け、酸化ストレスが増加する可能性があります。CBS（Cystathionine Beta-Synthase）は、シスタチオニンβ-シンターゼという酵素をコードしています。この酵素は、メチオニン代謝経路において重要な役割を果たし、ホモシステインをシスタチオニンに変換する反応を触媒します。具体的には、CBSはホモシステインとセリンを基質としてシスタチオニンを生成し、これによりホモシステインの濃度を調節し、メチオニン代謝の中間生成物を産生します。",
  },
  {
    geneName: "CTH",
    datas: ["rs1021737", "rs28941786"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、グルタチオンの合成が影響を受け、体内の酸化ストレスが増加する可能性があります。CTH（Cystathionine Gamma-Lyase）は、シスタチオニンγ-リアーゼという酵素をコードする遺伝子です。この酵素は、シスタチオニンをシステイン、アンモニア、そしてα-ケト酪酸に変換する反応を触媒します。CTHは、メチオニン代謝経路の後半に位置し、硫黄代謝やシステインの供給に重要です。システインは、グルタチオン合成における必須成分であり、抗酸化防御機構や細胞の解毒機能、酸化ストレスへの応答に寄与します。",
  },
];

const Gene65 = ({deltaPageCount}) => {
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
        textContent={"酸化/抗酸化"}
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

      <GenePageNumber>{deltaPageCount+101}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene65;
