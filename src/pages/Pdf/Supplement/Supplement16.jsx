import React, { useState } from "react";
import PageWrapper from "../../../components/Pdf/PageWrapper";
import PageNumber from "../../../components/Pdf/PageNumber";
import TableNew from "../../../components/Pdf/Supplements/TableNew";

const Supplement16 = (props) => {
    return (
        <PageWrapper>
            <TableNew
                tBody={[
                    {
                        thContent: {
                            main: "トラウマ",
                            sub: "精神的・肉体的な傷を引き起こす強いストレス体験で、心的外傷やストレス反応に関わる",
                        },
                        tdContent: {
                            gen: "CRHR1",
                            danger: 0,
                            description:
                                "L-テアニン, ロディオラ, アシュワガンダ, ビタミンB群, マグネシウム, オメガ3",
                        }
                    },
                    {
                        thContent: {
                            main: "夜更かし",
                            sub: "遅くまで起きている習慣で、健康や生活リズムに影響を関わる",
                        },
                        tdContent: {
                            gen: "CLOCK",
                            danger: 0,
                            description:
                                "メラトニン, マグネシウム, GABA, オメガ3, ビタミンB12",
                                etc: "過剰なカフェイン, 喫煙, 焦げた肉",
                                etcClassName: "tracking-[-0.5rem]"
                        }
                    }
                ]}
            />
            {/* Old Table code can be safely removed if no longer needed */}
            <PageNumber>41</PageNumber>
        </PageWrapper>
    );
};

export default Supplement16;
