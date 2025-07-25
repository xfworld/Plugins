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
            "first": "First",
            "last": "Last",
            "next": "Next",
            "previous": "Previous"
        }
    },
    "autoFill": {
        "cancel": "Cancel",
        "fill": "Fill all cells with <i>%d<\/i>",
        "fillHorizontal": "Fill cells horizontally",
        "fillVertical": "Fill cells vertically",
        "info": ""
    },
    "buttons": {
        "collection": "Collection <span class='ui-button-icon-primary ui-icon ui-icon-triangle-1-s'\/>",
        "colvis": "Column Visibility",
        "colvisRestore": "Restore visibility",
        "copy": "Copy",
        "copyKeys": "Press ctrl or u2318 + C to copy the table data to your system clipboard.<br><br>To cancel, click this message or press escape.",
        "copySuccess": {
            "_": "Copied %d rows to clipboard",
            "1": "Copied 1 row to clipboard"
        },
        "copyTitle": "Copy to Clipboard",
        "createState": "Create State",
        "csv": "CSV",
        "excel": "Excel",
        "pageLength": {
            "_": "Show %d rows",
            "-1": "Show all rows"
        },
        "pdf": "PDF",
        "print": "Print",
        "removeAllStates": "Remove All States",
        "removeState": "Remove",
        "renameState": "Rename",
        "savedStates": "Saved States",
        "stateRestore": "State %d",
        "updateState": "Update"
    },
    "datetime": {
        "amPm": {
            "0": "am",
            "1": "pm"
        },
        "hours": "Hour",
        "minutes": "Minute",
        "months": {
            "0": "January",
            "1": "February",
            "10": "November",
            "11": "December",
            "2": "March",
            "3": "April",
            "4": "May",
            "5": "June",
            "6": "July",
            "7": "August",
            "8": "September",
            "9": "October"
        },
        "next": "Next",
        "previous": "Previous",
        "seconds": "Second",
        "unknown": "-",
        "weekdays": {
            "0": "Sun",
            "1": "Mon",
            "2": "Tue",
            "3": "Wed",
            "4": "Thu",
            "5": "Fri",
            "6": "Sat"
        }
    },
    "decimal": "",
    "editor": {
        "close": "Close",
        "create": {
            "button": "New",
            "submit": "Create",
            "title": "Create new entry"
        },
        "edit": {
            "button": "Edit",
            "submit": "Update",
            "title": "Edit Entry"
        },
        "error": {
            "system": "A system error has occurred (<a target=\"\\\" rel=\"nofollow\" href=\"\\\">More information<\/a>)."
        },
        "multi": {
            "info": "The selected items contain different values for this input. To edit and set all items for this input to the same value, click or tap here, otherwise they will retain their individual values.",
            "noMulti": "This input can be edited individually, but not part of a group. ",
            "restore": "Undo Changes",
            "title": "Multiple Values"
        },
        "remove": {
            "button": "Delete",
            "confirm": {
                "_": "Are you sure you wish to delete %d rows?",
                "1": "Are you sure you wish to delete 1 row?"
            },
            "submit": "Delete",
            "title": "Delete"
        }
    },
    "emptyTable": "No data available in table",
    "info": "Showing _START_ to _END_ of _TOTAL_ entries",
    "infoEmpty": "Showing 0 to 0 of 0 entries",
    "infoFiltered": "(filtered from _MAX_ total entries)",
    "infoPostFix": "",
    "infoThousands": ",",
    "lengthMenu": "Show _MENU_ entries",
    "loadingRecords": "Loading...",
    "processing": "Processing...",
    "search": "Search:",
    "searchBuilder": {
        "add": "Add Condition",
        "button": {
            "_": "Search Builder (%d)",
            "0": "Search Builder"
        },
        "clearAll": "Clear All",
        "condition": "Condition",
        "conditions": {
            "array": {
                "contains": "Contains",
                "empty": "Empty",
                "equals": "Equals",
                "not": "Not",
                "notEmpty": "Not Empty",
                "without": "Without"
            },
            "date": {
                "after": "After",
                "before": "Before",
                "between": "Between",
                "empty": "Empty",
                "equals": "Equals",
                "not": "Not",
                "notBetween": "Not Between",
                "notEmpty": "Not Empty"
            },
            "number": {
                "between": "Between",
                "empty": "Empty",
                "equals": "Equals",
                "gt": "Greater Than",
                "gte": "Greater Than Equal To",
                "lt": "Less Than",
                "lte": "Less Than Equal To",
                "not": "Not",
                "notBetween": "Not Between",
                "notEmpty": "Not Empty"
            },
            "string": {
                "contains": "Contains",
                "empty": "Empty",
                "endsWith": "Ends With",
                "equals": "Equals",
                "not": "Not",
                "notContains": "Does Not Contain",
                "notEmpty": "Not Empty",
                "notEndsWith": "Does Not End With",
                "notStartsWith": "Does Not Start With",
                "startsWith": "Starts With"
            }
        },
        "data": "Data",
        "deleteTitle": "Delete filtering rule",
        "leftTitle": "Outdent Criteria",
        "logicAnd": "And",
        "logicOr": "Or",
        "rightTitle": "Indent Criteria",
        "title": {
            "_": "Search Builder (%d)",
            "0": "Search Builder"
        },
        "value": "Value"
    },
    "searchPanes": {
        "clearMessage": "Clear All",
        "collapse": {
            "_": "SearchPanes (%d)",
            "0": "SearchPanes"
        },
        "collapseMessage": "Collapse All",
        "count": "{total}",
        "countFiltered": "{shown} ({total})",
        "emptyPanes": "No SearchPanes",
        "loadMessage": "Loading SearchPanes",
        "showMessage": "Show All",
        "title": "Filters Active - %d"
    },
    "searchPlaceholder": "",
    "select": {
        "cells": {
            "_": "%d cells selected",
            "0": "",
            "1": "1 cell selected"
        },
        "columns": {
            "_": "%d columns selected",
            "0": "",
            "1": "1 column selected"
        },
        "rows": {
            "_": "%d rows selected",
            "0": "",
            "1": "1 row selected"
        }
    },
    "stateRestore": {
        "creationModal": {
            "button": "Create",
            "columns": {
                "search": "Column Search",
                "visible": "Column Visibility"
            },
            "name": "Name:",
            "order": "Sorting",
            "paging": "Paging",
            "scroller": "Scroll Position",
            "search": "Search",
            "searchBuilder": "SearchBuilder",
            "select": "Select",
            "title": "Create New State",
            "toggleLabel": "Includes:"
        },
        "duplicateError": "A state with this name already exists.",
        "emptyError": "Name cannot be empty.",
        "emptyStates": "No saved states",
        "removeConfirm": "Are you sure you want to remove %s?",
        "removeError": "Failed to remove state.",
        "removeJoiner": " and ",
        "removeSubmit": "Remove",
        "removeTitle": "Remove State",
        "renameButton": "Rename",
        "renameLabel": "New Name for %s:",
        "renameTitle": "Rename State"
    },
    "thousands": ",",
    "zeroRecords": "No matching records found"
};
}));
