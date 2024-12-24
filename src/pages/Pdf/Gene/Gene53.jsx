import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  {
    geneName: "GPX4",
    datas: ["rs713041"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、細胞膜の脂質過酸化への抑制機能が低下する可能性があります。\nGPX4（Glutathione Peroxidase 4）は、細胞膜での脂質過酸化物を還元する特殊な抗酸化酵素をコードしています。この酵素は、脂質過酸化の制御において重要であり、細胞膜の構造と機能の維持に寄与します。",
  },
  {
    geneName: "GSTA1",
    datas: ["rs3957356", "rs3957357"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、抗酸化・解毒機能が低下し、体内の酸化ストレスが増加する可能性があります。GSTA1（Glutathione S-Transferase Alpha 1）は、グルタチオンS-トランスフェラーゼ（GST）ファミリーの一種で、肝臓で高く発現し、解毒反応に関与しています。この酵素は、グルタチオンを用いて化合物を無毒化し、水溶性を高めて排出を促進する役割を果たします。",
  },
  {
    geneName: "GSTM1",
    datas: ["rs366631"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、抗酸化・解毒機能が低下し、体内の酸化ストレスが増加する可能性があります。GSTM1（Glutathione S-Transferase Mu 1）は、グルタチオンS-トランスフェラーゼ（GST）ファミリーに属し、グルタチオンを用いて有害物質や環境毒素を無毒化する酵素です。GSTM1は、肝臓をはじめとする解毒に重要な組織で発現し、特に発がん性物質や毒素の解毒に特化しています。",
  },
  {
    geneName: "GSTM3",
    datas: ["rs7483"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、抗酸化・解毒機能が低下し、体内の酸化ストレスが増加する可能性があります。GSTM3（Glutathione S-Transferase Mu 3）は、GSTMファミリーに属し、GSTM1と同様にグルタチオンを利用して有害化合物の無毒化を行います。GSTM3は特に脳組織で発現しており、神経系の酸化ストレス防御や発がん物質の解毒に役立っています。",
  },
  
];

const Gene53 = ({deltaPageCount}) => {
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

      <GenePageNumber>{deltaPageCount+92}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene53;
