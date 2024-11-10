import React from 'react';
import PageWrapper from '../../../components/Pdf/PageWrapper';
import PageHeader from '../../../components/Pdf/PageHeader';
import PageNumber from '../../../components/Pdf/PageNumber';

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
                    marginBottom: "25rem"
                }}
            />
            <div>
                First References
            </div>
            <PageNumber>
                xx
            </PageNumber>
        </PageWrapper>
    );
};

export default First;