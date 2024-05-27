import React from 'react';

import terms from './terms-html.js';


const TermsOfServicePage = () => {
    return (
        <div style={{padding: '3em'}}>
        <div dangerouslySetInnerHTML={{ __html: terms }} />
        </div>
    );
    }


export default TermsOfServicePage;