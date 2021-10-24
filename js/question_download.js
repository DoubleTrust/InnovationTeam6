// This part is for checking and downloading unanswered questions (teacher)

var id = "collected",
worksheetName = 'sheet',
workName = "Question collections.xls";

function change_collected_question_visibility()
{
    document.getElementById("question_collections").style.visibility="visible";
}
function changeVisibility_with_export() // for highlighted students
{
    document.getElementById("highlighted_questions").style.visibility="hidden";

    // Add to question list
    question_str = '<tr><td>chenjunyu19</td><td>'+ document.getElementById("example_question").innerHTML + '</td><td>5</td></tr>'
    var question_list = document.getElementById("question_list");
    question_list.innerHTML = question_list.innerHTML + question_str;
}


// Cancel remaining question board
document.getElementById('cancel').onclick = function() {
document.getElementById("question_collections").style.visibility = "hidden";
};

// Export remaining questions
document.getElementById('export').onclick = function() {
    var download = tableToExcel();
    download(id, worksheetName, workName);
    document.getElementById("question_collections").style.visibility = "hidden";
};

// Export main function
var tableToExcel = (function() {
var uri = 'data:application/vnd.ms-excel;base64,',
    template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
    base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) },
    format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) };
return function(table, name, filename) {
    if (!table.nodeType) table = document.getElementById(table);
    console.log(table.innerHTML)
    var ctx = { worksheet: name || 'Worksheet', table: table.innerHTML }

    document.getElementById("dlink").href = uri + base64(format(template, ctx));
    document.getElementById("dlink").download = filename;
    document.getElementById("dlink").click();
}

});