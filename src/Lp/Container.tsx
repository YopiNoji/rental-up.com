import React from "react";
import TextField from "@/components/TextField";
import Button from "@/components/Button";

const Header: React.FC = () => {
  const [companyName, setCName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  return (
    <div className="">
      <div className="p-6">
        <div className="grid grid-cols-2 gap-2 justify-items-center mt-6 mb-8">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              借上社宅で企業も社員も支出を削減！
            </h2>
            <p className="text-base">
              借上社宅.comは借上社宅の導入・運用を手軽にし企業と社員の課税支出を軽減するサービスです
            </p>
          </div>
          <img src="assets/images/Group9.png" alt="image"></img>
        </div>
      </div>
      <div className="bg-pale-green p-6 w-full">
        <div className="flex justify-center mb-2">
          <a id="about" />
          <h2 className="text-xl font-bold">借上社宅とは？</h2>
        </div>
        <div className="flex justify-center mb-6">
          <div className="w-6 border-b-2 border-main-green"></div>
        </div>
        <div className="grid grid-cols-2 gap-2 justify-items-center mb-8">
          <div>
            <p className="text-base mb-4">
              借上社宅とは、社員が住みたい賃貸住宅を会社が借りて、それを従業員に貸し出すことで家賃を経費として計上することができる仕組みです。
            </p>
            <p className="text-base mb-4">
              企業はそれまで賃金として支払っていたお金が経費として計上でき、社員は給料等級が下がるので企業・社員ともに大幅な節税が期待できます。
            </p>
            <p className="text-base mb-4">
              借上社宅.comは借上社宅の運用手間を軽減し、導入しやすくするサービスです。
            </p>
          </div>
          <img src="assets/images/Group3.png" alt="image"></img>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-center mb-2">
          <a id="merit" />
          <h2 className="text-xl font-bold">メリット</h2>
        </div>
        <div className="flex justify-center mb-6">
          <div className="w-6 border-b-2 border-main-green"></div>
        </div>
        <div className="grid grid-cols-2 gap-2 justify-items-center mb-8">
          <div>
            <img src="assets/images/Group5.png" alt="image"></img>
            <ul>
              <li>福利厚生が充実し社員の離職防止に繋がる</li>
              <li>社会保険料が削減される</li>
              <li>家賃が経費計上できるので課税所得が減少する</li>
              <li>契約、更新、解約の手続きが楽になる</li>
            </ul>
          </div>
          <div>
            <img src="assets/images/Group4.png" alt="image"></img>
            <ul>
              <li>家賃負担額が減少する</li>
              <li>家賃が給与から天引きされる</li>
              <li>家賃分の所得が抑えられ税負担が軽減する</li>
              <li>賃貸契約書の管理が楽になる</li>
            </ul>
            ∂
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-center mb-2">
          <a id="feature" />
          <h2 className="text-xl font-bold">借上社宅.comの特徴</h2>
        </div>
        <div className="flex justify-center mb-6">
          <div className="w-6 border-b-2 border-main-green"></div>
        </div>
        <div className="flex justify-center mb-2">
          <div className="bg-main-orange text-white font-bold rounded p-4 mx-auto">
            <h3 className="text-xl">初期費用ゼロ円！！！</h3>
            <p>〜借上社宅１件から気軽に導入できます！〜</p>
          </div>
        </div>
        <div className="flex justify-center mb-8">
          <img src="assets/images/Group8.png" alt="image"></img>
        </div>
        <div className="flex justify-center mb-2">
          <div>
            <ul>
              <li>利用料は借上社宅の件数分(1,500¥/月)だけ</li>
              <li>賃貸契約に関わる書類の管理を全てオンラインで完結</li>
              <li>更新手続もボタンを押すだけで完了！</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-pale-green p-6 w-full">
        <div className="flex justify-center mb-2">
          <a id="register" />
          <h2 className="text-xl font-bold">事前ユーザー登録</h2>
        </div>
        <div className="flex justify-center mb-6">
          <div className="w-6 border-b-2 border-main-green"></div>
        </div>
        <div className="flex flex-col mb-8">
          <p className="text-center">登録していただいた企業様は</p>
          <p className="text-center">
            ベータ版リリース後、優先的にご連絡差し上げます！
          </p>
        </div>
        <div className="flex justify-center mb-4">
          <TextField
            onChange={(e) => {
              setCName(e.target.value);
            }}
            label="法人名"
          />
        </div>
        <div className="flex justify-center mb-4">
          <TextField
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            label="メールアドレス"
            require
          />
        </div>
        <div className="flex justify-center mb-8">
          <TextField
            onChange={(e) => {
              setName(e.target.value);
            }}
            label="担当者名"
            require
          />
        </div>
        <div className="flex justify-center mb-4">
          <Button label="今すぐ事前ユーザー登録" />
        </div>
      </div>
    </div>
  );
};

export default Header;
