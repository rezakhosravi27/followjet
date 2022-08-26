import React from 'react';

const UpFooterTwo = () => {
    return(
        <div className="up-footer-two">
            <div className="up-footer-two-box">
                <div>
                    <img src="/images/13.png" />
                </div>
                <div>
                    <img src="/images/14.png" />
                </div>
                <div>
                    <img src="/images/15.png" />
                </div>
                <div>
                    <img src="/images/16.png" />
                </div>
            </div>
        </div>
    )
}


const CreateCard = () => {
    return(
        <div className="myCard">
            <div className="card-header">
(1K) ۱۰۰۰ فالوور ایرانی</div>
            <div className="card-body">
                <p>۸۵٬۰۰۰ تومان</p>
                <span>بدون نیاز به پسورد
</span>
                <ul>
                    <li> ضمانت بازگشت وجه</li>
                    <hr/>
                    <li> ضمانت جبران ریزش</li>
                    <hr/>
                    <li> بدون نیاز به فالو دیگران</li>
                    <hr/>
                    <li> پشتیبانی سریع و حرفه‌ای</li>
                </ul>
            </div>
            <div className="card-footer">
                <a href="#" style={{padding:'.5rem 2rem' , backgroundColor:'red' , borderRadius:'10px'}}>خريد</a>
            </div>
        </div>
    )
}



const UpFooterTree = () => {
    return(
        <div className="up-footer-tree">
            <div className="up-footer-tree-box">
                <p style={{borderBottom:'.5px dashed #fff' , color:'white' , fontSize:'1.5rem'}}>پر فروش ترین بسته ها</p> 
                  <div className="container-card">
                      <CreateCard />
                      <CreateCard />
                      <CreateCard />
                      <CreateCard />
                  </div>
            </div>
            <hr style={{color:'white' , width:'100%'}}/>
        </div>
    )
}



const UpFooter = () => {
    return (
        <>
        <div className="up-footer">
            <div className="up-footer-box">
                <span style={{fontSize:'1.5rem'}}>برخی از برندهایی که به ما اعتماد کرده اند</span>
                <p>فالوجت ، قدیمی ترین و بزرگترین ربات و سرویس افزایش فالوور اینستاگرام با بیش از ۶ سال سابقه</p>
            </div>
        </div>
        <UpFooterTwo />
        <UpFooterTree />
        </>
    );
};

export default UpFooter;