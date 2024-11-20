import PageWrapper from "../../../../components/Pdf/PageWrapper";
import PageNumber from "../../../../components/Pdf/PageNumber";
import PageHeader from "../../../../components/Pdf/PageHeader";
import Fourperiod from "../../../../components/Pdf/PagesComponents/PeriodAnalyze/Fourperiod";
import Improvement from "../../../../components/Pdf/PagesComponents/PeriodAnalyze/Improvement";
import withPeriodanalyze from "../../../../components/Pdf/HOC/withperiodanalyze";
import { useState } from "react";
import { useSelector } from "react-redux";

const Periodanalyze = (props) => {
    const [mainColor, setMainColor] = useState(
        useSelector((state) => state.pdfData.methylationColor)
    );
    const EnhancedPeriodanalyze = withPeriodanalyze([
        {
            Component: PageHeader,
            data: {
                subtitle: "Methylation Type",
                mainTitle: "メチレーションタイプ",
            },
        },
        {
            Component: Fourperiod,
            data: {
                firstSenctences:
                    "メチレーションが弱い遺伝子を持つ子どもは<span class='bold'>感受性が強く</span>、新しい環境や大きな音に敏感で、<span class='bold'>ストレスを感じやすい</span>傾向があります。興味あることには集中力を発揮しますが、変化に不安を感じやすい面もあります。メチレーション不足により神経発達に関わる遺伝子の発現が阻害され、ASDやADHD、学習障害、言語発達の遅れ、情緒不安定のリスクが高まる可能性があります。",
                secondSenctences:
                    "思春期にはホルモンバランスの変化でメチレーションの影響が強まり、感情の波や自己表現への不安が増す一方、<span class='bold'>創造性が開花しやすい</span>時期でもあります。メチレーション不足によりエストロゲン代謝が阻害され、月経困難症や月経不順のリスクが高まり、ホルモン合成酵素の影響で第二次性徴が遅れることもあります。また、免疫機能が低下し、風邪を引きやすくなることもあります。",
                thirdSenctences:
                    "大人になると、自身の感受性や独自性を深く理解し、受け入れる力が増します。職場や家庭でのストレスがメンタルに影響を与えるため、<span class='bold'>ストレス管理</span>が重要になりますが、経験を活かして自己表現や創造的活動で力を発揮することも多くなる時期です。",
                fourthSenctences:
                    "更年期以降、ホルモンバランスの変化で感受性が一層鋭くなり、感情の波が激しくなる一方、人生経験から深い洞察力も備わる時期です。しかし、メチレーション不足があると、<span class='blue'>セロトニン</span>やドーパミンの代謝に影響し、<span class='bold'>うつ症状</span>や<span class='bold'>不安</span>、<span class='bold'>認知症のリスク</span>が増します。また、神経細胞の保護や修復が不充分になり、神経変性疾患のリスクが高まる可能性があり、<span class='blue'>DNA修復機能</span>の低下で<span class='bold'>がんのリスク</span>も増すことがあります。",
            },
        },
        {
            Component: Improvement,
            data: {
                wrapperWidth: "525rem", //default is          535
                mainColor: mainColor,
                description: "メチレーションタイプのおすすめ生活改善",
                qualities1: [
                    {
                        content:
                            "葉酸、ビタミンB6、ビタミンB12、メチオニンなど、メチレーションに必要な栄養素を含む\n     食品（緑黄色野菜、豆類、卵、肉類、魚など）を積極的に摂取する。",
                    },
                    {
                        content:
                            "コリンを多く含む食品（卵、大豆製品、鶏肉、ブロッコリーなど）を積極的に摂取する。",
                    },
                    {
                        content:
                            "ベタインを多く含む食品（ビーツ、ホウレンソウ、ほたてなど）を積極的に摂取する。",
                    },
                    {
                        content:
                            "グルタチオンやメチオニン、SAMeなどのメチレーションサポートサプリメントを検討する。",
                    },
                    {
                        content:
                            "加工食品や添加物の摂取を控え、新鮮な食材を選ぶ。",
                    },
                    {
                        content:
                            "セロトニンを増やすために、同じリズムの繰り返し運動や、ウォーキングなどを積極的に取り\n     入れる。",
                    },
                    {
                        content:
                            "ドーパミンを増やすために、フェニルアラニンを含む食品（肉類、魚、大豆製品、卵など）や\n     チロシンを含む食品（肉、魚、大豆製品、ナッツ類）を積極的に摂取する。",
                    },
                ],

                oneColumnStatus: true,
                ulStyle1: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "4rem",
                    lineHeight: 1.25,
                    fontSize: "12rem",
                    whiteSpace: "pre-wrap",
                },
            },
        },
        {
            Component: PageNumber,
            data: {
                children: "21",
            },
        },
    ]);

    return (
        <>
            <PageWrapper>
                <EnhancedPeriodanalyze />
            </PageWrapper>
        </>
    );
};

export default Periodanalyze;
