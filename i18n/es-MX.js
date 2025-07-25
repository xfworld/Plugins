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
            "first": "Primero",
            "last": "Último",
            "next": "Siguiente",
            "previous": "Anterior"
        }
    },
    "autoFill": {
        "cancel": "Cancelar",
        "fill": "Rellene todas las celdas con <i>%d<\/i>",
        "fillHorizontal": "Rellenar celdas horizontalmente",
        "fillVertical": "Rellenar celdas verticalmente",
        "info": ""
    },
    "buttons": {
        "collection": "Colección",
        "colvis": "Visibilidad",
        "colvisRestore": "Restaurar visibilidad",
        "copy": "Copiar",
        "copyKeys": "Presione ctrl o u2318 + C para copiar los datos de la tabla al portapapeles del sistema. <br \/> <br \/> Para cancelar, haga clic en este mensaje o presione escape.",
        "copySuccess": {
            "_": "Copiadas %d fila al portapapeles",
            "1": "Copiada 1 fila al portapapeles"
        },
        "copyTitle": "Copiar al portapapeles",
        "createState": "Crear Estado",
        "csv": "CSV",
        "excel": "Excel",
        "pageLength": {
            "_": "Mostrar %d filas",
            "-1": "Mostrar todas las filas"
        },
        "pdf": "PDF",
        "print": "Imprimir",
        "removeAllStates": "Borrar Todos los Estados",
        "removeState": "Borrar Estado",
        "renameState": "Renombrar Estado",
        "savedStates": "Guardar Estado",
        "stateRestore": "Restaurar Estado",
        "updateState": "Actualizar Estado"
    },
    "datetime": {
        "amPm": {
            "0": "am",
            "1": "pm"
        },
        "hours": "Horas",
        "minutes": "Minutos",
        "months": {
            "0": "Enero",
            "1": "Febrero",
            "10": "Noviembre",
            "11": "Diciembre",
            "2": "Marzo",
            "3": "Abril",
            "4": "Mayo",
            "5": "Junio",
            "6": "Julio",
            "7": "Agosto",
            "8": "Septiembre",
            "9": "Octubre"
        },
        "next": "Siguiente",
        "previous": "Anterior",
        "seconds": "Segundos",
        "unknown": "-",
        "weekdays": {
            "0": "Domingo",
            "1": "Lunes",
            "2": "Martes",
            "3": "Miércoles",
            "4": "Jueves",
            "5": "Viernes",
            "6": "Sábado"
        }
    },
    "decimal": "",
    "editor": {
        "close": "Cerrar",
        "create": {
            "button": "Nuevo",
            "submit": "Crear",
            "title": "Crear Nuevo Registro"
        },
        "edit": {
            "button": "Editar",
            "submit": "Actualizar",
            "title": "Editar Registro"
        },
        "error": {
            "system": "Ha ocurrido un error en el sistema (<a target=\"\\\" rel=\"\\ nofollow\" href=\"\\\"> Más información<\/a>)."
        },
        "multi": {
            "info": "Los elementos seleccionados contienen diferentes valores para este registro. Para editar y establecer todos los elementos de este registro con el mismo valor, haga click o toque aquí, de lo contrario conservarán sus valores individuales.",
            "noMulti": "Este registro puede ser editado individualmente, pero no como parte de un grupo.",
            "restore": "Deshacer Cambios",
            "title": "Múltiples Valores"
        },
        "remove": {
            "button": "Eliminar",
            "confirm": {
                "_": "¿Está seguro que desea eliminar %d filas?",
                "1": "¿Está seguro que desea eliminar 1 fila?"
            },
            "submit": "Eliminar",
            "title": "Eliminar Registro"
        }
    },
    "emptyTable": "No hay datos disponibles en la tabla",
    "info": "Mostrando _START_ a _END_ de _TOTAL_ entradas",
    "infoEmpty": "No hay datos para mostrar",
    "infoFiltered": "(Filtrado de _MAX_ total de entradas)",
    "infoPostFix": "",
    "infoThousands": ",",
    "lengthMenu": "Mostrar _MENU_ entradas",
    "loadingRecords": "Cargando...",
    "processing": "Procesando...",
    "search": "Buscar:",
    "searchBuilder": {
        "add": "Añadir condición",
        "button": {
            "_": "Constructor de búsqueda (%d)",
            "0": "Constructor de búsqueda"
        },
        "clearAll": "Borrar todo",
        "condition": "Condición",
        "conditions": {
            "array": {
                "contains": "Contiene",
                "empty": "Vacío",
                "equals": "Igual a",
                "not": "Diferente",
                "notEmpty": "No vacío",
                "without": "Sin"
            },
            "date": {
                "after": "Después",
                "before": "Antes",
                "between": "Entre",
                "empty": "Vacío",
                "equals": "Igual a",
                "not": "Diferente de",
                "notBetween": "No entre",
                "notEmpty": "No vacío"
            },
            "number": {
                "between": "Entre",
                "empty": "Vacío",
                "equals": "Igual a",
                "gt": "Mayor a",
                "gte": "Mayor o igual a",
                "lt": "Menor que",
                "lte": "Menor o igual a",
                "not": "Diferente de",
                "notBetween": "No entre",
                "notEmpty": "No vacío"
            },
            "string": {
                "contains": "Contiene",
                "empty": "Vacío",
                "endsWith": "Termina con",
                "equals": "Igual a",
                "not": "Diferente de",
                "notContains": "No Contiene",
                "notEmpty": "No vacío",
                "notEndsWith": "No Termina",
                "notStartsWith": "No Comienza",
                "startsWith": "Inicia con"
            }
        },
        "data": "Datos",
        "deleteTitle": "Eliminar regla de filtrado",
        "leftTitle": "Criterios anulados",
        "logicAnd": "Y",
        "logicOr": "O",
        "rightTitle": "Criterios de sangría",
        "title": {
            "_": "Constructor de búsqueda (%d)",
            "0": "Constructor de búsqueda"
        },
        "value": "Valor"
    },
    "searchPanes": {
        "clearMessage": "Borrar todo",
        "collapse": {
            "_": "Paneles de búsqueda (%d)",
            "0": "Paneles de búsqueda"
        },
        "collapseMessage": "Colapsar",
        "count": "{total}",
        "countFiltered": "{shown} ({total})",
        "emptyPanes": "Sin paneles de búsqueda",
        "loadMessage": "Cargando paneles de búsqueda",
        "showMessage": "Mostrar Todo",
        "title": "Filtros Activos - %d"
    },
    "searchPlaceholder": "",
    "select": {
        "cells": {
            "_": "%d celdas seleccionadas",
            "0": "",
            "1": "1 celda seleccionada"
        },
        "columns": {
            "_": "%d columnas seleccionadas",
            "0": "",
            "1": "1 columna seleccionada"
        },
        "rows": {
            "_": "%d filas seleccionadas",
            "0": "",
            "1": "1 fila seleccionada"
        }
    },
    "stateRestore": {
        "creationModal": {
            "button": "Crear",
            "columns": {
                "search": "Columna de búsqueda",
                "visible": "Columna de visibilidad"
            },
            "name": "Nombre:",
            "order": "Ordenar",
            "paging": "Paginar",
            "scroller": "Posición de desplazamiento",
            "search": "Buscar",
            "searchBuilder": "Creador de búsquedas",
            "select": "Selector",
            "title": "Crear nuevo",
            "toggleLabel": "Incluye:"
        },
        "duplicateError": "Ya existe un valor con el mismo nombre",
        "emptyError": "No puede ser vacío",
        "emptyStates": "No se han guardado",
        "removeConfirm": "Esta seguro de eliminar %s?",
        "removeError": "Fallo al eliminar",
        "removeJoiner": "y",
        "removeSubmit": "Eliminar",
        "removeTitle": "Eliminar",
        "renameButton": "Renombrar",
        "renameLabel": "Nuevo nombre para %s:",
        "renameTitle": "Renombrar"
    },
    "thousands": ",",
    "zeroRecords": "No se encontraron coincidencias"
};
}));
