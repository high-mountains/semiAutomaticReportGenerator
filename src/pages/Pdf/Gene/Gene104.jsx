import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  {
    geneName: "DRD1",
    datas: ["rs5326"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、認知機能や行動調節に影響を与える可能性があります。DRD1（Dopamine Receptor D1）は、ドーパミンD1受容体をコードしています。この受容体は、中枢神経系におけるGタンパク質共役型受容体の一種で、ドーパミンが結合するとアデニル酸シクラーゼを活性化し、細胞内のcAMP（サイクリックAMP）濃度を増加させます。",
  },
  {
    geneName: "DRD2",
    datas: ["rs1076560", "rs6277", "rs1800497"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、報酬系の反応や動機づけ、制御機能に影響を与える可能性があります。DRD2（Dopamine Receptor D2）は、ドーパミンD2受容体をコードしており、ドーパミンが結合するとアデニル酸シクラーゼを抑制するGタンパク質共役型受容体です。DRD2は、神経伝達物質の放出や運動調節、報酬系において重要な役割を果たし、行動の調節や意思決定にも関与しています。",
  },
  {
    geneName: "DRD4",
    datas: ["rs4331145", "rs1800955"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、注意力や行動の抑制に影響を与える可能性があります。DRD4（Dopamine Receptor D4）は、ドーパミンD4受容体をコードしており、DRD2と同様にアデニル酸シクラーゼを抑制するGタンパク質共役型受容体です。DRD4は、特に前頭前皮質に高発現しており、認知機能や感情の調節、注意の制御に関連しています。",
  },
  {
    geneName: "GAD1",
    datas: ["rs769390", "rs2241165"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、グルタミン酸からGABAへの変換が阻害される可能性があります。GAD1（Glutamate Decarboxylase 1）は、グルタミン酸脱炭酸酵素（GAD67）をコードしています。この酵素は、グルタミン酸を脱炭酸してGABA（γ-アミノ酪酸）を生成する役割を担います。",
  },
];

const Gene104 = ({deltaPageCount}) => {
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

      <GenePageNumber>{deltaPageCount+134}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene104;
