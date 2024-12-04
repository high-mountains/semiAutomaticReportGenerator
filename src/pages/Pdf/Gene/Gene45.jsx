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
    geneName: "GPX1",
    datas: ["rs1050450"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、細胞内の過酸化物の除去能力が弱まる可能性があります。\nGPX1（Glutathione Peroxidase 1）は、抗酸化酵素であるグルタチオンペルオキシダーゼ1をコードしており、細胞内の過酸化水素や有機過酸化物をグルタチオンを用いて水やアルコールに還元する役割を果たします。",
  },
  {
    geneName: "GPX2",
    datas: ["rs4902346"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、酸化ストレスへの防御機能が減少し、腸の健康や免疫機能に影響を与える可能性があります。GPX2（Glutathione Peroxidase 2）は、腸管に多く発現するグルタチオンペルオキシダーゼ2という抗酸化酵素をコードしています。この酵素は、腸内で発生する過酸化物を還元して、酸化ストレスを軽減し、腸の上皮細胞を保護します。",
  },
  {
    geneName: "GPX3",
    datas: ["rs3828599", "rs8177412"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、全身の抗酸化防御が弱まる可能性があります。\nGPX3（Glutathione Peroxidase 3）は、グルタチオンペルオキシダーゼ3という抗酸化酵素をコードしています。GPX3は血漿中に存在し、過酸化水素や有機過酸化物を還元して無毒化することで、体全体の酸化ストレスを軽減します。",
  },
  {
    geneName: "GPX4",
    datas: ["rs713041"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、細胞膜の脂質過酸化への抑制機能が低下する可能性があります。\nGPX4（Glutathione Peroxidase 4）は、細胞膜での脂質過酸化物を還元する特殊な抗酸化酵素をコードしています。この酵素は、脂質過酸化の制御において重要であり、細胞膜の構造と機能の維持に寄与します。",
  },
];

const Gene45 = ({deltaPageCount}) => {
  // Fetch gene data from Redux store
  const geneData = useSelector((state) => state.pdfData?.geneData || []);

  // Memoize the updated gene data to avoid unnecessary recalculations
  const updatedGeneData = useMemo(() => {
    return updateDangerLevel(initialGeneData, geneData);
  }, [geneData]);

  return (
    <PageWrapper>
      <Text sidebar={1} textContent={"フェーズII グルタチオンペルオキシダーゼ"} containerStyle={{ marginBottom: "10rem" }} />

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

export default Gene45;
