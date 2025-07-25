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
            "first": "پھريون",
            "last": "آخري",
            "next": "اڳيون",
            "previous": "پويون"
        }
    },
    "autoFill": {
        "cancel": "منسوخ",
        "info": ""
    },
    "buttons": {
        "collection": "سھيڙ",
        "colvis": "ڪالم جو ڏيک",
        "colvisRestore": "ڏيک ڦيرايو",
        "copy": "ڪاپي ڪريو",
        "copyTitle": "ڪلپ بورڊ ۾ ڪاپي ڪريو",
        "csv": "سي.ايس.وِي",
        "excel": "ايڪسل",
        "pdf": "پي.ڊي.ايف",
        "print": "پرنٽ"
    },
    "decimal": "",
    "emptyTable": "ٽيبل ۾ ڪوبہ مواد ناھي",
    "infoPostFix": "",
    "processing": "پراسيس ڪري رھيو آھي",
    "search": "ڳولا",
    "searchBuilder": {
        "add": "سھيڙ شامل ڪريو",
        "clearAll": "سڀ صاف ڪريو",
        "data": "ڊيٽا"
    },
    "searchPlaceholder": "",
    "select": {
        "cells": {
            "0": ""
        },
        "columns": {
            "0": ""
        },
        "rows": {
            "0": ""
        }
    }
};
}));
