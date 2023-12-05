import "assets/CSS/Mypage/Mypage.css";
import Header from "components/header/Header.js";
import Footer from "components/footer/Footer.js";
import InfoBar from "components/Mypage/InfoBar.js";
import MypageNavBar from "components/Mypage/MypageNav.js";
const Mypage = () => {
  return (
    <div>
      <Header />
      <div className="Mypage">
        <InfoBar />
        <MypageNavBar />
      </div>
      <Footer />
    </div>
  );
};
export default Mypage;
