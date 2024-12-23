import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  {
    geneName: "MT-CO1",
    datas: [
      "rs118203891", "rs118203894", "rs118203892", "rs118203893", "rs267606882", "rs267606883", 
      "rs281865417", "rs387906732", "rs199476129"
    ],
    level: 0,
    description:
      "この遺伝子に変異がある場合、ミトコンドリア内でエネルギー産生が不十分になる可能性があります。MT-CO1（Mitochondrially Encoded Cytochrome c Oxidase I）は、ミトコンドリアDNAにコードされるシトクロムcオキシダーゼのサブユニットIをコードしています。この酵素は、ミトコンドリア電子伝達系の複合体IVの主要な構成要素であり、酸素を電子受容体として利用しながらATPを生成する最終ステップを担います。",
  },
  {
    geneName: "NADSYN1",
    datas: ["rs1008561025", "rs368115694", "rs1327307171", "rs769220327", "rs189928649", "rs3829251"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、NAD+レベルが不足し、エネルギー代謝やATP合成が不十分になる可能性があります。NADSYN1（NAD Synthetase 1）は、NAD合成酵素1をコードしており、ニコチンアミドアデニンジヌクレオチド（NAD）を生成する最終ステップで働きます。",
  },
  {
    geneName: "NDUFA1",
    datas: ["rs104894884", "rs797044914"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、ATP合成効率が低下し、細胞のエネルギー供給が不足する可能性があります。NDUFA1（NADH Oxidoreductase Subunit A1）は、ミトコンドリアの電子伝達系複合体Iの一部であるタンパク質をコードしています。このサブユニットは、NADHから電子を受け取り、ユビキノンに渡す複合体Iの機能に重要です。NDUFA1は、ATP合成のためのプロトン勾配の形成をサポートし、細胞エネルギー生成を促進します。",
  },
];

const Gene23 = ({deltaPageCount}) => {
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

      <GenePageNumber>{deltaPageCount+62}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene23;
