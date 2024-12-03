import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  
  {
    geneName: "GCH1",
    datas: [
      "rs104894433",
      "rs104894435",
      "rs104894436",
      "rs104894437",
      "rs104894438",
      "rs104894439",
      "rs104894440",
      "rs104894441",
      "rs104894442",
      "rs104894443",
      "rs104894444",
      "rs104894445",
      "rs137852633",
      "rs41298442",
      "rs886039379",
    ],
    level: 0,
    description:
      "この遺伝子に変異がある場合、体内のカテコラミン合成に必要な補因子の生成が低下する可能性があります。GCH1（GTP Cyclohydrolase 1）は、GTPシクロヒドロラーゼ1という酵素をコードしており、ビオプテリンの合成に関与します。ビオプテリンは、ドーパミン、セロトニン、ノルアドレナリンなどの神経伝達物質を合成する際に必要な補酵素です。",
  },
  {
    geneName: "HTR2",
    datas: ["rs6313"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、気分や行動、認知機能に変化を引き起こす可能性があります。HTR2は、セロトニン（5-HT）2受容体をコードしており、主に脳で発現しています。この受容体は、セロトニンと結合して細胞内シグナル伝達を調整し、気分、睡眠、食欲、感情処理に関与します。HTR2は、特に感情や気分の調節において重要で、セロトニンシステムを介して神経系のバランスを保つ役割を果たしています。",
  },
  {
    geneName: "MAOA",
    datas: [
      "rs6323",
      "rs1137070",
      "rs72554632",
      "rs796065312"
    ],
    level: 0,
    description:
      "この遺伝子に変異がある場合、ドーパミンやセロトニン、ノルアドレナリンの代謝が阻害される可能性があります。MAOA（Monoamine Oxidase A）は、モノアミンオキシダーゼAという酵素をコードしています。この酵素は、セロトニン、ノルアドレナリン、ドーパミンなどのモノアミン神経伝達物質の分解に関与し、これらの伝達物質を酸化的に脱アミノ化して不活性化します。",
  },
];

const Gene105 = () => {
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

      <GenePageNumber>135</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene105;
