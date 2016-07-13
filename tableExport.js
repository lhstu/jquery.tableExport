(function ($) {
    $.fn.extend({
        tableExport: function (options) {
            var defaults = {
                separator: ',',
                lineBreak: '\n',
                ignoreColumn: [],
                fileName: 'downloadFile',
                type: 'csv',
                escape: 'true',
                htmlContent: 'false',
                consoleLog: 'false'
            };

            var options = $.extend(defaults, options);
            var el = this;

            if (defaults.type == 'csv' || defaults.type == 'txt') {

                // Header
                var tdData = "";
                $(el).find('thead').find('tr').each(function () {
                    tdData += defaults.lineBreak;
                    $(this).filter(':visible').find('th').each(function (index, data) {
                        if ($(this).css('display') != 'none') {
                            if (defaults.ignoreColumn.indexOf(index) == -1) {
                                tdData += '"' + parseString($(this)) + '"' + defaults.separator;
                            }
                        }

                    });
                    tdData = $.trim(tdData);
                    tdData = $.trim(tdData).substring(0, tdData.length - 1);
                });

                // Row vs Column
                $(el).find('tbody').find('tr').each(function () {
                    tdData += defaults.lineBreak;
                    $(this).filter(':visible').find('td').each(function (index, data) {
                        if ($(this).css('display') != 'none') {
                            if (defaults.ignoreColumn.indexOf(index) == -1) {
                                tdData += '"' + parseString($(this)) + '"' + defaults.separator;
                            }
                        }
                    });
                    tdData = $.trim(tdData).substring(0, tdData.length - 1);
                });

                //output
                if (defaults.consoleLog == 'true') {
                    console.log(tdData);
                }

                //this trick will generate a temp "a" tag
                var link = document.createElement("a");
                link.id = "lnkDwnldLnk";

                //this part will append the anchor tag and remove it after automatic click
                document.body.appendChild(link);

                var BOM = "\uFEFF";
                blob = new Blob([BOM + tdData], {type: 'text/' + defaults.type + ',charset=UTF-8'});
                var csvUrl = window.webkitURL.createObjectURL(blob);
                $("#lnkDwnldLnk").attr({
                    'target': '_blank',
                    'download': defaults.fileName,
                    'href': csvUrl
                });

                $('#lnkDwnldLnk')[0].click();
                document.body.removeChild(link);
            } else {
                console.error('type is wrong');
            }


            function parseString(data) {

                if (defaults.htmlContent == 'true') {
                    content_data = data.html().trim();
                } else {
                    content_data = data.text().trim();
                }

                if (defaults.escape == 'true') {
                    content_data = escape(content_data);
                }

                return content_data;
            }

        }
    });
})(jQuery);
        
