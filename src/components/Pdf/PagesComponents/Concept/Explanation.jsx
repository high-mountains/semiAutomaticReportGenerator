import React, { useEffect, useState } from 'react';
import Text from "../../Text"

const Explanation = (props) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '30rem', marginBottom: '30rem', gap: '10rem' }
    }>
            <Text
                sidebar={1}
                sidebarColor={props.sidebarColor}
                textContent={props.question}
            />
            <Text
                textContent={props.answer}
                fontSize={14}
                className={`${props.className}`}
                style={{ fontWeight: 'normal', whiteSpace: 'pre-wrap', width: '535rem' }}
            />
        </div>
    );
}

export default Explanation;