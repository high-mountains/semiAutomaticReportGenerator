import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  {
    geneName: "ACAT2",
    datas: [
      "rs41258114", "rs3465", "rs25683", "rs146437481", "rs202015012", "rs192445956"
    ],
    level: 0,
    description:
      "この遺伝子に変異がある場合、脂肪酸やコレステロールの代謝が阻害される可能性があります。ACAT2（Acetyl-CoA Acetyltransferase 2）は、アセチル-CoAアセチルトランスフェラーゼ2をコードしており、主に肝臓でコレステロールエステルの合成に関与しています。この酵素は、アセチル-CoAと脂肪酸を基質にしてコレステロールエステルを生成し、コレステロールの輸送や貯蔵において重要な役割を果たします。",
  },
  {
    geneName: "BCMO1",
    datas: ["rs7501331", "rs12934922", "rs11645428"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、体内でのβ-カロテンからビタミンAへの変換が低下する可能性があります。BCMO1（Beta-Carotene Monooxygenase 1）は、β-カロテン05,15'-モノオキシゲナーゼという酵素をコードしており、β-カロテンをビタミンA（レチナール）に変換する役割を担います。",
  },
  {
    geneName: "ELOVL2",
    datas: ["rs953413"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、長鎖不飽和脂肪酸の合成が阻害される可能性があります。ELOVL2（Elongation of Very Long Chain Fatty Acids Protein 2）は、非常に長鎖の脂肪酸を延長する酵素をコードしています。この酵素は、脂肪酸合成経路において、特に長鎖ポリ不飽和脂肪酸（PUFA）の生成に関与し、細胞膜の構造や機能、シグナル伝達に重要です。",
  },
  {
    geneName: "SELENOS",
    datas: ["rs28665122", "rs28665122"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、抗酸化作用を持つセレンタンパク質の機能が低下する可能性があります。SELENOS（Selenoprotein S）は、セレノプロテインSをコードしており、細胞内の小胞体に存在して、タンパク質の品質管理とストレス応答に関与します。SELENOSは、異常なタンパク質の分解をサポートし、炎症反応の調節にも寄与しています。",
  },
];

const Gene35 = ({deltaPageCount}) => {
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

      <GenePageNumber>{deltaPageCount+74}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene35;
