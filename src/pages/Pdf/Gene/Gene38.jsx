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
      "この遺伝子に変異がある場合、BPAによって引き起こされる酸化ストレスに対する体内の防御機構が弱まる可能性があります。CAT（Catalase）は、カタラーゼという抗酸化酵素をコードしています。この酵素は、細胞内で過酸化水素を水と酸素に分解する反応を触媒し、酸化ストレスから細胞を保護する役割を果たします。",
  },
  {
    geneName: "SOD2",
    datas: ["rs4880"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、BPAによる酸化ストレスが蓄積しやすくなる可能性があります。\nSOD2（Superoxide Dismutase 2）は、スーパーオキシドジスムターゼ2をコードしており、ミトコンドリア内で活性酸素種の一つであるスーパーオキシドラジカルを過酸化水素に変換する役割を持っています。",
  },
  {
    geneName: "SULT1A1",
    datas: [
      "rs9282861", "rs1968752", "rs1042028", "rs1042157"
    ],
    level: 0,
    description:
      "この遺伝子に変異がある場合、BPAの代謝が不十分となる可能性があります。SULT1A1（Sulfotransferase Family 1A Member 1）は、フェノール性化合物やホルモン、薬物に硫酸基を転移するスルホトランスフェラーゼ酵素をコードしています。この酵素は、主に肝臓で高く発現し、化合物の水溶性を高めて体外への排出を促進する役割を担います。",
  },
];

const Gene38 = ({deltaPageCount}) => {
  // Fetch gene data from Redux store
  const geneData = useSelector((state) => state.pdfData?.geneData || []);

  // Memoize the updated gene data to avoid unnecessary recalculations
  const updatedGeneData = useMemo(() => {
    return updateDangerLevel(initialGeneData, geneData);
  }, [geneData]);

  return (
    <PageWrapper>
      <Text sidebar={1} textContent={"BPA"} containerStyle={{ marginBottom: "10rem" }} />

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

      <GenePageNumber>{deltaPageCount+76}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene38;
