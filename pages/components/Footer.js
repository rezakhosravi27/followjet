import React from 'react' ;
import Image from 'next/image' ;


const Footer = () => {
    return(
        <div class="footer-container">
            <div className="footer-box">
                <div className="footer-logo">
                    <Image src="/images/logo_white_Farsi.svg" width={700} height={300}/>
                </div>
                <div className="footer-content">
                    <ul className="footer-menu">
                        <li>تماس با ما</li>
                        <li>قوانين و مقررات</li>
                        <li>اينستاگرام ما</li>
                        <li>تلگرام</li>
                        <li>ورود/ثبت نام</li>
                        <li>وايت ليبل(نمايندگي)</li>
                        <li>api</li>
                    </ul>
                </div>
                <div class="copy-right" style={{marginTop:'2rem'}}>
                    <p style={{textAlign:'center' , fontSize:'.6rem' , color:'white'}}>کلیه حقوق این سایت متعلق به فالوجت می باشد.</p>
                </div>
            </div>

        </div>
    )
}

export default Footer ;