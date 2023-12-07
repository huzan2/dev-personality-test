export const getMbti = (number) => {
  let temp = "";
  const arr = number.split("");
  if (Number(arr[0]) < 4) {
    temp += "I";
  } else {
    temp += "E";
  }
  if (Number(arr[1]) < 4) {
    temp += "N";
  } else {
    temp += "S";
  }
  if (Number(arr[2]) < 4) {
    temp += "T";
  } else {
    temp += "F";
  }
  if (Number(arr[3]) < 4) {
    temp += "P";
  } else {
    temp += "J";
  }
  return temp;
};
