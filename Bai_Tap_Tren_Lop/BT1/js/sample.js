function kiemTraThang() {
  let thang = parseInt(document.getElementById("thang").value);
  let ketqua = "";

  switch (thang) {
    case 1: case 3: case 5: case 7:
    case 8: case 10: case 12:
      ketqua = "Tháng " + thang + " có 31 ngày";
      break;
    case 4: case 6: case 9: case 11:
      ketqua = "Tháng " + thang + " có 30 ngày";
      break;
    case 2:
      ketqua = "Tháng 2 có 28 ngày";
      break;
    default:
      ketqua = "Không có tháng này!";
  }

  document.getElementById("ketqua").innerText = ketqua;
  console.log(ketqua);
  return ketqua;
}
