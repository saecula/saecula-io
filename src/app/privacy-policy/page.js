import React from 'react';
import style from './page.module.css';

const PrivacyPolicyPage = () => {
    return (
        <div className={style.container}>
            <div className={style.item} >{"I'm adding the ability to sign in to my site using Oauth (like Google and Apple) solely for the fun of learning about auth."}</div>
            <div className={style.item} >{"If you choose to log in thusly, I will ask for your email address in order to provide the server with some minimal object permanence about your visits here. I will store these emails in an encrypted form and will never share them willingly. I won't look at or store other details in your remote profile."}</div>
            <div className={style.item} >{"I may provide ways for you to add information to your own in-site, custom profile. If so, please don't add any information whatsoever you'd be upset to find had a) vanished, b) been shared with your worst enemy, or c) surfaced alongside your name and photo on the front page of the New York Times. (Protecting information is hard.)"}</div>
            <div className={style.item} >{"If you hate all of that, never fear, just play around on the site anonymously. You can also try it out and then delete your profile information later if you decide you hate it."}</div>
        </div>
    );
}

export default PrivacyPolicyPage;