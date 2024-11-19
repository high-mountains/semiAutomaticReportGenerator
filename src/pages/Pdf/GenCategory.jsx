import React, { useEffect, useState } from "react";
import PageWrapper from "../../components/Pdf/PageWrapper";
import PageNumber from "../../components/Pdf/PageNumber";
import PageHeader from "../../components/Pdf/PageHeader";
import Text from "../../components/Pdf/Text";
import CategoryRow from "../../components/Pdf/GenCategory/CategoryRow";
import CategoryRow1 from "../../components/Pdf/GenCategory/CategoryRow1";
import { useDispatch, useSelector } from "react-redux";

const GenCategory = () => {
    const categoryData = useSelector((state) => state.pdfData.categoryData);

    const initialGlutamateData = [
        { borderstatus: 0, subContent1: "グルタメート\nタイプ" },
        { text: "グルタミン酸\n合成", tag: "グルタミン酸代謝" },
        { text: "グルタミン酸代謝", tag: "グルタミン酸代謝" },
        { text: "グルタミン酸輸送体", tag: "グルタミン酸輸送体" },
        { text: "GABA代謝", tag: "GABA代謝" },
        { text: "GABA受容体", tag: "GABA受容体" }
    ];

    const initialCatecholamineData = [
        { borderstatus: 0, subContent1: "カテコラミン\nタイプ" },
        { text: "カテコラミン\n合成", tag: "カテコラミン合成" },
        { text: "カテコラミン代謝", tag: "カテコラミン代謝" },
        { text: "ドーパミン\n受容体", tag: "ドーパミン\n受容体" },
        { text: "セロトニン", tag: "セロトニン" }
    ];

    const initialHistamineData = [
        { borderstatus: 0, subContent1: "ヒスタミン\nタイプ" },
        { text: "ヒスタミン\n生成", tag: "ヒスタミン生成" },
        { text: "ヒスタミン\n代謝", tag: "ヒスタミン代謝" },
        { text: "ヒスタミン\n受容体", tag: "ヒスタミン受容体" }
    ];
    
    const initialMitochondriaData = [
        { borderstatus: 0, subContent1: "ヒスタミン\nタイプ" },
        { text: "ミトコンドリア", tag: "ミトコンドリア" },
        { text: "栄養", tag: "栄養" }
    ];

    const initialDetoxData1 = [
        { borderstatus: 0, subContent1: ""},
        { text: "BPA", tag: "BPA" },
        { text: "NQO1", tag: "NQO1" },
        { text: "PON1", tag: "PON1" },
        { text: "フタル酸\nエステル", tag: "フタル酸エステル" },
        { text: "マイコトキシ\nン", tag: "マイコトキシン" }
    ];

    const initialDetoxData2 = [
        { borderstatus: 0, subContent1: "デトックス", subContent2: "タイプ"},
        { text: "フェーズII", subContent1: "グルタチオン", subContent2: "ペルオキシダーゼ", subContent2Class:{letterSpacing:'-0.3rem'}, tag: "フェーズII グルタチオンペルオキシダーゼ"},
        { text: "フェーズII", subContent1: "N-アセチルトラ", subContent2: "ンスフェラーゼ", tag: "フェーズII N-アセチルトランスフェラーゼ"},
        { text: "フェーズII", subContent1: "N-アセチルトラ", subContent2: "ンスフェラーゼ", tag: "フェーズII N-アセチルトランスフェラーゼ"},
        { text: "フェーズII", subContent1: "スルフトランス", subContent2: "フェラーゼ", tag: "フェーズII スルフトランスフェラーゼ"},
        { text: "フェーズII", subContent1: "UDP-グルクロン", subContent2: "酸転移酵素", tag: "フェーズII UDP-グルクロン酸転移酵素"}
    ];

    const initialDetoxData3 = [
        { borderstatus: 0, text: ""},
        { text: "炎症/抗炎症", tag: "炎症/抗炎症"},
        { text: "化学物質過敏", tag: "化学物質過敏"},
        { text: "活性酸素", tag: "活性酸素"},
        { text: "水銀", tag: "水銀"},
        { text: "有機リン系", tag: "有機リン系"}
    ];

    const initialMethylationData = [
        { borderstatus: 0, subContent1: "メチレーション\nタイプ"},
        { text: "メチオニン\nサイクル", tag: "メチオニンサイクル"},
        { text: "酸化/抗酸化", tag: "酸化/抗酸化"},
        { text: "葉酸", tag: "葉酸"},
        { text: "ビタミンB12", tag: "ビタミンB12"}
    ];

    const initialEtcData = [
        { text: "APOE", tag: "APOE"},
        { text: "BDNF", tag: "BDNF"},
        { text: "CYP450", tag: "CYP450"},
        { text: "Dyslexia", tag: "Dyslexia"},
        { text: "FN1", tag: "FN1"},
        { text: "Leaky", tag: "Leaky"},
        { text: "Longevity\nGenes", tag: "LongevityGenes"},
        { text: "TREM2", tag: "TREM2"},
        { text: "アルコール", tag: "アルコール"},
        { text: "オート\nファジー", tag: "オートファジー"},
        { text: "カフェイン", tag: "カフェイン"},
        { text: "グリホサート", tag: "グリホサート"},
        { text: "グルタチオン\n除去", tag: "グルタチオン除去"},
        { text: "ミルク", tag: "ミルク"},
        { text: "メラトニン", tag: "メラトニン"},
        { text: "ビタミン&\nミネラル", tag: "ビタミン&ミネラル"},
        { text: "炎症ON", tag: "炎症ON"},
        { text: "炎症OFF", tag: "炎症OFF"},
        { text: "筋肉/筋肉痛", tag: "筋肉/筋肉痛"},
        { text: "細胞代謝", tag: "細胞代謝"},
        { text: "殺虫剤&農薬", tag: "殺虫剤&農薬"},
        { text: "神経伝達物質", tag: "神経伝達物質"},
        { text: "女性ホルモン", tag: "女性ホルモン"},
        { text: "腸内フローラ", tag: "腸内フローラ"},
        { text: "鉛", tag: "鉛"}
    ]

    const [glutamateData, setGlutamateData] = useState(initialGlutamateData);
    const [catecholamineData, setCatecholamineData] = useState(initialCatecholamineData);
    const [histamineData, setHistamineData] = useState(initialHistamineData);
    const [mitochondriaData, setMitochondriaData] = useState(initialMitochondriaData);
    const [detoxData1, setDetoxData1] = useState(initialDetoxData1);
    const [detoxData2, setDetoxData2] = useState(initialDetoxData2);
    const [detoxData3, setDetoxData3] = useState(initialDetoxData3);
    const [methylationData, setMethylationData] = useState(initialMethylationData);
    const [etcData, setEtcData] = useState(initialEtcData);

    useEffect(() => {
        const redValues = new Set(categoryData.map((item) => item.Red));

        const updateBorderStatus = (data) => 
            data.map((item) => 
                redValues.has(item.tag) ? { ...item, borderstatus: 2 } : item
            );

        setGlutamateData(updateBorderStatus(initialGlutamateData));
        setCatecholamineData(updateBorderStatus(initialCatecholamineData));                         
        setHistamineData(updateBorderStatus(initialHistamineData));
        setMitochondriaData(updateBorderStatus(initialMitochondriaData));
        setDetoxData1(updateBorderStatus(initialDetoxData1));
        setDetoxData2(updateBorderStatus(initialDetoxData2));
        setDetoxData3(updateBorderStatus(initialDetoxData3));
        setMethylationData(updateBorderStatus(initialMethylationData));
        setEtcData(updateBorderStatus(initialEtcData));

    }, [categoryData]);

    return (
        <PageWrapper>
            <PageHeader
                subtitle={"Gene Category"}
                mainTitle={"遺伝子カテゴリー"}
            />
            <Text
                textContent={
                    "今回のSNPs検査によると、赤く囲われたカテゴリーに関連する遺伝子について、変異のある可能性があります。 \n遺伝子の変異自体は、誰にでも存在しますが、その内容は人によって様々です。自分の遺伝子・特性にあった健康管理を目指しましょう。"
                }
                fontSize={12}
                className={"whitespace-pre-wrap"}
            />
        <div className="w-[525rem] whitespace-pre-wrap">
            <CategoryRow bgColor="#FFFDF1" data={glutamateData} />
            <CategoryRow bgColor="#fff5e9" data={catecholamineData} />
            <CategoryRow bgColor="#FFEEEE" data={histamineData} />
            <CategoryRow bgColor="#E3FFE8" data={mitochondriaData} />
            <CategoryRow bgColor="#FBF5FF" data={detoxData1} />
            <CategoryRow1 bgColor="#FBF5FF" data={detoxData2} />
            <CategoryRow bgColor="#FBF5FF" data={detoxData3} />
            <CategoryRow bgColor="#F0FEFF" data={methylationData} />
            <CategoryRow bgColor="#FFF" data={etcData} />
        </div>
        <PageNumber>23</PageNumber>
        </PageWrapper>
    );
};

export default GenCategory;