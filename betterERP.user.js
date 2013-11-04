// ==UserScript==
// @name       betterERP support overview
// @version    1.2
// @description Make the ERP work
// @author     Daniel Henschel
// @namespace  gateprotect
// @include    https://10.0.0.199/erp/view_support_jobs.php
// @updateURL  https:///github.com/hschroed/betterERP/master/betterERP.user.js
// @downloadURL https://github.com/hschroed/betterERP/master/betterERP.user.js
// ==/UserScript==

// nav bar
// ---------------------------------------------------------------------
mainNav = document.getElementById('nav').children;
mainNav[0].style.display = 'none'; // email
mainNav[1].style.display = 'none'; // customer list
mainNav[4].style.display = 'none'; // statistics
mainNav[5].style.display = 'none'; // statistics
mainNav[6].style.display = 'none'; // statistics


// main site
// ---------------------------------------------------------------------
mainTables = document.getElementById('main').getElementsByTagName('table');



// ticketlist spacing
ticketCols = mainTables[0].getElementsByTagName('col');
ticketCols[3].style.display  = 'none'; //  3 = interner termin
ticketCols[6].style.display  = 'none'; //  6 = start
ticketCols[7].style.display  = 'none'; //  7 = ende
ticketCols[11].style.display = 'none'; // 11 = angelegt
ticketCols[14].style.display = 'none'; // 14 = kategorie

// ticketlist
ticketRows = mainTables[0].getElementsByTagName('tr');
for(var i = 0; i < ticketRows.length; ++i) {
    if(ticketRows[i].className == 'tablesorter-headerRow')
        ticketCells = ticketRows[i].getElementsByTagName('th');
    else
        ticketCells = ticketRows[i].getElementsByTagName('td');
    ticketCells[3].style.display  = 'none'; //  3 = interner termin
    ticketCells[6].style.display  = 'none'; //  6 = start
    ticketCells[7].style.display  = 'none'; //  7 = ende
    ticketCells[11].style.display = 'none'; // 11 = angelegt
    ticketCells[14].style.display = 'none'; // 14 = kategorie
}

// css
// ---------------------------------------------------------------------
myCSS = [];

// hover rows
myCSS.push('table.tablesorter tr:hover { background-color: rgba(0, 0, 0, 0.03) !important; }');
myCSS.push('table.tablesorter tr:hover td, table.tablesorter tr:hover td a { color: #333333 !important; }');
myCSS.push('table.tablesorter tr:hover td.runningjobs, table.tablesorter tr:hover td.runningjobs a { background-color: #ddffaa !important; }');
myCSS.push('table.tablesorter tr:hover td.runningjobs:nth-of-type(3) { background-color: #d50b30 !important; color: #ffffff !important; }');

// filtering
myCSS.push('table.tablesorter tr.filtered { display: table-row !important; }');
myCSS.push('table.tablesorter tr.filtered td, table.tablesorter tr.filtered td span, table.tablesorter tr.filtered td a { color: rgba(0, 0, 0, 0.3) !important; }');

for(var i = 0; i < myCSS.length; i++)
    document.styleSheets[0].insertRule(myCSS[i], document.styleSheets[0].cssRules.length);
    
    
    // here's the build of the new script, one line at a time
scriptCode.push('document.onkeydown = function (e) { return true;} ');

    
// now, we put the script in a new script element in the DOM
var script = document.createElement('script');    // create the script element
script.innerHTML = scriptCode.join('\n');         // add the script code to it
scriptCode.length = 0;                            // recover the memory we used to build the script

