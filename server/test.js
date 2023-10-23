// 导出 EXCEL 文件
const XLSX = require("xlsx");

const data = [
  ["Name", "Age", "City"],
  ["John Doe", 25, "New York"],
  ["Jane Smith", 30, "San Francisco"],
  ["Bob Johnson", 35, "Chicago"],
];

const workbook = XLSX.utils.book_new();
const worksheet = XLSX.utils.json_to_sheet(data);
XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
XLSX.writeFile(workbook, "E://download//output.xlsx");
