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
    geneName: "FLG",
    datas: ["rs61816761"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、腸内フローラのバランスに影響を与える皮膚や腸のバリア機能が損なわれる可能性があります。FLGは、フィラグリンというタンパク質をコードしており、皮膚の角質層でケラチンを結びつけて皮膚のバリア機能を形成する役割を持ちます。フィラグリンは、皮膚の水分保持と保護バリアを維持するために重要であり、FLGの機能低下は皮膚の乾燥やバリア機能の低下を引き起こす可能性があります。",
  },
  {
    geneName: "FUT2",
    datas: ["rs601338", "rs1800028"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、腸内のビフィズス菌などの有益な細菌の定着が減少する可能性があります。FUT2は、フコース転移酵素2という酵素をコードしており、唾液や消化管の粘液中に存在する糖鎖にフコースを付加する役割を果たします。この酵素は、特に消化管の健康維持や腸内細菌叢（腸内フローラ）のバランスに影響を与えることが知られています。",
  },
  {
    geneName: "HLA-DRA",
    datas: ["rs7192"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、腸内の免疫応答に影響を及ぼす可能性があります。HLA-DRAは、HLAクラスII分子のα鎖をコードし、主にDRB遺伝子でコードされるβ鎖と結合してHLA-DR分子を形成します。この分子は、抗原提示細胞上で外来抗原をT細胞に提示し、特に感染時の免疫応答を促進します。",
  },
  {
    geneName: "MCM6",
    datas: ["rs182549"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、乳糖の消化能力が低下する可能性があります。MCM6は、ミニクロモソームメンテナンス複合体の一部で、DNA複製の開始と進行において重要な役割を果たすタンパク質をコードしています。この複合体は、DNAの解離を助け、複製フォークの進行を支援することで細胞周期を制御します。また、MCM6の遺伝子領域には、乳糖不耐性や乳糖消化能力に関連する調節領域が含まれ、遺伝的に乳糖耐性をもたらす多型も存在します。",
  },
];

const Gene109 = () => {
  // Fetch gene data from Redux store
  const geneData = useSelector((state) => state.pdfData?.geneData || []);

  // Memoize the updated gene data to avoid unnecessary recalculations
  const updatedGeneData = useMemo(() => {
    return updateDangerLevel(initialGeneData, geneData);
  }, [geneData]);

  return (
    <PageWrapper>
      <Text
        sidebar={1}
        textContent={"腸内フローラ"}
        containerStyle={{ marginBottom: "10rem" }}
      />

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

      <GenePageNumber>139</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene109;
