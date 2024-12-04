import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  {
    geneName: "SHMT1",
    datas: ["rs17806333"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、抗酸化・解毒機能が低下し、体内の酸化ストレスが増加する可能性があります。SHMT1（Serine Hydroxymethyltransferase 1）は、細胞質で働くセリンヒドロキシメチルトランスフェラーゼ酵素をコードしており、セリンをグリシンに変換しながら5,10-メチレンテトラヒドロ葉酸を生成する役割を果たします。この反応は、DNA合成や修復、メチル化サイクルで必要とされる一炭素ユニットの供給に重要です。",
  },
  {
    geneName: "SHMT2",
    datas: ["rs34095989"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、抗酸化・解毒機能が低下し、体内の酸化ストレスが増加する可能性があります。SHMT2（Serine Hydroxymethyltransferase 2）は、ミトコンドリアで働くセリンヒドロキシメチルトランスフェラーゼ酵素をコードしており、SHMT1と同様にセリンからグリシンを生成し、5,10-メチレンテトラヒドロ葉酸を供給します。SHMT2は、ミトコンドリア内の代謝プロセスやエネルギー生産に関与し、特に細胞分裂や増殖のために重要です。",
  },
  {
    geneName: "SLC40A1",
    datas: ["rs11568350", "rs11568351", "rs104893664"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、体内での鉄代謝のバランスが崩れ、酸化ストレスが増加する可能性があります。SLC40A1（Solute Carrier Family 40 Member 1）は、フェロポーチンとして知られるタンパク質をコードしており、細胞内の鉄を細胞外に輸送する役割を担います。SLC40A1は特に腸管上皮細胞やマクロファージで発現が高く、体内の鉄の取り込み、貯蔵、利用を調整します。",
  },
  {
    geneName: "SOD2",
    datas: ["rs4880"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、抗酸化・解毒機能が低下し、体内の酸化ストレスが増加する可能性があります。SOD2（Superoxide Dismutase 2）は、スーパーオキシドジスムターゼ2をコードしており、ミトコンドリア内で活性酸素種の一つであるスーパーオキシドラジカルを過酸化水素に変換する役割を持っています。",
  },
];

const Gene67 = ({deltaPageCount}) => {
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

      <GenePageNumber>{deltaPageCount+103}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene67;
