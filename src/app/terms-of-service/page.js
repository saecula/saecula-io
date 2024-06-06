import React from 'react';

import terms from './terms-of-service.js';


const TermsOfServicePage = () => {
    return (
        <div style={{padding: '3em', lineHeight: 1.5 }}>
        <div dangerouslySetInnerHTML={{ __html: terms }} />
        </div>
    );
    }


export default TermsOfServicePage;