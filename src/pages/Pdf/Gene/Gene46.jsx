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
    geneName: "GSTA1",
    datas: ["rs3957356", "rs3957357"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、体内の有害物質や酸化ストレスによる有害化合物の解毒能力が減少する可能性があります。GSTA1（Glutathione S-Transferase Alpha 1）は、グルタチオンS-トランスフェラーゼ（GST）ファミリーの一種で、肝臓で高く発現し、解毒反応に関与しています。この酵素は、グルタチオンを用いて化合物を無毒化し、水溶性を高めて排出を促進する役割を果たします。",
  },
  {
    geneName: "GSTM1",
    datas: ["rs366631"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、特定の環境毒素や薬物の解毒が不十分となる可能性があります。\nGSTM1（Glutathione S-Transferase Mu 1）は、グルタチオンS-トランスフェラーゼ（GST）ファミリーに属し、グルタチオンを用いて有害物質や環境毒素を無毒化する酵素です。GSTM1は、肝臓をはじめとする解毒に重要な組織で発現し、特に発がん性物質や毒素の解毒に特化しています。",
  },
  {
    geneName: "GSTP1",
    datas: ["rs1695"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、細胞内での有害物質の代謝と解毒が不十分となる可能性があります。GSTP1（Glutathione S-Transferase Pi 1）は、主に腫瘍抑制と酸化ストレス防御に関与するGSTファミリーの酵素です。この酵素は、グルタチオンと結合して有害物質を解毒し、細胞を酸化ストレスや発がん性物質から保護します。",
  },
];

const Gene46 = ({deltaPageCount}) => {
  // Fetch gene data from Redux store
  const geneData = useSelector((state) => state.pdfData?.geneData || []);

  // Memoize the updated gene data to avoid unnecessary recalculations
  const updatedGeneData = useMemo(() => {
    return updateDangerLevel(initialGeneData, geneData);
  }, [geneData]);

  return (
    <PageWrapper>
      <Text sidebar={1} textContent={"フェーズII グルタチオントランスフェラーゼ"} containerStyle={{ marginBottom: "10rem" }} />

      {/* Render gene information dynamically */}
      {updatedGeneData.map((item, index) => (
        <GeneInformationMiddle
          key={index}
          geneName={item.geneName}
          datas={item.datas}
          level={item.level}
          description={item.description}
        />
      ))}

      <GenePageNumber>{deltaPageCount+85}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene46;
