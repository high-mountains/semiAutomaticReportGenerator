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
    geneName: "GSTM1",
    datas: ["rs366631"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、マイコトキシンへの解毒能力が不十分となる可能性があります。\nGSTM1（Glutathione S-Transferase Mu 1）は、グルタチオンS-トランスフェラーゼ（GST）ファミリーに属し、グルタチオンを用いて有害物質や環境毒素を無毒化する酵素です。GSTM1は、肝臓をはじめとする解毒に重要な組織で発現し、特に発がん性物質や毒素の解毒に特化しています。",
  },
  {
    geneName: "GSTP1",
    datas: ["rs1695"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、マイコトキシンの代謝と解毒能力が不十分となる可能性があります。\nGSTP1（Glutathione S-Transferase Pi 1）は、主に腫瘍抑制と酸化ストレス防御に関与するGSTファミリーの酵素です。この酵素は、グルタチオンと結合して有害物質を解毒し、細胞を酸化ストレスや発がん性物質から保護します。",
  },
  {
    geneName: "SLCO1B1",
    datas: ["rs4149056"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、マイコトキシンへの解毒能力が不十分となる可能性があります。\nSLCO1B1（Solute Carrier Organic Anion Transporter Family Member 1B1）は、肝細胞で発現する有機アニオントランスポーターをコードしており、特定の薬物や内因性化合物（胆汁酸やビリルビンなど）を肝臓に取り込む役割を果たします。SLCO1B1は、薬物の血中濃度や効果に影響を与え、特にスタチン系薬物の代謝に重要です。",
  },
  {
    geneName: "XPC",
    datas: ["rs2228001"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、マイコトキシンへの解毒能力が不十分となる可能性があります。\nXPC（Xeroderma Pigmentosum Complementation Group C）は、DNA修復タンパク質をコードしており、特に紫外線や環境要因によって引き起こされたDNA損傷の修復に関与します。XPCは、損傷したDNA領域を認識し、修復機構であるヌクレオチド除去修復（NER）経路を開始するために重要な役割を果たしています。",
  },
];

const Gene44 = ({deltaPageCount}) => {
  // Fetch gene data from Redux store
  const geneData = useSelector((state) => state.pdfData?.geneData || []);

  // Memoize the updated gene data to avoid unnecessary recalculations
  const updatedGeneData = useMemo(() => {
    return updateDangerLevel(initialGeneData, geneData);
  }, [geneData]);

  return (
    <PageWrapper>
      <Text sidebar={1} textContent={"マイコトキシン"} containerStyle={{ marginBottom: "10rem" }} />

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

      <GenePageNumber>{deltaPageCount+83}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene44;
