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
    geneName: "ALAD",
    datas: ["rs1800435"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、体内での鉛の蓄積のリスクが高まる可能性があります。ALADは、アミノレブリン酸デヒドラターゼという酵素をコードしており、ヘム合成経路の中でアミノレブリン酸（ALA）をポルフォビリノーゲンに変換する役割を果たします。この酵素は、特に肝臓や骨髄で高く発現し、酸素の運搬やエネルギー代謝に必要なヘムの生成を促進します。",
  },
  {
    geneName: "GPX1",
    datas: ["rs3448", "rs1050450"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、鉛の影響による酸化ストレスが増加する可能性があります。GPX1（Glutathione Peroxidase 1）は、抗酸化酵素であるグルタチオンペルオキシダーゼ1をコードしており、細胞内の過酸化水素や有機過酸化物をグルタチオンを用いて水やアルコールに還元する役割を果たします。",
  },
  {
    geneName: "GSTM1",
    datas: ["rs366631"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、体内での鉛の蓄積のリスクが高まる可能性があります。GSTM1（Glutathione S-Transferase Mu 1）は、グルタチオンS-トランスフェラーゼ（GST）ファミリーに属し、グルタチオンを用いて有害物質や環境毒素を無毒化する酵素です。GSTM1は、肝臓をはじめとする解毒に重要な組織で発現し、特に発がん性物質や毒素の解毒に特化しています。",
  },
  {
    geneName: "HFE",
    datas: ["rs1800562", "rs1799945"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、体内での鉛の蓄積のリスクが高まる可能性があります。HFE（Homeostatic Iron Regulator）は、鉄の取り込みと貯蔵の調整に関与するタンパク質をコードしています。このタンパク質は、トランスフェリン受容体と相互作用し、細胞への鉄の取り込みを調節することで、体内の鉄のバランスを維持します。",
  },
];

const Gene112 = () => {
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
        textContent={"鉛"}
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

      <GenePageNumber>145</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene112;
