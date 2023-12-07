import "assets/CSS/Mypage/Mypage.css";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import InfoBar from "components/Mypage/InfoBar";
import MypageNavBar from "components/Mypage/MypageNav";
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
