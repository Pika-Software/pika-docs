---
title: PMD
---

## Переменные
```lua
  PM_Downloader.Downloading -- Глобальная переменная, если true - идёт загрузка модели
  PM_Downloader.DownloadedModels -- Таблица с таблицами аддонов, выглядит так:
```

```
	{
	  [id аддона] = {
		Hands = {
		  [1] = "путь до модели рук 1",
		  [2] = "путь до модели рук 2"
		  ... - и так дажее сколько угодно много
		}, -- Может быть как таблицей, так и false если моделей рук нет
		Models = {
		  [1] = "путь до модели 1",
		  [2] = "путь до модели 2"
		  ... - и так дажее сколько угодно много
		} -- Может быть как таблицей, так и false если моделей игрока нет, если нет моделей игрока, то и таблицы рук и аддона тоже существовать не будет
	  },
	  [id аддона] = {
		Hands = {
		  [1] = "путь до модели рук 1",
		  [2] = "путь до модели рук 2"
		  ... - и так дажее сколько угодно много
		}, -- Может быть как таблицей, так и false если моделей рук нет
		Models = {
		  [1] = "путь до модели 1",
		  [2] = "путь до модели 2"
		  ... - и так дажее сколько угодно много
		} -- Может быть как таблицей, так и false если моделей игрока нет, если нет моделей игрока, то и таблицы рук и аддона тоже существовать не будет
	  },
	  ... - и так дажее сколько угодно много
	}
```

## Проверки [возвращают bool] 
```lua
PM_Downloader.HasModel(id) -- Проверяет скачана ли данная модель и можно ли её использовать ( т.е. её нет в чёрном списке )
PM_Downloader.IsPlayerModel(model) -- Проверяет модель, на соответствие шаблону
```
## Основные функции
```lua
PM_Downloader.GetModel(var, modelNumber) -- Получить модель, если в var игрок, то она вернёт id модели игрока, если же var это сторка содержащая id то вернёт путь до модели, modelNumber - номер модели в аддоне, работает только если в качестве var используется id, если modelNumber не задан вернёт первую модель из таблицы аддона. ТАКЖЕ ФУНКЦИЯ МОЖЕТ ВЕРНУТЬ FALSE В СЛУЧАЕ ОТСУТСТВИЯ аддона, моделей, var или же если что то не так

PM_Downloader.GetHands(id,handsNumber) -- получить руки из скачаного аддона, id - соответственно id аддона, handsNumber - номер модели рук в таблице

PM_Downloader.Install(id,modelNumber,handsNumber) -- Установить модель на игрока, id - id аддона, modelNumber - номер модели в таблице для установки на игрока , handsNumber - номер рук в таблице для установки на игрока (handsNumber может быть nil или false, тогда руки не будут установленны.)

PM_Downloader.Download(id,install,nonotify) -- Начать скачивание модели ( id - id в воркшопе, install (bool) - если true, тогда модель будет установлена на игрока сразу после загрузки, nonotify (bool) - разрешает/запрещяет выводить информацию о процессе загрузки и обработки модели)

PM_Downloader.InstallHands(id,handsNumber) -- Установка рук (id - id аддона из которго будут браться руки, handsNumber - номер рук в таблице ( если в 1 аддоне несколько моделей рук) )

PM_Downloader.Remove() -- Откат модели до модели по умолчанию (инжинер из satisfactory)
	
PM_Downloader.RemoveHands() -- Откат модели рук до модели по умолчанию ( руки инжинера из satisfactory)
```
## Дополнительные
```lua
PM_Downloader.UpdateModel(ply) -- Переустановка модели на игроке, мною не используется.
PM_Downloader.Boardcast(id) -- Принудительная отправка модели всем игрокам на сервере
```