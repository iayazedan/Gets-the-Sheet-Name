function SHEETNAME(option) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet()
  var thisSheet = sheet.getName();
  
  //Current option Sheet Name
  if(option === 0){
    return thisSheet;
  
  //All Sheet Names in Spreadsheet
  }else if(option === 1){
    var sheetList = [];
    ss.getSheets().forEach(function(val){
       sheetList.push(val.getName())
    });
    return sheetList;
  
  //The Spreadsheet File Name
  }else if(option === 2){
    return ss.getName();
  
  //Error  
  }else{
    return "#N/A";
  };
};
