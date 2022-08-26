import React from 'react' ;



const ContainerContent = () => {
    return(
        <div className="container-content">
            <div className="container-content-box">
                <div style={{display:'flex' , justifyItems:'center' , alignItems:'center'  , width:'100%' , height:'auto' , boxSizing:'border-box' , padding:'1rem'} } className="container-content-box-image">
                    <div className="img-family"><img src="/images/11.png" /></div>
                </div>
                <div style={{paddingTop:'2rem'}} className="under-header-img-content">
                    <h3 style={{color:'#333'}}>فالوور هایی که اعتبار شما را بیشتر میکنند</h3>
                    <p style={{fontFamily:'nazanin'}}>فالوجت با دارا بودن شبکه ای از کاربران ایرانی اینستاگرام بستری را برای  تبادل لایک، فالوور وسایر خدمات شبکه های اجتماعی فراهم آورده است. 
                        پس از سفارش، شبکه کابران فالوجت بسته به نوع سرویس درخواستی شما، شما را در اینستاگرام فالو یا لایک میکنند و یا برای شما کامنت می گذارند.
                    </p>
                    <div>
                        <span style={{marginLeft:'3rem'}}><i className="fa fa-check-square" style={{color:'green'}}></i> کاربران حقیقی</span>
                        <span><i className="fa fa-check-square" style={{color:'green'}}></i> فالوورهای فعال با هویت ایرانی</span>
                    </div>
                    <div className="container-button-p">
                         <a href="#">شروع رشد در اينستاگرام</a>
                    </div>

                </div>
            </div>
        </div>
    )
}



const ContainerContentTree = () => {
    return(
        <div className="container-content-tree">
            <div className="container-content-tree-box">
                <div className="container-content-tree-content">
                    <h4>پشتیبانی تلفنی همیشه در کنارتونه</h4>
                    <p>تیم ۸ نفره پشتیبانی صمیمی فالوجت</p>
                    <p>هر روز از ساعت ۹ صبح تا ۷ شب</p>
                    <p>همچنین از طریق واتس اپ، تگرام، ایمیل و چت آنلاین ۲۴ ساعته در کنارتونیم.</p>
                    <div className="container-content-tree-icon">
                        <span><i className="fa fa-check-square" style={{color:'green'}}></i>کاربران حقیقی</span>
                        <span><i className="fa fa-check-square" style={{color:'green'}}></i>فالوورهای فعال با هویت ایرانی</span>
                    </div>
                    <div className="container-content-tree-button">
                        <a href="#">شروع رشد در اينستاگرام</a>
                    </div>
                </div>
                <div className="container-content-tree-image">
                    <img src="/images/12.png" />
                </div>
            </div>
        </div>
    )
}



const ImageMobileContent = () => {
    return(
        <div className="imageMobileContent-container">
            <div className="ImageMobileContent-box">
                <div className="ImageMobileContent-content">
                    <h3>مثل چهر های محبوب و برندهای معتبر سریع رشد کنید</h3>
                    <p style={{color:'gray'}}>بسیاری از برندهای برتر و چهره های مطرح ورزش ، سینما و هنر سالهاست به فالوجت اعتماد کرده اند و توانسته ایم بسیاری از چهرهای ایرانی را تا رسیدن به فالوورهای میلیونی همراهی کنیم</p>
                </div>
                <div className="ImageMobileContent-image">
                    <div className="ImageMobileContent-image1">
                        <img src="/images/balayi.png" style={{width:'9rem' , height:'8rem'}} />
                    </div>
                    <div className="ImageMobileContent-image2">
                        <img src="/images/mobile.png" style={{width:'28rem' , height:'30rem'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}








const UnderHeader = () => {
    return(
        <>
        <div className="under-header">
            <p>تا کنون به بیش از ۶۰۰۰+ برند ایرانی برای رشد در اینستاگرام کمک کرده ایم</p>
            <div className="container-images-under-header">
                <div className="containerImage">
                    <img src="/images/3.png" />
                </div>
                <div className="containerImage">
                    <img src="/images/4.png" />
                </div>
                <div className="containerImage">
                    <img src="/images/5.png" />
                </div>
                <div className="containerImage">
                    <img src="/images/6.png" />
                </div>
            </div>
        </div>
        <div className="container-icon">
            <div className="container-icon-box">
                <img src="/images/7.png" />
                <a href="#" className="icon-button">خريد بازديد ايراني</a>
            </div>
            <div className="container-icon-box">
                <img src="/images/8.png" />
                <a href="#" className="icon-button">خريد لايك ايراني</a>
            </div>
            <div className="container-icon-box">
                <img src="/images/9.png" />
                <a href="#" className="icon-button">خريد كامنت ايراني</a>
            </div>
            <div className="container-icon-box">
                <img src="/images/10.png" />
                <a href="#" className="icon-button">خريد فالوور ايراني</a>
            </div>
        </div>
        <ContainerContent />
        <ContainerContentTree />
        <ImageMobileContent />
        </>
    )
}

export default UnderHeader ;