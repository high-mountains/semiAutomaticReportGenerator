import PageWrapper from "../../../../components/Pdf/PageWrapper";
import PageNumber from "../../../../components/Pdf/PageNumber";
import PageHeader from "../../../../components/Pdf/PageHeader";
import Fourperiod from "../../../../components/Pdf/PagesComponents/PeriodAnalyze/Fourperiod";
import Improvement from "../../../../components/Pdf/PagesComponents/PeriodAnalyze/Improvement";
import withPeriodanalyze from "../../../../components/Pdf/HOC/withperiodanalyze";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Periodanalyze = (props) => {
    const [mainColor, setMainColor] = useState(
        useSelector((state) => state.pdfData.glutamateColor)
    );

    const pdfFlag = useSelector((state) => state.pdfData.pdfFlag);
    const [renderedPdfFlag, setRenderedPdfFlag] = useState(pdfFlag);

    useEffect(() => {
        setRenderedPdfFlag(pdfFlag);
    }, [pdfFlag]);

    const EnhancedPeriodanalyze = withPeriodanalyze([
        {
            Component: PageHeader,
            data: {
                // subtitle: "Glutamate Type",
                mainTitle: "Glutamate Type",
            },
        },

        {
            Component: Fourperiod,
            data: {
                firstSenctences:
                    "Children with glutamate type tend to be <span class='bold'>curious</span>, have a <span class='bold'>strong desire to learn</span>, and <span class='bold'>absorb knowledge quickly</span>. They also have high concentration and tend to become engrossed in specific play and learning. However, excessive glutamate during periods of rapid brain development is said to pose a risk of affecting brain development and behavior.",
                secondSenctences:
"When they enter adolescence, their desire for knowledge increases and they become very interested in self-exploration. They have an incredible ability to concentrate and become absorbed in subjects that interest them, but tend to show little interest in subjects that do not interest them. They may achieve high grades in their favorite subjects, but may not put much effort into other subjects. They may also pursue their own interests without worrying about the opinions of others and strive for perfection. During this period, their emotions are intense, and due to changes in their hormone balance and brain restructuring, excess glutamate may cause emotional instability and impulsive behavior, so caution is required.",
                thirdSenctences:
"As adults, they tend to be successful in their careers and at home thanks to their high level of concentration and knowledge, and have a strong desire to continue learning new things. However, they are more likely to accumulate stress from work and family pressures, which can affect glutamate levels and worsen chronic anxiety and depression, so caution is required.",
                fourthSenctences:
"After menopause, changes in hormone balance affect glutamate metabolism, which can lead to a decline in concentration and memory. It is also believed that the risk of neurodegenerative diseases gradually increases during this period. Excess glutamate can cause neurotoxicity, which can be associated with cognitive decline and mood swings, so caution is required.",
            },
        },

        {
            Component: Improvement,
            data: {
                wrapperWidth: "525rem",
                mainColor: mainColor,
                description: "Recommended lifestyle improvements for glutamate types",
                gap: 10,
                qualities1: [
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Avoid consuming junk food and foods that contain a lot of glutamic acid as a food additive.</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p><span class='blue'>Gluten Free</span>Try to eat plenty of vegetables and fruits.</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Eat foods that contain omega-3 fatty acids (such as fish, flaxseed oil, and chia seeds) to support brain health.</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>In order to alleviate neurotoxicity, try to live a detox lifestyle and incorporate condiments and other ingredients.</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Have regular sleep habits and get enough sleep.</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Establish a relaxation routine before bed to improve the quality of your sleep.</p>`,
                    },
                ],
                oneColumnStatus: true,
                inContainerGap: 15,
                eachUlWidth: 255,

                ulStyle1: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "-1rem",
                    lineHeight: 1.448333,
                    fontSize: "12rem",
                },
            },
        },

        {
            Component: PageNumber,
            data: {
                children: "06",
            },
        },
    ]);

    return (
        <PageWrapper>
            <EnhancedPeriodanalyze />
        </PageWrapper>
    );
};

export default Periodanalyze;
