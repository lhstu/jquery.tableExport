jquery.tableExport
=========================

<h3>Export HTML Table to</h3>
<ul>
<li> CSV
<li> TXT
</ul>

注：支持中文，UTF-8编码

Installation
============
jquery Plugin<BR>

	<script type="text/javascript" src="jquery.js">
	<script type="text/javascript" src="tableExport.js">

Usage
======

    $('#tableID').tableExport({type:'csv',fileName:'aa.csv',escape:'false'});

Type
======

    {type:'csv',escape:'false'}
    {type:'txt',escape:'false'}


Options
=======

	separator: ','
	ignoreColumn: [2,3]
	fileName:'fileName.csv'
	type:'csv'
	escape:'true'
	htmlContent:'false'
	consoleLog:'false'


Sample TABLE Format
======

	<table id="customers" class="table table-striped" >
	<thead>			
		<tr class='warning'>
			<th>Country</th>
			<th>Population</th>
			<th>Date</th>
			<th>%ge</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>中国</td>
			<td>1,363,480,000</td>
			<td>March 24, 2014</td>
			<td>19.1</td>
		</tr>
		<tr>
			<td>印度</td>
			<td>1,241,900,000</td>
			<td>March 24, 2014</td>
			<td>17.4</td>
		</tr>
		<tr>
			<td>美国</td>
			<td>317,746,000</td>
			<td>March 24, 2014</td>
			<td>4.44</td>
		</tr>
		<tr>
			<td>Indonesia</td>
			<td>249,866,000</td>
			<td>July 1, 2013</td>
			<td>3.49</td>
		</tr>
		<tr>
			<td>Brazil</td>
			<td>201,032,714</td>
			<td>July 1, 2013</td>
			<td>2.81</td>
		</tr>
	</tbody>
	</table>
