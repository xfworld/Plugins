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
            "first": "Первая",
            "last": "Последняя",
            "next": "Следующая",
            "previous": "Предыдущая"
        }
    },
    "autoFill": {
        "cancel": "Отменить",
        "fill": "Заполнить все ячейки <i>%d<i><\/i><\/i>",
        "fillHorizontal": "Заполнить ячейки по горизонтали",
        "fillVertical": "Заполнить ячейки по вертикали",
        "info": ""
    },
    "buttons": {
        "collection": "Коллекция <span class=\"ui-button-icon-primary ui-icon ui-icon-triangle-1-s\"><\/span>",
        "colvis": "Видимость столбцов",
        "colvisRestore": "Восстановить видимость",
        "copy": "Копировать",
        "copyKeys": "Нажмите ctrl  или u2318 + C, чтобы скопировать данные таблицы в буфер обмена.  Для отмены, щелкните по сообщению или нажмите escape.",
        "copySuccess": {
            "_": "Скопировано %d строк в буфер обмена",
            "1": "Строка скопирована в буфер обмена"
        },
        "copyTitle": "Скопировать в буфер обмена",
        "createState": "Создать состояние",
        "csv": "CSV",
        "excel": "Excel",
        "pageLength": {
            "_": "Показать %d строк",
            "-1": "Показать все строки"
        },
        "pdf": "PDF",
        "print": "Печать",
        "removeAllStates": "Удалить все состояния",
        "removeState": "Удалить",
        "renameState": "Переименовать",
        "savedStates": "Сохраненные состояния",
        "stateRestore": "Состояние %d",
        "updateState": "Обновить"
    },
    "datetime": {
        "amPm": {
            "0": "AM",
            "1": "PM"
        },
        "hours": "Часы",
        "minutes": "Минуты",
        "months": {
            "0": "Январь",
            "1": "Февраль",
            "10": "Ноябрь",
            "11": "Декабрь",
            "2": "Март",
            "3": "Апрель",
            "4": "Май",
            "5": "Июнь",
            "6": "Июль",
            "7": "Август",
            "8": "Сентябрь",
            "9": "Октябрь"
        },
        "next": "Следующий",
        "previous": "Предыдущий",
        "seconds": "Секунды",
        "unknown": "Неизвестный",
        "weekdays": {
            "0": "Вс",
            "1": "Пн",
            "2": "Вт",
            "3": "Ср",
            "4": "Чт",
            "5": "Пт",
            "6": "Сб"
        }
    },
    "decimal": "",
    "editor": {
        "close": "Закрыть",
        "create": {
            "button": "Новый",
            "submit": "Создать",
            "title": "Создать новую запись"
        },
        "edit": {
            "button": "Изменить",
            "submit": "Изменить",
            "title": "Изменить запись"
        },
        "error": {
            "system": "Возникла системная ошибка (<a target=\"\\\" rel=\"nofollow\" href=\"\\\">Подробнее<\/a>)."
        },
        "multi": {
            "info": "Выбранные элементы содержат разные значения для этого входа. Чтобы отредактировать и установить для всех элементов этого ввода одинаковое значение, нажмите или коснитесь здесь, в противном случае они сохранят свои индивидуальные значения.",
            "noMulti": "Это поле должно редактироваться отдельно, а не как часть группы",
            "restore": "Отменить изменения",
            "title": "Несколько значений"
        },
        "remove": {
            "button": "Удалить",
            "confirm": {
                "_": "Вы точно хотите удалить %d строк?",
                "1": "Вы точно хотите удалить 1 строку?"
            },
            "submit": "Удалить",
            "title": "Удалить"
        }
    },
    "emptyTable": "В таблице отсутствуют данные",
    "info": "Записи с _START_ до _END_ из _TOTAL_ записей",
    "infoEmpty": "Записи с 0 до 0 из 0 записей",
    "infoFiltered": "(отфильтровано из _MAX_ записей)",
    "infoPostFix": "",
    "infoThousands": ",",
    "lengthMenu": "Показать _MENU_ записей",
    "loadingRecords": "Загрузка записей...",
    "processing": "Подождите...",
    "search": "Поиск:",
    "searchBuilder": {
        "add": "Добавить условие",
        "button": {
            "_": "Конструктор поиска (%d)",
            "0": "Конструктор поиска"
        },
        "clearAll": "Очистить всё",
        "condition": "Условие",
        "conditions": {
            "array": {
                "contains": "Содержит",
                "empty": "Пусто",
                "equals": "Равно",
                "not": "Не равно",
                "notEmpty": "Не пусто",
                "without": "Без"
            },
            "date": {
                "after": "После",
                "before": "До",
                "between": "Между",
                "empty": "Пусто",
                "equals": "Равно",
                "not": "Не",
                "notBetween": "Не между",
                "notEmpty": "Не пусто"
            },
            "number": {
                "between": "Между",
                "empty": "Пусто",
                "equals": "Равно",
                "gt": "Больше чем",
                "gte": "Больше, чем равно",
                "lt": "Меньше чем",
                "lte": "Меньше, чем равно",
                "not": "Не",
                "notBetween": "Не между ними",
                "notEmpty": "Не пусто"
            },
            "string": {
                "contains": "Содержит",
                "empty": "Пусто",
                "endsWith": "Заканчивается на",
                "equals": "Равно",
                "not": "Не",
                "notContains": "Не содержит",
                "notEmpty": "Не пусто",
                "notEndsWith": "Не заканчивается на",
                "notStartsWith": "Не начинается на",
                "startsWith": "Начинается с"
            }
        },
        "data": "Данные",
        "deleteTitle": "Удалить условие фильтрации",
        "leftTitle": "Превосходные критерии",
        "logicAnd": "И",
        "logicOr": "Или",
        "rightTitle": "Критерии отступа",
        "title": {
            "_": "Конструктор поиска (%d)",
            "0": "Конструктор поиска"
        },
        "value": "Значение"
    },
    "searchPanes": {
        "clearMessage": "Очистить всё",
        "collapse": {
            "_": "Панели поиска (%d)",
            "0": "Панели поиска"
        },
        "collapseMessage": "Скрыть все",
        "count": "{total}",
        "countFiltered": "{shown} ({total})",
        "emptyPanes": "Нет панелей поиска",
        "loadMessage": "Загрузка панелей поиска",
        "showMessage": "Показать все",
        "title": "Фильтры активны - %d"
    },
    "searchPlaceholder": "",
    "select": {
        "cells": {
            "_": "Выбрано %d ячеек",
            "0": "",
            "1": "Выбрана 1 ячейка "
        },
        "columns": {
            "_": "Выбрано %d столбцов ",
            "0": "",
            "1": "Выбран 1 столбец "
        },
        "rows": {
            "_": "Выбрано записей: %d",
            "0": "",
            "1": "Выбрана одна запись"
        }
    },
    "stateRestore": {
        "creationModal": {
            "button": "Создать",
            "columns": {
                "search": "Поиск по столбцам",
                "visible": "Видимость столбцов"
            },
            "name": "Имя:",
            "order": "Сортировка",
            "paging": "Страницы",
            "scroller": "Позиция прокрутки",
            "search": "Поиск",
            "searchBuilder": "Редактор поиска",
            "select": "Выделение",
            "title": "Создать новое состояние",
            "toggleLabel": "Включает:"
        },
        "duplicateError": "Состояние с таким именем уже существует.",
        "emptyError": "Имя не может быть пустым.",
        "emptyStates": "Нет сохраненных состояний",
        "removeConfirm": "Вы уверены, что хотите удалить %s?",
        "removeError": "Не удалось удалить состояние.",
        "removeJoiner": "и",
        "removeSubmit": "Удалить",
        "removeTitle": "Удалить состояние",
        "renameButton": "Переименовать",
        "renameLabel": "Новое имя для %s:",
        "renameTitle": "Переименовать состояние"
    },
    "thousands": " ",
    "zeroRecords": "Записи отсутствуют."
};
}));
