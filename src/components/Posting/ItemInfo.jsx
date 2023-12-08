import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setKeyword } from "store/Redux/ItemReducer"; // 해당 액션 임포트
import { filterItemsByKeyword } from "store/Redux/ItemReducer"; // 필터링 함수 임포트
import "assets/CSS/Upload/ItemInfo.css";
import { CiSquarePlus } from "react-icons/ci";
const ItemInfo = () => {
  const dispatch = useDispatch();
  const searchKeyword = useSelector((state) => state.items.searchKeyword); // 검색어 가져오기
  useEffect(() => {
    dispatch(setKeyword(""));
  }, [dispatch]);
  const filteredItems = filterItemsByKeyword(searchKeyword); // 검색어에 따라 필터링된 아이템

  const [isEntered, setIsEntered] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  console.log(selectedItem);
  const handleSearchItem = (e) => {
    dispatch(setKeyword(e.target.value));
    if (e.target.value.length > 0) setIsEntered(true);
    if (e.target.value === "") setIsEntered(false);
  };

  const handleOptionChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedItem(selectedValue);
  };

  return (
    <div id="ItemInfo">
      <label id="handleSearchItem">
        <input
          type="text"
          placeholder="상품명 검색"
          onChange={handleSearchItem}
        />
      </label>
      <div id={isEntered ? "ShowItems" : "HideItems"}>
        {filteredItems.length === 0 && (
          <button value="기타" onClick={handleOptionChange} id="ShowItemsETC">
            <CiSquarePlus id="etcICON" />
            <p>기타 제품</p>
          </button>
        )}
        <div
          id={isEntered ? "ShowItems" : "HideItems"}
          style={{
            height: `${0 + filteredItems.length * 20}px`,
          }}
        >
          {filteredItems.map((prod) => (
            <div key={prod.id}>
              <button value={prod.id} onClick={handleOptionChange}>
                {/* <img src={prod.images} alt="" /> */}
                <img
                  src="https://www.theknightnews.com/wp-content/uploads/2023/11/TaylorSwift_EraTour.jpg"
                  alt=""
                />
                <p>{prod.title}</p>
                {/* {truncateText(prod.title, 15)} */}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ItemInfo;
