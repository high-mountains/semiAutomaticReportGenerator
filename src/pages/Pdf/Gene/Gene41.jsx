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
    geneName: "CYP2B6",
    datas: [
      "rs3745274", "rs139801276", "rs2279343", "rs34097093", "rs36079186", "rs28399499", "rs373489637", "rs4803419", "rs186335453", "rs281864907"
    ],
    level: 0,
    description:
      "この遺伝子に変異がある場合、体内でのフタル酸エステルの蓄積や毒性が増加する可能性があります。CYP2B6（Cytochrome P450 Family 2 Subfamily B Member 6）は、シトクロムP450酵素ファミリーの一員で、薬物や環境毒素、内因性物質の代謝に関与しています。CYP2B6は、肝臓で発現が高く、特定の薬物を水溶性に変換して排泄を促進する役割を果たしています。",
  },
  {
    geneName: "GSTP1",
    datas: ["rs1695"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、フタル酸エステルによる酸化ストレスが高まる可能性があります。GSTP1（Glutathione S-Transferase Pi 1）は、主に腫瘍抑制と酸化ストレス防御に関与するGSTファミリーの酵素です。この酵素は、グルタチオンと結合して有害物質を解毒し、細胞を酸化ストレスや発がん性物質から保護します。",
  },
  {
    geneName: "HSPA1L",
    datas: ["rs2227956"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、フタル酸エステルによる細胞ストレスへの適応力が低下する可能性があります。HSPA1L（Heat Shock Protein Family A Member 1 Like）は、ヒートショックタンパク質ファミリーの一員で、細胞ストレス応答において重要な役割を担っています。このタンパク質は、ストレス条件下で損傷したタンパク質の修復や正しい折り畳みを助け、細胞の安定性と機能を維持します。",
  },
];

const Gene41 = () => {
  // Fetch gene data from Redux store
  const geneData = useSelector((state) => state.pdfData?.geneData || []);

  // Memoize the updated gene data to avoid unnecessary recalculations
  const updatedGeneData = useMemo(() => {
    return updateDangerLevel(initialGeneData, geneData);
  }, [geneData]);

  return (
    <PageWrapper>
      <Text sidebar={1} textContent={"フタル酸エステル"} containerStyle={{ marginBottom: "10rem" }} />

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

      <GenePageNumber>79</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene41;
