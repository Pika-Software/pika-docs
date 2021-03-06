---
title: Delete
---

```jsx
:Delete([where])
```

### Описание
Удаляет данные из таблицы

### Агрументы
|Название |Тип |Описание |
--- | --- | ---
*where* | `string / table` | Фильтрирует что надо изменить. Если таблица, то конвертирует в `key = value`. [Тык сюда](https://www.sqlitetutorial.net/sqlite-where/) чтобы понять.

### Возращает
1. `nil / false` - Если `false`, значит есть ошибка.

### Примеры {#examples}
Удаляем все данные из таблицы. *хе хе*
```lua
t:Delete()
```

Удаляем данные игрока `player1`
```lua
t:Delete({ id64 = 'player1' })
-- Или
t:Delete("id64 = 'player1'")
```

Удаляем данные всех у кого денег меньше 1000
```lua
t:Delete('money < 1000')
```