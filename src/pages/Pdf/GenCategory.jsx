import React from "react";
import PageWrapper from "../../components/Pdf/PageWrapper";
import PageNumber from "../../components/Pdf/PageNumber";
import PageHeader from "../../components/Pdf/PageHeader";
import Text from "../../components/Pdf/Text";
import CategoryRow from "../../components/Pdf/GenCategory/CategoryRow";
import CategoryRow1 from "../../components/Pdf/GenCategory/CategoryRow1";

const GenCategory = () => {
    return (
        <PageWrapper>
            <PageHeader
                subtitle={"Gene Category"}
                mainTitle={"遺伝子カテゴリー"}
            />
            <Text
                textContent={
                    " 今回のSNPs検査によると、赤く囲われたカテゴリーに関連する遺伝子について、変異のある可能性があります。 \n遺伝子の変異自体は、誰にでも存在しますが、その内容は人によって様々です。自分の遺伝子・特性にあった健康管理を目指しましょう。"
                }
                fontSize={12}
            />
            <div className="w-[525rem] whitespace-pre-wrap">
                <CategoryRow
                    bgColor="#ffffff"
                    data={[
                        {
                            borderstatus:0,      //0 means no, 1(default) means grey, 2 means red,
                            subContent1: "グルタメート\n タイプ",
                            // subContent1: "subcontent"
                        }, 
                        {
                            text:"グルタミン酸\n 合成"
                        },
                        {
                            text:"グルタミン酸代謝"
                        },
                        {
                            borderstatus:2,
                            text:"グルタミン酸輸送体"
                        },
                        {
                            text:"GABA代謝"
                        },
                        {
                            text:"GABA受容体"
                        }
                    ]}
                />
                <CategoryRow
                    bgColor="#fff5e9"
                    data={[
                        {
                            borderstatus:0,      //0 means no, 1(default) means grey, 2 means red,
                            subContent1: "カテコラミン\nタイプ",
                            // subContent1: "subcontent"
                        }, 
                        {
                            text:"カテコラミン\n合成"
                        },
                        {
                            text:"カテコラミン代謝"
                        },
                        {
                            text:"ドーパミン\n受容体"
                        },
                        {
                            text:"セロトニン"
                        }
                    ]}
                />
                <CategoryRow
                    bgColor={"#FFEEEE"}
                    data={[
                        {
                            borderstatus:0,      //0 means no, 1(default) means grey, 2 means red,
                            subContent1: "ヒスタミン \nタイプ",
                            // subContent1: "subcontent"
                        }, 
                        {
                            text:"ヒスタミン\n生成"
                        },
                        {
                            text:"ヒスタミン\n代謝"
                        },
                        {
                            text:"ヒスタミン\n受容体"
                        },
                    ]}
                />
                <CategoryRow
                    bgColor={"#E3FFE8"}
                    data={[
                        {
                            borderstatus:0,      //0 means no, 1(default) means grey, 2 means red,
                            subContent1: "ミトコンドリア\nタイプ",
                            // subContent1: "subcontent"
                        }, 
                        {
                            text:"ミトコンドリア"
                        },
                        {
                            text:"栄養"
                        }
                    ]}
                />
                <CategoryRow
                    bgColor={"#FBF5FF"}
                    data={[
                        {
                            borderstatus:0,      //0 means no, 1(default) means grey, 2 means red,
                            subContent1: "",
                            // subContent1: "subcontent"
                        }, 
                        {
                            text:"BPA"
                        },
                        {
                            text:"NQO1"
                        },
                        {
                            text:"PON1",
                            borderstatus: 2
                        },
                        {
                            text:"フタル酸\nエステル"
                        },
                        {
                            text:"マイコトキシ\nン"
                        },
                    ]}
                />
                <CategoryRow1
                    bgColor={"#FBF5FF"}
                    data={[
                        {
                            subContent1:"デトックス",  // new line && tab
                            subContent2:"タイプ",
                        },
                        {
                            text:"フェーズII",
                            subContent1:"グルタチオン",
                            subContent2:"ペルオキシダーゼ",
                        },
                        {
                            text:"フェーズII",
                            subContent1:"N-アセチルトラ",
                            subContent2:"ンスフェラーゼ",
                        },
                        {
                            text:"フェーズII",
                            subContent1:"N-アセチルトラ",
                            subContent2:"ンスフェラーゼ",
                        },
                        {
                            text:"フェーズII",
                            subContent1:"スルフトランス",
                            subContent2:"フェラーゼ",
                        },
                        {
                            text:"フェーズII",
                            subContent1:"UDP-グルクロン",
                            subContent2:"酸転移酵素",
                        },
                    ]}
                />
                <CategoryRow
                    bgColor={"#FBF5FF"}
                    data={[
                        {
                            text:"",                 // new line
                            borderstatus: 0
                            // subContent1:"UDP-グルクロン",
                            // subContent2:"酸転移酵素",
                        },
                        {
                            text:"炎症/抗炎症",                 // new line
                            // subContent1:"UDP-グルクロン",
                            // subContent2:"酸転移酵素",
                        },
                        {
                            text:"化学物質過敏",                 // new line
                            // subContent1:"UDP-グルクロン",
                            // subContent2:"酸転移酵素",
                            borderstatus: 2
                        },
                        {
                            text:"活性酸素",                 // new line
                            // subContent1:"UDP-グルクロン",
                            // subContent2:"酸転移酵素",
                        },
                        {
                            text:"水銀",                 // new line
                            // subContent1:"UDP-グルクロン",
                            // subContent2:"酸転移酵素",
                            borderstatus: 2
                        },
                        {
                            text:"有機リン系",                 // new line
                            // subContent1:"UDP-グルクロン",
                            // subContent2:"酸転移酵素",
                        },
                    ]}
                />

                
                <CategoryRow
                    bgColor={"#F0FEFF"}
                    data={[
                        {
                            subContent1: "ミトコンドリア\nタイプ",
                            // subContent1: "subcontent"
                        }, 
                        {
                            text:"メチオニン\nサイクル"
                        },
                        {
                            text:"酸化/抗酸化"
                        },
                        {
                            text:"葉酸"
                        },
                        {
                            text:"ビタミンB12"
                        },
                    ]}
                />
                <CategoryRow
                    bgColor={"#FFF"}
                    data={[
                        {
                            text: "APOE",
                        }, 
                        {
                            text:"BDNF"
                        },
                        {
                            text:"CYP450"
                        },
                        {
                            text:"Dyslexia"
                        },
                        {
                            text:"FN1"
                        },
                        {
                            text:"Leaky"
                        },
                        {
                            text:"Longevity\nGenes"
                        },
                        {
                            text:"TREM2"
                        },
                        {
                            text:"アルコール"
                        },
                        {
                            text:"オート\nファジー"
                        },
                        {
                            text:"カフェイン"
                        },
                        {
                            text:"グリホサート"
                        },
                        {
                            text:"グルタチオン\n除去"
                        },
                        {
                            text:"ミルク"
                        },
                        {
                            text:"メラトニン"
                        },
                        {
                            text:"ビタミン&\nミネラル",
                            borderstatus: 2
                        },
                        {
                            text:"炎症ON"
                        },
                        {
                            text:"炎症OFF"
                        },
                        {
                            text:"筋肉/筋肉痛"
                        },
                        {
                            text:"細胞代謝"
                        },
                        {
                            text:"殺虫剤&農薬",
                            borderstatus: 2
                        },
                        {
                            text:"神経伝達物質"
                        },
                        {
                            text:"女性ホルモン"
                        },
                        {
                            text:"腸内フローラ",
                            borderstatus: 2
                        },
                        {
                            text:"鉛"
                        }
                    ]}
                />
            </div>
            <PageNumber>23</PageNumber>
        </PageWrapper>
    );
};

export default GenCategory;
