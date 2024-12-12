import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Initial gene data
const initialGeneData = [
  {
    geneName: "GABRA1",
    datas: ["rs2279020", "rs121434579"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、GABA受容体の機能が低下し、興奮と抑制のバランスが崩れる可能性があります。GABRA1（Gamma-Aminobutyric Acid Type A Receptor Subunit Alpha1）は、GABA A受容体のα1サブユニットをコードしています。GABRA1受容体は、主に中枢神経系でGABAが結合することで活性化される抑制性イオンチャネルです。α1サブユニットは、この受容体の構造と機能に重要で、神経活動を抑制し、神経伝達のバランスを維持する役割を果たしています。",
  },
  {
    geneName: "GABRA2",
    datas: ["rs279871"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、GABA受容体の機能が低下し、興奮と抑制のバランスが崩れる可能性があります。GABRA2（Gamma-Aminobutyric Acid Type A Receptor Subunit Alpha2）は、GABRA2受容体のα2サブユニットをコードしています。このサブユニットは、特定の脳領域で発現が多く、GABRA2受容体の構造に組み込まれて、神経抑制作用を担います。α2サブユニットは、GABAの作用を受けて神経伝達の抑制的な制御に寄与し、神経の過剰な興奮を抑える役割を持ちます。",
  },
  {
    geneName: "GABRG2",
    datas: ["rs211037", "rs796052504"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、GABA受容体の機能が低下し、興奮と抑制のバランスが崩れる可能性があります。GABRG2（Gamma-Aminobutyric Acid Type A Receptor Subunit Gamma2）は、GABRG2受容体のγ2サブユニットをコードしています。γ2サブユニットは、GABA A受容体の構成要素で、特にベンゾジアゼピンの結合部位を形成しています。このサブユニットは、ベンゾジアゼピン系薬物がGABAの作用を強化する役割を担っており、神経伝達の抑制効果を増強します。",
  },
];

const Gene6 = ({deltaPageCount}) => {
  // Fetch gene data from Redux store
  const geneData = useSelector((state) => state.pdfData?.geneData || []);

  // Memoize the updated gene data to avoid unnecessary recalculations
  const updatedGeneData = useMemo(() => {
    return updateDangerLevel(initialGeneData, geneData);
  }, [geneData]);

  return (
    <PageWrapper>
      {/* Header Text */}
      <Text
        sidebar={1}
        textContent="GABA受容体"
        containerStyle={{ marginBottom: "10rem" }}
      />

      {/* Gene Information Table */}
      {updatedGeneData.map((item, index) => (
        <GeneInformationMiddle
          key={index}
          geneName={item.geneName}
          datas={item.datas}
          level={item.level}
          description={item.description}
        />
      ))}

      {/* Page Number */}
      <GenePageNumber>{deltaPageCount+45}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene6;
