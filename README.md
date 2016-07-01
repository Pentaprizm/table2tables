Table2tables - jQuery wide tables transformation plugin by Yuri Solovyov.
Feel free to contact me via pleomax80@yandex.ru


This small jQuery plugin helps to transform too wide table into series of small separated tables. It's very helpful for presentation table data on mobile phones.
Table2tables function takes only 1 parameter "excludeLastRow". If it's true, plugin will not transform last tale row. You may need it in some specific cases -
imagine you have wide shopping cart table. This table has header(stmh. like 'th'), then there are items rows, and the last row represents total amount and price.
"excludeLastRow" prevent last row transformation.

Table2tables plugin is easy to use: just find your table and call the plugin: $('your table here').table2tables(excludeLastRow);
Voila!

you also can examine the result here : http://yuriandsolo.bsite.by/table2tables
