import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setKeyword } from "store/Redux/ItemReducer"; // 해당 액션 임포트
import { filterItemsByKeyword } from "store/Redux/ItemReducer"; // 필터링 함수 임포트
import "assets/CSS/Upload/ItemInfo.css";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
const ItemInfo = ({ onCheck }) => {
  const dispatch = useDispatch();
  const searchKeyword = useSelector((state) => state.items.searchKeyword); // 검색어 가져오기
  const [keyword, setkey] = useState("");
  useEffect(() => {
    dispatch(setKeyword(""));
  }, [dispatch]);
  const filteredItems = filterItemsByKeyword(searchKeyword); // 검색어에 따라 필터링된 아이템
  const [isDivVisible, setIsDivVisible] = useState(true);
  const [isEntered, setIsEntered] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const handleSearchItem = (e) => {
    dispatch(setKeyword(e.target.value));
    setkey(e.target.value);
    if (e.target.value.length > 0) setIsEntered(true);
    if (e.target.value === "") {
      setIsEntered(false);
    }
  };

  const handleOptionChange = (prod) => {
    console.log(prod);
    if (prod === "etc") {
      onCheck({
        id: "etc",
        title: "기타 제품",
      });
      setSelectedItem({
        id: "etc",
        title: "기타 제품",
      });
    } else {
      setSelectedItem(prod);
      onCheck(prod);
    }
    setIsDivVisible(false);
  };
  const selectedItemAgain = () => {
    dispatch(setKeyword(""));
    setkey("");
    setSelectedItem({});
    setIsDivVisible(true);
  };

  return (
    <div id="ItemInfo">
      {selectedItem.title === undefined && (
        <label id="handleSearchItem">
          <input
            type="text"
            placeholder="상품명 검색"
            onChange={handleSearchItem}
          />
        </label>
      )}
      {selectedItem.title !== undefined && (
        <div id="selectedItem">
          {selectedItem.id === "etc" && (
            <BsFillQuestionSquareFill id="checkedETC" />
          )}
          {/* <img src={prod.images} alt="" /> */}
          {selectedItem.id !== "etc" && (
            <img
              src="https://www.theknightnews.com/wp-content/uploads/2023/11/TaylorSwift_EraTour.jpg"
              alt=""
            />
          )}
          <p>{selectedItem.title}</p>
          <button onClick={selectedItemAgain}>
            <MdCancel />
          </button>
        </div>
      )}

      <div id="buttonsInput">
        {isDivVisible && filteredItems.length === 0 && (
          <button
            value="기타"
            onClick={() => handleOptionChange("etc")}
            id="ShowItemsETC"
          >
            <BsFillQuestionSquareFill id="etcICON" />
            <p>기타 제품</p>
          </button>
        )}
        {isDivVisible && keyword !== "" && (
          <div
            id={isEntered ? "ShowItems" : "HideItems"}
            style={{ height: `${filteredItems.length * 3.2}rem` }}
          >
            {filteredItems.map((prod) => (
              <div key={prod.id}>
                <button value={prod} onClick={() => handleOptionChange(prod)}>
                  {/* <img src={prod.images} alt="" /> */}
                  <img
                    src="https://www.theknightnews.com/wp-content/uploads/2023/11/TaylorSwift_EraTour.jpg"
                    alt=""
                  />
                  <p>{prod.title}</p>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default ItemInfo;
