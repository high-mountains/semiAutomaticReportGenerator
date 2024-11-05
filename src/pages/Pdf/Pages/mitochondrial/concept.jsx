import PageWrapper from "../../../../components/Pdf/PageWrapper";
import PageNumber from "../../../../components/Pdf/PageNumber";
import PageHeader from "../../../../components/Pdf/PageHeader";
import Outline from "../../../../components/Pdf/PagesComponents/Concept/Outline";
import Explanation from "../../../../components/Pdf/PagesComponents/Concept/Explanation";
import Quality from "../../../../components/Pdf/PagesComponents/Concept/Quality";


const Concept = () => {

    return(<>
        <PageWrapper>

            <PageHeader subtitle={"Mitochondrial Type"}
                mainTitle={"ミトコンドリアタイプ"}>
            </PageHeader>
            
            <Outline
                imageURL={"./bg/histamine.png"}
                concept={"ミトコンドリアタイプ"}
                description={"アレルギー症状にも深く関わっているヒスタミンの代謝やその調節がスムーズに行われにくく、脳内にヒスタミンが多くなりやすい傾向があるタイプです。"}
            />
            
            <Explanation
                question={"ミトコンドリアタイプとは"}
                answer={"ヒスタミンは、脳内で情報を伝達する神経伝達物質として働き、私たちが目を覚まし、集中力を高め、学習や記憶力を促進する役割を担っています。 \n しかし、ヒスタミンが過剰になると、不安感や頭痛を引き起こしたり、夜眠れなくなることがあります。また、ヒスタミンはアレルギー反応にも関与しており、花粉症や虫刺されの際に鼻水が出たり、かゆみが生じるのは、体内でヒスタミンが働いているためです。 \n ヒスタミンが多すぎる場合、アレルギー症状が悪化し、皮膚や呼吸器に問題が生じやすくなることもあります。さらに、ヒスタミンは消化器にも影響を与え、特に胃で胃酸を増加させることで食べ物の消化を助けます。しかし、過剰なヒスタミンが原因で胃酸が過剰分泌されると、胃痛や胃炎、さらには胃潰瘍などの問題が発生することがあります。"}
            />
            
            <Quality
                description={"ミトコンドリアタイプの特性には、以下のような可能性があります。"}
                qualities1={["細かく正確性の求められる作業が得意", "ルーティンワークが得意", "部屋が綺麗", "士業に向いている", "集中力・記憶力が高い", "慎重", "肌荒れやアレルギーに悩む", "頭痛がしやすい"]}
                qualities2={["騒がしい場所が苦手", "胃腸が痛くなりやすい", "偏食になりやすい", "不安、感覚過敏"]}

            />
            <PageNumber>
                05
            </PageNumber>
        </PageWrapper>
    </>)
}

export default Concept;
