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
            "first": "F&oslash;rste",
            "last": "Siste",
            "next": "Neste",
            "previous": "Forrige"
        }
    },
    "autoFill": {
        "cancel": "Avbryt",
        "fill": "Fyll alle celler med <i>%d<\/i>",
        "fillHorizontal": "Fyll celler horisontalt",
        "fillVertical": "Fyll celler vertikalt",
        "info": ""
    },
    "buttons": {
        "collection": "Samling <span class=\"ui-button-icon-primary ui-icon ui-icon-triangle-1-s\"><\/span>",
        "colvis": "Kolonne-synlighet",
        "colvisRestore": "Gjennopprett synlighet",
        "copy": "Kopier",
        "copyKeys": "Trykk ctrl eller u2318 + C for &aring; kopiere tabelldata til systemets utklippstavle.<br \/><br \/>For &aring; avbryte, klikk p&aring; denne meldingen eller trykk p&aring; escape.",
        "copySuccess": {
            "_": "Kopierte %d rader til utklippstavle",
            "1": "Kopierte én rad til utklippstavle"
        },
        "copyTitle": "Kopier til utklippstavle",
        "createState": "Opprett tilstand",
        "csv": "CSV",
        "excel": "Excel",
        "pageLength": {
            "_": "Vis %d rader",
            "-1": "Vis alle rader"
        },
        "pdf": "PDF",
        "print": "Utskrift",
        "removeAllStates": "Fjern alle tilstander",
        "removeState": "Fjern",
        "renameState": "Nytt navn",
        "savedStates": "Lagrede tilstander",
        "stateRestore": "Tilstand %d",
        "updateState": "Oppdater"
    },
    "datetime": {
        "amPm": {
            "0": "am",
            "1": "pm"
        },
        "hours": "timer",
        "minutes": "minutter",
        "months": {
            "0": "Januar",
            "1": "Februar",
            "10": "November",
            "11": "Desember",
            "2": "Mars",
            "3": "April",
            "4": "Mai",
            "5": "Juni",
            "6": "Juli",
            "7": "August",
            "8": "September",
            "9": "Oktober"
        },
        "next": "neste",
        "previous": "forrige",
        "seconds": "sekunder",
        "unknown": "ukjent",
        "weekdays": {
            "0": "Søn",
            "1": "Man",
            "2": "Tir",
            "3": "Ons",
            "4": "Tor",
            "5": "Fre",
            "6": "Lør"
        }
    },
    "decimal": "",
    "editor": {
        "close": "Lukk",
        "create": {
            "button": "Ny",
            "submit": "Opprett",
            "title": "Ny oppføring"
        },
        "edit": {
            "button": "Endre",
            "submit": "Oppdater",
            "title": "Endre oppføring"
        },
        "error": {
            "system": "En systemfeil har inntruffet (Mer informasjon)"
        },
        "multi": {
            "noMulti": "Dette feltet kan redigeres individuelt men ikke som del av en gruppe.",
            "restore": "Gjør om endringer",
            "title": "Flere verdier"
        },
        "remove": {
            "button": "Slett",
            "confirm": {
                "_": "Er du sikker på at du vil slette %d rader?",
                "1": "Er du sikker på at du vil slette 1 rad?"
            },
            "submit": "Slett",
            "title": "Sletting"
        }
    },
    "emptyTable": "Ingen data tilgjengelig i tabellen",
    "info": "Viser _START_ til _END_ av _TOTAL_ oppf&oslash;ringer",
    "infoEmpty": "Viser 0 til 0 av 0 oppf&oslash;ringer",
    "infoFiltered": "filtrert fra totalt _MAX_ oppf&oslash;ringer",
    "infoPostFix": "",
    "infoThousands": " ",
    "lengthMenu": "Vis _MENU_ oppf&oslash;ringer",
    "loadingRecords": "Laster...",
    "processing": "Laster...",
    "search": "S&oslash;k:",
    "searchBuilder": {
        "add": "Legg til betingelse",
        "button": {
            "_": "S&oslash;kekonstrukt&oslash;r (%d)",
            "0": "S&oslash;kekonstrukt&oslash;r"
        },
        "clearAll": "Fjern alle",
        "condition": "Betingelse",
        "conditions": {
            "array": {
                "contains": "Inneholder",
                "empty": "Tom",
                "equals": "Er lik",
                "not": "Ikke",
                "notEmpty": "Ikke tom",
                "without": "Uten"
            },
            "date": {
                "after": "Etter",
                "before": "F&oslash;r",
                "between": "Mellom",
                "empty": "Tom",
                "equals": "Er lik",
                "not": "Ikke",
                "notBetween": "Ikke mellom",
                "notEmpty": "Ikke tom"
            },
            "number": {
                "between": "Mellom",
                "empty": "Tom",
                "equals": "Er lik",
                "gt": "St&oslash;rre enn",
                "gte": "St&oslash;rre eller lik",
                "lt": "Mindre enn",
                "lte": "Mindre eller lik",
                "not": "Ikke",
                "notBetween": "Ikke mellom",
                "notEmpty": "Ikke tom"
            },
            "string": {
                "contains": "Inneholder",
                "empty": "Tom",
                "endsWith": "Slutter med",
                "equals": "Er lik",
                "not": "Ikke",
                "notContains": "Inneholder ikke",
                "notEmpty": "Ikke tom",
                "notEndsWith": "Slutter ikke med",
                "notStartsWith": "Starter ikke med",
                "startsWith": "Starter med"
            }
        },
        "data": "Data",
        "deleteTitle": "Slett filtreringsregel",
        "leftTitle": "Rykk tilbake betingelse",
        "logicAnd": "Og",
        "logicOr": "Eller",
        "rightTitle": "Rykk inn betingelse",
        "title": {
            "_": "S&oslash;kekonstrukt&oslash;r (%d)",
            "0": "S&oslash;kekonstrukt&oslash;r"
        },
        "value": "Verdi"
    },
    "searchPanes": {
        "clearMessage": "Fjern alle",
        "collapse": {
            "_": "S&oslash;kerute (%d)",
            "0": "S&oslash;kerute"
        },
        "collapseMessage": "Komprimer Alle",
        "count": "{total}",
        "countFiltered": "{shown} ({total})",
        "emptyPanes": "Ingen s&oslash;kerute",
        "loadMessage": "Laster inn s&oslash;kerute...",
        "showMessage": "Vis alle",
        "title": "Aktive filter - %d"
    },
    "searchPlaceholder": "",
    "select": {
        "cells": {
            "_": "%d celler er valgt",
            "0": "",
            "1": "1 celle er valgt"
        },
        "columns": {
            "_": "%d kolonner er valgt",
            "0": "",
            "1": "1 kolonne er valgt"
        },
        "rows": {
            "_": "%d rader valgt",
            "0": "",
            "1": "1 rad valgt"
        }
    },
    "thousands": " .",
    "zeroRecords": "Ingen rader samsvarer med s&oslash;ket"
};
}));
