import React from 'react';
import PageWrapper from '../../../components/Pdf/PageWrapper';
import PageHeader from '../../../components/Pdf/PageHeader';
import PageNumber from '../../../components/Pdf/PageNumber';
import Text from '../../../components/Pdf/Text';

const First = () => {
    return (
        <PageWrapper>
            <PageHeader
                subtitle={"Glossary"}
                mainTitle={"用語集"}
                subTitleStyle={{
                    marginBottom:"5rem",
                    fontSize: "14rem"
                }}
                mainTitleStyle={{
                    fontSize:"32rem",
                    marginTop: "5rem",
                    marginBottom: "0rem"
                }}
                containerStyle={{
                    marginBottom: '25rem'
                }}
            />
            <Text
                textContent={'ATP（アデノシン三リン酸）・・・細胞のエネルギー源となる分子で、体を動かす「燃料」にあたる。<br/><br/>COMT活性・・・COMTは体内の一部の化学物質を分解する酵素で、その働き（活性）によって気分や反応の速さに影響が出る。<br/><br/>>DNAの調節・・・必要なタイミングで特定の遺伝子が働くように調整する仕組み。体の機能が適切に働くためのスイッチの役割を持つ。<br/><br/>DNA修復機能・・・損傷したDNAを修復し、正常な状態を保つための機能。<br/><br/>GABA・・・脳の神経を落ち着かせ、リラックスさせる働きを持つ物質。<br/><br/>SNP（単一ヌクレオチド多型）・・・姿形や体質といった個人差が生じる遺伝子多型の一種。代表的なものは「太りやすいかどうか」や「アルコールに強いかどうか」など。<br/><br/>アドレナリン・・・緊張や興奮を引き起こすホルモンで、「戦うか逃げるか」の反応をサポートする。<br/><br/>エストロゲン・・・主に女性の体の発育や機能を助けるホルモン。<br/><br/>カゼインフリー・・・カゼインという乳製品のたんぱく質を含まないことを指す。<br/><br/>クエン酸回路・・・細胞の中でエネルギーを作り出すサイクルの一部。<br/><br/>グルタメート・・・脳内の神経伝達物質で、脳内で神経信号を伝える重要な役割を持つ。<br/><br/>グルテンフリー ・・・小麦などに含まれるグルテンを避けた食品や食事を指す。<br/><br/>サイトカイン・・・体の免疫システムを調整する分子で、感染や炎症への反応に関わる。<br/><br/>シナプス可塑性・・・脳の神経細胞同士のつながりが変化し、記憶や学習を助ける現象。<br/><br/>ステロイド・・・体内の炎症を抑える薬で、体のホルモンに似た働きを持つ。<br/><br/>セロトニン・・・気分や睡眠に関係する物質で、心の安定に役立つ。<br/><br/>ドーパミン・・・喜びや快感を感じるときに放出される物質で、やる気や行動に関わる。'}
                fontSize={12}
            />
            <PageNumber>
                159
            </PageNumber>
        </PageWrapper>
    );
};

export default First;