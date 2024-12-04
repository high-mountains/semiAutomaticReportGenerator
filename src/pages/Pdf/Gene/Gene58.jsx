import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  {
    geneName: "G6PD",
    datas: [
      "rs782322505",
      "rs137852315",
      "rs137852318",
      "rs137852319",
      "rs137852321",
      "rs137852323",
      "rs137852324",
    ],
    level: 0,
    description:
      "この遺伝子に変異がある場合、ミトコンドリア内での抗酸化防御機構が弱まる可能性があります。G6PD（Glucose-6-Phosphate Dehydrogenase）は、グルコース-6-リン酸デヒドロゲナーゼという酵素をコードしています。この酵素は、ペントースリン酸経路における重要な酵素で、グルコース-6-リン酸を酸化し、NADPHを生成します。",
  },
  {
    geneName: "GSR",
    datas: ["rs3779647"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、酸化型グルタチオンの還元が不十分となり、酸化ストレスに対する防御機能が弱まる可能性があります。GSR（Glutathione Reductase）は、グルタチオン還元酵素をコードしており、酸化型グルタチオン（GSSG）を還元型グルタチオン（GSH）に再生する役割を持っています。この酵素は、NADPHを利用してグルタチオンの還元を行い、細胞の抗酸化防御を維持します。",
  },
  {
    geneName: "SOD1",
    datas: [
      "rs121912442",
      "rs121912443",
      "rs121912441",
      "rs121912445",
      "rs4998557",
    ],
    level: 0,
    description:
      "この遺伝子に変異がある場合、抗酸化・解毒機能が低下し、体内の酸化ストレスが増加する可能性があります。SOD1（Superoxide Dismutase 1）は、スーパーオキシドラジカルを過酸化水素に変換する抗酸化酵素で、主に細胞質で働きます。SOD1は、活性酸素種の除去を通じて酸化ストレスから細胞を保護し、細胞の健康維持において重要な役割を果たしています。",
  },
];

const Gene58 = ({deltaPageCount}) => {
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

      <GenePageNumber>{deltaPageCount+94}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene58;
