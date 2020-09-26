import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="">
        <div className="p-6">
            <div className="grid grid-cols-2 gap-2 justify-items-center mt-6 mb-8">
                <div>
                    <h2 className="text-4xl font-bold mb-4">借上社宅で企業も社員も支出を削減！</h2>
                    <p className="text-base">借上社宅.comは借上社宅の導入・運用を手軽にし企業と社員の課税支出を軽減するサービスです</p>
                </div>
                <img src="assets/images/Group9.png"></img>
            </div>
        </div>
        <div className="bg-pale-green p-6 w-full">
            <div className="flex justify-center mb-4">
                <a id="about" />
                <h2 className="text-xl font-bold">借上社宅とは？</h2>
            </div>
            <div className="grid grid-cols-2 gap-2 justify-items-center mb-8">
                <div>
                    <p className="text-base mb-4">借上社宅とは、社員が住みたい賃貸住宅を会社が借りて、それを従業員に貸し出すことで家賃を経費として計上することができる仕組みです。</p>
                    <p className="text-base mb-4">企業はそれまで賃金として支払っていたお金が経費として計上でき、社員は給料等級が下がるので企業・社員ともに大幅な節税が期待できます。</p>
                    <p className="text-base mb-4">借上社宅.comは借上社宅の運用手間を軽減し、導入しやすくするサービスです。</p>
                </div>
                <img src="assets/images/Group3.png"></img>
            </div>
        </div>
        <div className="p-6">
            <div className="flex justify-center mb-4">
                <a id="merit" />
                <h2 className="text-xl font-bold">メリット</h2>
            </div>
            <div className="grid grid-cols-2 gap-2 justify-items-center mb-8">
                <div>
                    <img src="assets/images/Group5.png"></img>
                    <li>福利厚生が充実し社員の離職防止に繋がる</li>
                    <li>社会保険料が削減される</li>
                    <li>家賃が経費計上できるので課税所得が減少する</li>
                    <li>契約、更新、解約の手続きが楽になる</li>
                </div>
                <div>
                    <img src="assets/images/Group4.png"></img>
                    <li>家賃負担額が減少する</li>
                    <li>家賃が給与から天引きされる</li>
                    <li>家賃分の所得が抑えられ税負担が軽減する</li>
                    <li>賃貸契約書の管理が楽になる</li>
                </div>
            </div>
        </div>
        <div className="p-6">
            <div className="flex justify-center mb-4">
                <a id="feature" />
                <h2 className="text-xl font-bold">借上社宅.comの特徴</h2>
            </div>
            <div className="flex justify-center mb-2">
                <div className="bg-main-orange text-white font-bold rounded p-4 mx-auto">
                    <h3 className="text-xl">初期費用ゼロ円！！！</h3>
                    <p>〜借上社宅１件から気軽に導入できます！〜</p>
                </div>
            </div>
            <div className="flex justify-center mb-2">
                <img src="assets/images/Group8.png"></img>
            </div>
            <div className="flex justify-center mb-2">
                <div>                
                    <li>利用料は借上社宅の件数分(1,500¥/月)だけ</li>
                    <li>賃貸契約に関わる書類の管理を全てオンラインで完結</li>
                    <li>更新手続もボタンを押すだけで完了！</li>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Header;
