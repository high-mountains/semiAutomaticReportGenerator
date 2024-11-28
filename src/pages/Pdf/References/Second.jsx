import React from 'react';
import PageWrapper from '../../../components/Pdf/PageWrapper';
import PageHeader from '../../../components/Pdf/PageHeader';
import PageNumber from '../../../components/Pdf/PageNumber';
import Text from '../../../components/Pdf/Text';

const Second = () => {
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
                textContent={'ニューロン・・・脳や神経の細胞で、体の指令を伝える役割を持つ。<br/><br/>ノルアドレナリン・・・アドレナリンに似た物質で、ストレスや覚醒に関わる。<br/><br/>>ホットフラッシュ・・・急に熱くなったり、汗が出たりする更年期症状。<br/><br/>ホモシステイン・・・体内で作られるアミノ酸で、血管や心臓の健康に関わる。<br/><br/>ホルモンバランス・・・体内でホルモンの量やバランスが保たれている状態。<br/><br/>ホルモン代謝物・・・ホルモンが使われた後にできる物質。<br/><br/>マイコトキシン・・・カビが作る毒素で、健康に悪影響を及ぼすことがある。<br/><br/>メチレーションプロセス・・・細胞がDNAやタンパク質を修飾し、働きを調節する過程。<br/><br/>有害重金属・・・体にとって有害な重金属で、鉛や水銀などが含まれる。<br/><br/>硫黄含有アミノ酸・・・硫黄を含むアミノ酸で、体の解毒や代謝に重要。<br/><br/>神経伝達・・・神経を通じて脳や体に指令を伝えるプロセス。<br/><br/>神経変性疾患・・・神経細胞がゆっくりと失われる病気。<br/><br/>細胞質・・・細胞の中で、核の外側にある液体の部分。<br/><br/>腸内フローラ・・・腸内に住む細菌の集まりで、消化や健康に大切。<br/><br/>酵素・・・体内の化学反応を助けるタンパク質で、消化やエネルギー生成に関わる。<br/><br/>酸化ストレス・・・体にダメージを与える活性酸素が増える状態で、老化や病気に影響する。'}
                fontSize={12}
            />
            <PageNumber>
                152
            </PageNumber>
        </PageWrapper>
    );
};

export default Second;