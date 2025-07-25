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
            "first": "E para",
            "last": "E Fundit",
            "next": "Tjetra",
            "previous": "E Kaluara"
        }
    },
    "autoFill": {
        "cancel": "Anulo",
        "fill": "Plotëso",
        "fillHorizontal": "Plotëso rreshtat",
        "fillVertical": "Plotëso kolonat",
        "info": ""
    },
    "buttons": {
        "collection": "Të dhënat",
        "colvis": "Shfaq kolonat",
        "colvisRestore": "Rikthe shfaqjen",
        "copy": "Kopjo",
        "copyKeys": "Shtyp _ctr ose _⌘ + _C për të kopjuar të dhënat në Clipboard. Për të anulluar, kliko mesazhin ose shtyp butonin 'Escape'.",
        "copySuccess": {
            "_": "U kopjuan %d rreshta në clipboard",
            "1": "U kopjua 1 rresht në clipboard"
        },
        "copyTitle": "Kopjo në Clipboard",
        "createState": "Krijo Gjendje",
        "csv": "CSV",
        "excel": "EXCEL",
        "pageLength": {
            "_": "Shfaq %d rreshta",
            "-1": "Shfaq të gjithë rreshtat"
        },
        "pdf": "PDF",
        "print": "Printo",
        "removeAllStates": "Shlyej Të Gjitha Gjendjet",
        "removeState": "Shlyej",
        "renameState": "Riemërto",
        "savedStates": "Gjendjet e Ruajtura",
        "stateRestore": "Shteti %d",
        "updateState": "Përditëso"
    },
    "datetime": {
        "amPm": {
            "0": "am",
            "1": "pm"
        },
        "hours": "Ora",
        "minutes": "Minuta",
        "months": {
            "0": "Janar",
            "1": "Shkurt",
            "10": "Nëntor",
            "11": "Dhjetor",
            "2": "Mars",
            "3": "Prill",
            "4": "Maj",
            "5": "Qershor",
            "6": "Korrik",
            "7": "Gusht",
            "8": "Shtator",
            "9": "Tetor"
        },
        "next": "Përpara",
        "previous": "Prapa",
        "seconds": "Sekonda",
        "unknown": "-",
        "weekdays": {
            "0": "E hëne",
            "1": "E martë",
            "2": "E mërkurë",
            "3": "E enjte",
            "4": "E premte",
            "5": "E shtunë",
            "6": "E diel"
        }
    },
    "decimal": "",
    "editor": {
        "close": "Mbyll",
        "create": {
            "button": "Krijo",
            "submit": "Krijojeni",
            "title": "Krijo rekord të ri"
        },
        "edit": {
            "button": "Modifiko",
            "submit": "Modifikojeni",
            "title": "Modifiko një të dhënë ekzistuese"
        },
        "error": {
            "system": "Ka ndodhur një gabim në sistem. (<a target=\"\\\" rel=\"\\ nofollow\" href=\"\\\">Më shumë informacion&lt;\\\/a&gt;).<\/a>"
        },
        "multi": {
            "info": "Artikujt e selektuar përmbajnë vlera të ndryshme për këtë input. Për të edituar dhe t'i rivendosur të gjithë artikujt për këtë input me vlerën e njejtë, klikoni këtu, përndryshe ato do të mbajnë vlerat e tyre individuale.",
            "noMulti": "Ky input mund të përditësohet individualisht, por jo si pjesë e një grupi.",
            "restore": "Zhbëj ndryshimet",
            "title": "Vlera të shumëfishta"
        },
        "remove": {
            "button": "Fshi",
            "confirm": {
                "_": "Jeni i sigurë që doni të fshini %d rreshta?",
                "1": "Jeni i sigurë që doni të fshini 1 rresht?"
            },
            "submit": "Fshijeni",
            "title": "Fshi"
        }
    },
    "emptyTable": "Nuk ka asnjë të dhënë në tabelë",
    "info": "Duke treguar _START_ deri _END_ prej _TOTAL_ rreshtave",
    "infoEmpty": "Duke treguar 0 deri 0 prej 0 rreshtave",
    "infoFiltered": "(të filtruara prej gjithsej _MAX_  reshtave)",
    "infoPostFix": "",
    "infoThousands": ",",
    "lengthMenu": "Shfaq _MENU_ rreshta",
    "loadingRecords": "Po merren te dhënat...",
    "processing": "Po procesohen...",
    "search": "Kërkoni:",
    "searchBuilder": {
        "add": "Shto kusht",
        "button": {
            "_": "Nderto logjikë kërkimi (%d)",
            "0": "Nderto logjikë kërkimi"
        },
        "clearAll": "Pastro të gjitha",
        "condition": "Kusht",
        "conditions": {
            "array": {
                "contains": "përmban",
                "empty": "bosh",
                "equals": "i\/e barabartë",
                "not": "jo",
                "notEmpty": "jo bosh",
                "without": "pa"
            },
            "date": {
                "after": "pas",
                "before": "para",
                "between": "ndërmjet",
                "empty": "bosh",
                "equals": "i\/e barabartë",
                "not": "jo",
                "notBetween": "jo ndërmjet",
                "notEmpty": "jo bosh"
            },
            "number": {
                "between": "ndërmjet",
                "empty": "bosh",
                "equals": "i\/e barabartë\"",
                "gt": "më i\/e madh\/e se",
                "gte": "më i\/e madh\/e ose i\/e barabartë me",
                "lt": "më i\/e vogël se",
                "lte": "më i\/e madh\/e ose i\/e barabartë me",
                "not": "jo",
                "notBetween": "jo ndërmjet",
                "notEmpty": "jo bosh"
            },
            "string": {
                "contains": "përmban",
                "empty": "bosh",
                "endsWith": "mbaron me",
                "equals": "i\/e barabartë",
                "not": "jo",
                "notContains": "Nuk Përmban",
                "notEmpty": "jo bosh",
                "notEndsWith": "Nuk Përfundon Me",
                "notStartsWith": "Nuk Fillon Me",
                "startsWith": "fillon me"
            }
        },
        "data": "Të dhëna",
        "deleteTitle": "Fshi rregullin e filtrimit",
        "logicAnd": "Edhe",
        "logicOr": "Ose",
        "title": {
            "_": "Logjikë kërkimi (%d)",
            "0": "Logjikë kërkimi"
        },
        "value": "Vlera"
    },
    "searchPanes": {
        "clearMessage": "Pastro të gjitha",
        "collapse": {
            "_": "DritaretKerkimit (%d)",
            "0": "DritaretKerkimit"
        },
        "collapseMessage": "Mbyll të gjitha",
        "count": "{total}",
        "countFiltered": "{shown} ({total})",
        "emptyPanes": "Nuk ka dritare të kërkimit",
        "loadMessage": "Duke ngarkuar dritaret e kërkimit",
        "showMessage": "Shfaq të gjitha",
        "title": "Filtra aktivë - %d"
    },
    "searchPlaceholder": "",
    "select": {
        "cells": {
            "_": "%d qeliza të zgjedhura",
            "0": "",
            "1": "1 qelizë e zgjedhur"
        },
        "columns": {
            "_": "%d kolona të zgjedhura",
            "0": "",
            "1": "1 kolonë e zgjedhur"
        },
        "rows": {
            "0": ""
        }
    },
    "stateRestore": {
        "creationModal": {
            "button": "Krijo",
            "columns": {
                "search": "Kërkimi Kolonës",
                "visible": "Pamja Kolonës"
            },
            "name": "Emri:",
            "order": "Renditja",
            "paging": "Faqezimi",
            "scroller": "Pozicioni i lëvizjes",
            "search": "Kërkimi",
            "searchBuilder": "NdertuesiKerkimit",
            "select": "Selekto",
            "title": "Krijo Gjendje Të Re",
            "toggleLabel": "Përfshin:"
        },
        "duplicateError": "Ekziton një gjendje me këtë emër.",
        "emptyError": "Emri nuk mund të jetë i zbrazët.",
        "emptyStates": "Nuk ka gjendje të ruajtura.",
        "removeConfirm": "A jeni i sigurtë që doni të shlyeni %s?",
        "removeError": "Shlyerja e gjendjes dështoi.",
        "removeJoiner": "dhe",
        "removeSubmit": "Shlyej",
        "removeTitle": "Shlyej Gjendje",
        "renameButton": "Riemërto",
        "renameLabel": "Emri i ri për %s:",
        "renameTitle": "Riemërto Gjendje"
    },
    "thousands": ",",
    "zeroRecords": "Nuk u gjet asnjë e dhënë"
};
}));
