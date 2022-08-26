import React from 'react' ;
import Image from 'next/image' ;



const Header = () => {
    return(
        <header id="header">


            <div>
                <div className="navbar-mobile">
                    <div className="navbar-mobile-right">
                        <i className="fa fa-bars"></i>
                        <img src="/images/logo.png" />
                    </div>
                    <div className="navbar-mobile-left">
                        <i className="fa fa-user"></i>
                        <i className="fa fa-phone-square"></i>
                    </div>
                </div>
            </div>



            <nav className="navbar-one">
                <a href="#" style={{flexGrow:1}}>
                    <img  src="/images/logo.png" style={{height:'auto' , width:'7.5rem'}}/>
                </a>
                <div style={{marginLeft:'60px'}}>
                    <ul>
                        <li>پرسش و پاسخ </li>
                        <li>پشتیبانی </li>
                        <li>وبلاگ آموزشي</li>
                    </ul>
                </div>
                <div classname="navbar-one-left">
                    <div>
                    <a href="#" style={{fontFamily:'sans-serif' , marginLeft:'2rem' , fontSize:'.9rem'}}>031-36640229</a>
                    </div>
                    <div>
                    <a href="" style={{border:'.5px solid white' , borderRadius:'20px' , padding:'.2rem .7rem' , fontSize:'.9rem'}}>ورود/ثبت نام</a>
                    </div>
                </div>
            </nav>



            <nav className="navbar-two">
                <ul>
                    <li><a href="#">فالوور<i className="fa fa-caret-left" style={{marginRight:'10px' , verticalAlign:'-2px'}}></i></a>
                    </li>
                    <li><a href="#">لايك (like)<i className="fa fa-caret-left" style={{marginRight:'10px' , verticalAlign:'-2px'}}></i></a></li>
                    <li><a href="#">بازديد (ويو)<i className="fa fa-caret-left" style={{marginRight:'10px' , verticalAlign:'-2px'}}></i></a></li>
                    <li><a href="#">كامنت ايراني</a></li>
                    <li><a href="#">رفتن به اکسپلور</a></li>
                    <li><a href="#">بازديد لايو</a></li>
                    <li><a href="#">خدمات كلاب هاوس<i className="fa fa-caret-left" style={{marginRight:'10px' , verticalAlign:'-2px'}}></i></a></li>
                    <li>يوتيوب</li>
                    <li><a href="#">ساير خدمات<i className="fa fa-caret-left" style={{marginRight:'10px' , verticalAlign:'-2px'}}></i></a></li>
                </ul>
            </nav>
            <div className="navbar-tablet">
                <i className="fa fa-bars"></i>
            </div>
            <div className="container-header-content">
                <div classname="header-content">
                    <p style={{fontSize:'1.1rem' , fontFamily:'homa'}}>یک راه بهتر برای رشد فالوورهاتون وجود داره!​</p>
                    <p style={{fontSize:'1.1rem' , fontFamily:'nazanin'}}>با فالوجت، لایک و فالوور حقیقی ایرانی دریافت کن <br />اعتبار پیجت رو بالا ببر و برندتو بساز</p>
                     <div style={{marginTop:'3rem'}} className="container-header-a-button">
                        <a href="#" className="button-header">ديدن همه خدمات</a>
                        <a href="#" className="button-header">خريد فالوور فوري</a>
                     </div>
                </div>
                <div className="container-header-image">
                    <img src="/images/2.png"/>
                </div>
            </div>
        </header>
    )
}

export default Header ;