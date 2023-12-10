import React, { useState } from "react";
import "assets/CSS/Upload/TypeRadio.css";
const TypeRadio = ({ TypeCheck }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    TypeCheck(selectedValue);
  };

  return (
    <div className="radioType">
      {selectedOption === "" && <p> 종류를 골라주세요 </p>}
      {selectedOption === "cat" && <p> 🐱고양이 </p>}
      {selectedOption === "dog" && <p>🐶강아지 </p>}
      {selectedOption === "bird" && <p>🐥새 </p>}
      {selectedOption === "fish" && <p> 🐟물고기 </p>}
      {selectedOption === "설치류" && <p> 🐹설치·토끼류 </p>}
      {selectedOption === "파충류/양서류" && <p>🦖파충류·양서류 </p>}
      {selectedOption === "기타" && <p>🐉기타동물 </p>}
      <div className="radioDiv">
        <label id={selectedOption === "cat" ? "checked" : ""}>
          <input
            type="radio"
            value="cat"
            checked={selectedOption === "cat"}
            onChange={handleOptionChange}
          />
          🐱고양이
        </label>
        <label id={selectedOption === "dog" ? "checked" : ""}>
          <input
            type="radio"
            value="dog"
            checked={selectedOption === "dog"}
            onChange={handleOptionChange}
          />
          🐶강아지
        </label>
        <label id={selectedOption === "bird" ? "checked" : ""}>
          <input
            type="radio"
            value="bird"
            checked={selectedOption === "bird"}
            onChange={handleOptionChange}
          />
          🐥새
        </label>
        <label id={selectedOption === "fish" ? "checked" : ""}>
          <input
            type="radio"
            value="fish"
            checked={selectedOption === "fish"}
            onChange={handleOptionChange}
          />
          🐟물고기
        </label>
        <label id={selectedOption === "설치류" ? "checked" : ""}>
          <input
            type="radio"
            value="설치류"
            checked={selectedOption === "설치류"}
            onChange={handleOptionChange}
          />
          🐹설치·토끼류
        </label>
        <label id={selectedOption === "파충류/양서류" ? "checked" : ""}>
          <input
            type="radio"
            value="파충류/양서류"
            checked={selectedOption === "파충류/양서류"}
            onChange={handleOptionChange}
          />
          🦖파충류·양서류
        </label>
        <label id={selectedOption === "기타" ? "checked" : ""}>
          <input
            type="radio"
            value="기타"
            checked={selectedOption === "기타"}
            onChange={handleOptionChange}
          />
          🐉기타동물
        </label>
      </div>
      <div id="forBottomLine"></div>
    </div>
  );
};

export default TypeRadio;
