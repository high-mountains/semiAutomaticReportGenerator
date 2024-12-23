import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  {
    geneName: "NOX1",
    datas: [
      "rs4827881", "rs5921682"
    ],
    level: 0,
    description:
      "この遺伝子に変異がある場合、抗酸化・解毒機能が低下し、体内の酸化ストレスが増加する可能性があります。NOX1（NADPH Oxidase 1）は、NADPHオキシダーゼファミリーの一員であり、活性酸素種（ROS）であるスーパーオキシドラジカルを生成します。NOX1は、主に免疫細胞や血管平滑筋細胞で発現し、細胞シグナル伝達や免疫応答、血管の健康維持に寄与しています。",
  },
  {
    geneName: "SOD1",
    datas: [
      "rs121912442", "rs121912443", "rs121912441", "rs121912445", "rs4998557"
    ],
    level: 0,
    description:
      "この遺伝子に変異がある場合、抗酸化・解毒機能が低下し、体内の酸化ストレスが増加する可能性があります。SOD1（Superoxide Dismutase 1）は、スーパーオキシドラジカルを過酸化水素に変換する抗酸化酵素で、主に細胞質で働きます。SOD1は、活性酸素種の除去を通じて酸化ストレスから細胞を保護し、細胞の健康維持において重要な役割を果たしています。",
  },
  {
    geneName: "SOD2",
    datas: ["rs5746136", "rs4880"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、抗酸化・解毒機能が低下し、体内の酸化ストレスが増加する可能性があります。SOD2（Superoxide Dismutase 2）は、スーパーオキシドジスムターゼ2をコードしており、ミトコンドリア内で活性酸素種の一つであるスーパーオキシドラジカルを過酸化水素に変換する役割を持っています。",
  },
  {
    geneName: "SOD3",
    datas: ["rs2855262", "rs1799895"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、抗酸化・解毒機能が低下し、体内の酸化ストレスが増加する可能性があります。SOD3（Superoxide Dismutase 3）は、細胞外で働く抗酸化酵素で、スーパーオキシドラジカルを過酸化水素に変換して酸化ストレスを軽減します。SOD3は血管、肺、皮膚などで高く発現し、外部環境からの酸化ダメージから組織を保護する役割を果たしています。",
  },
];

const Gene59 = ({deltaPageCount}) => {
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

      <GenePageNumber>{deltaPageCount+98}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene59;
