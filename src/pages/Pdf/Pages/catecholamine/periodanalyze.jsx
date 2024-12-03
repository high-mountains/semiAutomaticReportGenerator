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
        useSelector((state) => state.pdfData.catecholamineColor)
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
                // subtitle: "Catecholamine Type",
                mainTitle: "Catecholamine Type",
            },
        },
        {
            Component: Fourperiod,
            data: {
                firstSenctences:
                    "They are emotionally rich, easily feel joy and excitement, and have a strong sense of curiosity about new things. However, when there is an excess of catecholamines, they tend to show hyperactivity, attention deficit, impulsive behavior, and have difficulty controlling their emotions. In addition, they tend to have tantrums and react sensitively to excessive stimuli, so it is important to create a calm and secure environment for them.",
                secondSenctences:
                    "During adolescence, the influence of catecholamines leads to energetic and impulsive behavior, and the desire to try many things increases. However, the emotional waves are intense, and <span class='bold'>sudden anger</span> and <span class='bold'>anxiety</span> tend to explode, and conflicts with friends and family may increase. On the other hand, strong concentration and passion are likely to lead to <span class='bold'>excellent results</span> in studies and hobbies.",
                thirdSenctences:
                    "Social pressures and responsibilities can make you susceptible to stress, which can lead to insomnia and mood swings over time. This can make you act impulsively, but you also have the energy and focus to make big decisions and keep working towards your goals. Stress management and relaxation are key to staying healthy during this time.",
                fourthSenctences:
                    "After menopause, the influence of catecholamines increases due to changes in hormone balance, making it easier to feel emotional fluctuations and anxiety. If your COMT activity is low, symptoms such as anxiety and hot flashes may intensify, but you also have the determination and flexibility based on your experience. It is important to refresh your mind and body through relaxation and hobbies.",
            },
        },
        {
            Component: Improvement,
            data: {
                wrapperWidth: "525rem",
                mainColor: mainColor,
                description: "Recommended lifestyle improvements for catecholamine types",
                gap: 10,
                qualities1: [
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Avoid caffeine, sugary foods, and processed foods, as these can increase catecholamine levels.</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>If you experience redness in the face, headaches, or nausea when you drink alcohol, this is because catecholamine metabolism is being inhibited, resulting in an excess of catecholamines. Adjust the amount and frequency of your drinking.</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p><span class='blue'>Since it is easily affected by intestinal flora, be careful not to become constipated.</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Eat foods that contain omega-3 fatty acids (such as fish, flaxseed oil, and chia seeds) to support brain health.</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Eat more antioxidants (fruits and vegetables) to reduce oxidative stress in the body.</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Reduce stress by practicing relaxation techniques such as meditation, deep breathing, and yoga.</p>`,
                    },
                    {
                        content: `<div style='width: 5rem; aspect-ratio: 1/1; margin-left: 3rem; margin-top: ${
                            renderedPdfFlag ? "12" : "4"
                        }rem; border-radius: 50%; background-color: rgba(72,79,81,1); margin-right: 8rem'></div><p>Make sure you get enough rest and relaxation time, and learn how to manage your impulsivity and anger.</p>`,
                    },
                ],

                oneColumnStatus: true,
                ulStyle1: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                    lineHeight: 1.333,
                    fontSize: "11rem",
                },
            },
        },
        {
            Component: PageNumber,
            data: {
                children: "09",
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
