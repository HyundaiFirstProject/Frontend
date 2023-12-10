const DateCheck = (postDate) => {
  const dateParts = postDate.split("-"); // 문자열을 '-' 기준으로 나눔
  const year = dateParts[0];
  const month = dateParts[1];
  const day = dateParts[2];
  const hours = dateParts[3];
  const minutes = dateParts[4];

  const parsedDate = new Date(year, month - 1, day, hours, minutes); // 월은 0부터 시작하므로 -1 해줌
  const now = new Date();
  if (
    parsedDate.getDate() === now.getDate() &&
    parsedDate.getMonth() === now.getMonth() &&
    parsedDate.getFullYear() === now.getFullYear()
  ) {
    return `오늘 ${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  } else {
    return `${year.slice(2)}년 ${month}월 ${day}일`;
  }
};
export default DateCheck;
