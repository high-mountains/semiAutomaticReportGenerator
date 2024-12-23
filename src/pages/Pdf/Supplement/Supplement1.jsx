import React, { useMemo } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper";
import PageNumber from "../../../components/Pdf/PageNumber";
import PageHeader from "../../../components/Pdf/PageHeader";
import TableNew from "../../../components/Pdf/Supplements/TableNew";
import { useSelector } from "react-redux";
import {updateDangerValues, processInitialData} from "./updateDangerValues.js";

// Constants
const initialData = [
    {
        thContent: {
            main: "グルタミン酸合成",
            sub: "興奮性神経伝達物質の生成に関わる",
        },
        tdContent: {
            gen: "GLS2",
            danger: "-", // Dynamically updated based on state
            description: "L-グルタミン, NAC, グルタミン, ビタミンB群",
        },
    },
    {
        rowSpan: 7,
        thContent: {
            main: "グルタミン酸代謝",
            sub: "興奮性神経伝達物質の分解に関わる",
        },
        tdContent: {
            gen: "CBS",
            danger: "-",
            description:
                "ビタミンB6（補因子）, ヘム（補因子）, 5MTHF, NAC, ベタイン, メチルビタミンB12",
        },
    },
    {
        tdContent: {
            gen: "CTH",
            danger: "-",
            description:
                "ビタミンB6（補因子）, NAC, メチルビタミンB12, メチルフォレート",
        },
    },
    {
        tdContent: {
            gen: "DAO",
            danger: "-",
            description:
                "リボフラビン（補因子）, NAC, オメガ3, セレン, ビタミンB6",
        },
    },
    {
        tdContent: {
            gen: "DAOA",
            danger: "-",
            description:
                "リボフラビン（補因子）, NAC, オメガ3, セレン, ビタミンB6",
        },
    },
    {
        tdContent: {
            gen: "GAD1",
            danger: "-",
            description:
                "P5P（補因子）, GABA, L-グルタミン, L-テアニン, マグネシウム",
        },
    },
    {
        tdContent: {
            gen: "GLUD1",
            danger: "-",
            description: "NAD+（補因子）, L-グルタミン, NAC, ビタミンB群",
        },
    },
    {
        tdContent: {
            gen: "GLUL",
            danger: "-",
            description: "NAC, αリポ酸, ビタミンB群",
        },
    },
    {
        thContent: {
            main: "グルタミン酸輸送体",
            sub: "興奮性神経伝達物質の移動に関わる",
        },
        tdContent: {
            gen: "SLC1A1",
            danger: "-",
            description:
                "オメガ3, カリウム, ナトリウム, ビタミンB群, マグネシウム",
        },
    },
    {
        thContent: {
            main: "GABA代謝",
            sub: "リラックス成分の代謝に関わる",
        },
        tdContent: {
            gen: "ALDH5A1",
            danger: "-", // Dynamically updated based on state
            description:
                "CoQ10, L-カルニチン, NAD+, αリポ酸, ビタミンB群, リボフラビン, 鉄, 銅",
        },
    },
    {
        rowSpan: 3,
        thContent: {
            main: "GABA受容体",
            sub: "リラックス成分の感度に関わる",
        },
        tdContent: {
            gen: "GABRA1",
            danger: "-",
            description: "GABA, L-テアニン, タウリン, マグネシウム",
        },
    },
    {
        tdContent: {
            gen: "GABRA2",
            danger: "-",
            description: "GABA, L-テアニン, タウリン, マグネシウム",
        },
    },
    {
        tdContent: {
            gen: "GABRG2",
            danger: "-",
            description: "GABA, L-テアニン, タウリン, マグネシウム",
        },
    },
    {
        rowSpan: 3,
        thContent: {
            main: "カテコラミン合成",
            sub: "ストレス反応や覚醒に影響する神経伝達物質の生成に関わる",
        },
        tdContent: {
            gen: "DHFR",
            danger: "-",
            description: "NAD+（補因子）, ビタミンB12, メチルフォレート",
        },
    },
    {
        tdContent: {
            gen: "GCH1",
            danger: "-",
            description:
                "5-HTP, L-チロシン, L-フェニルアラニン, NAC, ビタミンB群",
        },
    },
    {
        tdContent: {
            gen: "TH",
            danger: "-",
            description:
                "BH4（補因子）, L-チロシン, ビタミンB群, メチルフォレート",
        },
    },
    {
        rowSpan: 3,
        thContent: {
            main: "カテコラミン代謝",
            sub: "ストレス反応や覚醒に影響する神経伝達物質の分解に関わる",
        },
        tdContent: {
            gen: "COMT",
            danger: "-",
            description:
                "SAMe（補因子）, NAC, ビタミンB6, ビタミンB12, マグネシウム, メチルフォレート",
            etc: "便秘, ピル",
        },
    },
    {
        tdContent: {
            gen: "MAOA",
            danger: "-",
            description:
                "リボフラビン（補因子）, ビタミンB2, ビタミンB6, ビタミンB12, フォレート, マグネシウム",
        },
    },
    {
        tdContent: {
            gen: "MAOB",
            danger: "-",
            description:
                "ビタミンB2, ビタミンB6, ビタミンB12, フォレート, マグネシウム",
        },
    },
    {
        rowSpan: 2,
        thContent: {
            main: "ドーパミン受容体",
            sub: "快楽や覚醒に影響する興奮性神経伝達物質の感度に関わる",
        },
        tdContent: {
            gen: "DRD1",
            danger: "-",
            description:
                "L-チロシン, オメガ3, ビタミンB6, ビタミンD, フォスファチジルコリン, マグネシウム",
        },
    },
    {
        tdContent: {
            gen: "DRD2",
            danger: "-",
            description:
                "L-チロシン, オメガ3, ビタミンB6, ビタミンD, フォスファチジルコリン, マグネシウム",
        },
    },
];

const Supplement1 = ({deltaPageCount}) => {
  const geneData = useSelector((state) => state.pdfData.geneData);

  // Memoized updated data
  const updatedTableData = useMemo(() => {
    const updatedData = updateDangerValues(initialData, geneData || []);
    return processInitialData(updatedData);
  }, [geneData]);

  // Styles
  const headerStyles = {
    containerStyle: { marginBottom: "0rem" },
    subTitleStyle: { marginBottom: "5rem" },
    mainTitleStyle: {
      fontSize: "25rem",
      letterSpacing: "-1.75rem",
      lineHeight: 1.6,
    },
  };

  return (
    <PageWrapper>
      {/* Page Header */}
      <PageHeader
        subtitle="Supplement & Lifestyle"
        mainTitle="あなたにおすすめのサプリメントや生活習慣一覧"
        containerStyle={headerStyles.containerStyle}
        subTitleStyle={headerStyles.subTitleStyle}
        mainTitleStyle={headerStyles.mainTitleStyle}
      />

      {/* Table */}
      <TableNew tBody={updatedTableData} />

      {/* Page Number */}
      <PageNumber>{ deltaPageCount +26}</PageNumber>
    </PageWrapper>
  );
};

export default Supplement1;