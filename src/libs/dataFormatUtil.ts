// 年月日のフォーマットを変換する関数
export const formatDate = (date: string) => {
  const dateParts = date.split('-');
  const year = dateParts[0];
  const month = dateParts[1];
  const day = dateParts[2];

  const formattedDate = `${year}年${month}月${day}日`;
  return formattedDate;
};