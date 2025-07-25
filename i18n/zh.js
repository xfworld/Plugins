(function( factory ) {
	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( [], factory);
	}
	else if ( typeof exports === 'object' ) {
		// CommonJS
		module.exports = factory();
	}
	// No browser loader - use JSON, ESM, CJS or AMD
}
(function() {
    return {
    "aria": {
        "paginate": {
            "first": "首页",
            "last": "末页",
            "next": "下页",
            "previous": "上页"
        }
    },
    "autoFill": {
        "cancel": "取消",
        "fill": "用 <i>%d<\/i> 填充所有单元格",
        "fillHorizontal": "水平填充单元格",
        "fillVertical": "垂直填充单元格",
        "info": ""
    },
    "buttons": {
        "collection": "集合<span class=\"ui-button-icon-primary ui-icon ui-icon-triangle-1-s\"><\/span>",
        "colvis": "列可见性",
        "colvisRestore": "重置可见性",
        "copy": "复制",
        "copyKeys": "按 Ctrl 或 u2318 + C 键将表中数据复制到系统剪贴板。<br \/><br \/>要取消，请单击此消息或按 Escape 键。",
        "copySuccess": {
            "_": "已复制 %d 行到剪贴板",
            "1": "已复制 1 行到剪贴板"
        },
        "copyTitle": "复制到剪贴板",
        "createState": "创建状态",
        "csv": "CSV",
        "excel": "Excel",
        "pageLength": {
            "_": "显示 %d 行",
            "-1": "显示所有行"
        },
        "pdf": "PDF",
        "print": "打印",
        "removeAllStates": "删除所有状态",
        "removeState": "删除",
        "renameState": "重命名",
        "savedStates": "保存的状态",
        "stateRestore": "状态 %d",
        "updateState": "更新"
    },
    "datetime": {
        "amPm": {
            "0": "上午",
            "1": "下午"
        },
        "hours": "时",
        "minutes": "分",
        "months": {
            "0": "1月",
            "1": "2月",
            "10": "11月",
            "11": "12月",
            "2": "3月",
            "3": "4月",
            "4": "5月",
            "5": "6月",
            "6": "7月",
            "7": "8月",
            "8": "9月",
            "9": "10月"
        },
        "next": "下月",
        "previous": "上月",
        "seconds": "秒",
        "unknown": "-",
        "weekdays": {
            "0": "日",
            "1": "一",
            "2": "二",
            "3": "三",
            "4": "四",
            "5": "五",
            "6": "六"
        }
    },
    "decimal": "",
    "editor": {
        "close": "关闭",
        "create": {
            "button": "新建",
            "submit": "创建",
            "title": "创建新记录"
        },
        "edit": {
            "button": "编辑",
            "submit": "更新",
            "title": "编辑记录"
        },
        "error": {
            "system": "出现了系统错误 (<a target=\"\\\" rel=\"\\ nofollow\" href=\"\\\">更多信息&lt;\\\/a&gt;)。<\/a>"
        },
        "multi": {
            "info": "选择的多条记录的此字段含有不同的值。要编辑并将所有记录的此字段都设为相同的值，请单击或点按这里，否则它们会保持各自的值不变。",
            "noMulti": "此字段可以单独编辑，不可以组合编辑。",
            "restore": "撤销更改",
            "title": "多个值"
        },
        "remove": {
            "button": "删除",
            "confirm": {
                "_": "确定要删除 %d 行？",
                "1": "确定要删除 1 行？"
            },
            "submit": "删除",
            "title": "删除"
        }
    },
    "emptyTable": "表中没有数据",
    "info": "正在显示第 _START_ 至 _END_ 条记录，共 _TOTAL_ 条",
    "infoEmpty": "正在显示第 0 至 0 条记录，共 0 条",
    "infoFiltered": "(筛选自全部 _MAX_ 条记录)",
    "infoPostFix": "",
    "infoThousands": ",",
    "lengthMenu": "显示 _MENU_ 条记录",
    "loadingRecords": "正在加载...",
    "processing": "正在处理...",
    "search": "搜索:",
    "searchBuilder": {
        "add": "添加条件",
        "button": {
            "_": "搜索生成器 (%d)",
            "0": "搜索生成器"
        },
        "clearAll": "全部清除",
        "condition": "条件",
        "conditions": {
            "array": {
                "contains": "含有",
                "empty": "为空",
                "equals": "等于",
                "not": "非",
                "notEmpty": "非空",
                "without": "无"
            },
            "date": {
                "after": "早于",
                "before": "晚于",
                "between": "介于",
                "empty": "为空",
                "equals": "等于",
                "not": "非",
                "notBetween": "不介于",
                "notEmpty": "非空"
            },
            "number": {
                "between": "介于",
                "empty": "为空",
                "equals": "等于",
                "gt": "大于",
                "gte": "大于等于",
                "lt": "小于",
                "lte": "小于等于",
                "not": "非",
                "notBetween": "不介于",
                "notEmpty": "非空"
            },
            "string": {
                "contains": "含有",
                "empty": "为空",
                "endsWith": "结尾为",
                "equals": "等于",
                "not": "非",
                "notContains": "不含有",
                "notEmpty": "非空",
                "notEndsWith": "结尾不为",
                "notStartsWith": "开头不为",
                "startsWith": "开头为"
            }
        },
        "data": "数据",
        "deleteTitle": "删除筛选规则",
        "leftTitle": "组合规则",
        "logicAnd": "与",
        "logicOr": "或",
        "rightTitle": "取消组合规则",
        "title": {
            "_": "搜索生成器 (%d)",
            "0": "搜索生成器"
        },
        "value": "值"
    },
    "searchPanes": {
        "clearMessage": "全部清除",
        "collapse": {
            "_": "搜索面板 (%d)",
            "0": "搜索面板"
        },
        "collapseMessage": "全部折叠",
        "count": "{total}",
        "countFiltered": "{shown} ({total})",
        "emptyPanes": "没有搜索面板",
        "loadMessage": "正在加载搜索面板...",
        "showMessage": "全部显示",
        "title": "激活的筛选 - %d"
    },
    "searchPlaceholder": "",
    "select": {
        "cells": {
            "_": "已选择 %d 个单元格",
            "0": "",
            "1": "已选择 1 个单元格"
        },
        "columns": {
            "_": "已选择 %d 列",
            "0": "",
            "1": "已选择 1 列"
        },
        "rows": {
            "_": "已选择 %d 行",
            "0": "",
            "1": "已选择 1 行"
        }
    },
    "stateRestore": {
        "creationModal": {
            "button": "创建",
            "columns": {
                "search": "列搜索",
                "visible": "列可见性"
            },
            "name": "名称:",
            "order": "排序",
            "paging": "分页",
            "scroller": "滚动定位",
            "search": "搜索",
            "searchBuilder": "搜索生成器",
            "select": "选择",
            "title": "创建新状态",
            "toggleLabel": "包括:"
        },
        "duplicateError": "已存在使用此名称的状态。",
        "emptyError": "名称不能为空。",
        "emptyStates": "没有保存的状态",
        "removeConfirm": "确定要删除 %s？",
        "removeError": "删除状态失败。",
        "removeJoiner": "和",
        "removeSubmit": "删除",
        "removeTitle": "删除状态",
        "renameButton": "重命名",
        "renameLabel": "%s 的新名称:",
        "renameTitle": "重命名状态"
    },
    "thousands": ",",
    "zeroRecords": "没有找到匹配的记录"
};
}));
