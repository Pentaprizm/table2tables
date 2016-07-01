// Code goes here
$(function() {
  $.fn.table2tables = function(excludeLastRow) {

    if (!this[0].nodeName.length || this[0].nodeName != 'TABLE') {
      throw new Error('Selected element must be a TABLE node')
    } else

      var $table = $(this).clone(true),
      rows = $('tr', $table),
      that = this,
      theadTd = $('thead td', $table),
      theadTh = $('thead th', $table),
      colsTd = $('tr:first td', $table),
	  colsTh = $('tr:first th', $table),
      cols = theadTh.length || theadTd.length || colsTd.length || colsTh.length;
	  if(excludeLastRow === true){
		var exclude = 1
	  }	else exclude = 0;

    var tableArray = [];
    for (var i = 0; i < rows.length - exclude; i++) {
      tableArray[i] = [];
      tableArray[i].push($(rows[0]).clone(true));
      tableArray[i].push(rows[i + 1]);
    };


    function newTableRows(d) {

      var tableRows = [];

      for (var i = 0; i < cols; i++) {

        var newRow = [];
        for (var j = 0; j < 2; j++) {
          newRow.push($('td', tableArray[d][j])[i]);
        }
        tableRows.push(newRow);
      }
      return tableRows
    };

    function renderTable(table) {
      var newTable = $('<table>');

      for (var k = 0; k < table.length; k++) {
        var tr = $('<tr>');
        tr.append(table[k]);
        newTable.append(tr);
      }
      $(that).parent().append(newTable);

    };

    for (f = 0; f < rows.length - 1; f++) {
      renderTable(newTableRows(f));
	  $('#table').hide();
    };

  };

  $('#table img').click(function() {
    $(this).width('100px');
  });

  $('#addRows').click(function() {
    var rand = 1 - 0.5 + Math.random() * ($('#table tr').length - 1);
    rand = Math.round(rand);
    $($('#table tr')[rand]).clone(true).appendTo('#table');
  });


  $('#renderTables').click(function() {

    $('table:not([id])').remove();
    $('#table').table2tables();

  });

  $('#source').click(function() {

    $('.code').slideToggle();

  });




});