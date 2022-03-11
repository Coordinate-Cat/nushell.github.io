(window.webpackJsonp=window.webpackJsonp||[]).push([[469],{938:function(a,s,e){"use strict";e.r(s);var t=e(35),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"introduccion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduccion"}},[a._v("#")]),a._v(" Introducción")]),a._v(" "),e("p",[a._v("Hola, y bienvenido al proyecto Nushell. El objetivo de este proyecto es tomar la filosofía Unix de shells, dónde tuberías "),e("em",[a._v("-pipes-")]),a._v(" conectan comandos simples juntos y llevarlos al estilo moderno de desarrollo.")]),a._v(" "),e("p",[a._v('Nu toma ideas de muchos territorios familiares: shells tradicionales como bash, shells basadas en objetos como PowerShell, programación funcional, programación de sistemas, y más. Pero, en lugar de ser un "Todo en uno", Nu enfoca su energía en hacer algunas cosas bien:')]),a._v(" "),e("ul",[e("li",[a._v("Crear una multiplataforma shell flexible con un toque moderno.")]),a._v(" "),e("li",[a._v("Permitir mezclar y combinar aplicaciones de línea de comandos con una shell que entiende la estructura de sus datos.")]),a._v(" "),e("li",[a._v("Tenga el brillo UX que proporcionan las aplicaciones modernas CLI.")])]),a._v(" "),e("p",[a._v("La manera más facil de ver qué puede hacer Nu es con ejemplos, iniciemos.")]),a._v(" "),e("p",[a._v("Lo primero que notarás al ejercutar un comando como "),e("code",[a._v("ls")]),a._v(" es que en lugar de un bloque de texto que regresa, recibirás una tabla estructurada.")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\n╭────┬───────────────────────┬──────┬───────────┬─────────────╮\n│ "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#  │         name          │ type │   size    │  modified   │")]),a._v("\n├────┼───────────────────────┼──────┼───────────┼─────────────┤\n│  "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("404")]),a._v(".html              │ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" │     "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("429")]),a._v(" B │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" days ago  │\n│  "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" │ CONTRIBUTING.md       │ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" │     "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("955")]),a._v(" B │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v(" mins ago  │\n│  "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" │ Gemfile               │ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" │   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.1")]),a._v(" KiB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" days ago  │\n│  "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" │ Gemfile.lock          │ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" │   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("6.9")]),a._v(" KiB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" days ago  │\n│  "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(" │ LICENSE               │ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" │   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.1")]),a._v(" KiB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" days ago  │\n│  "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" │ README.md             │ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" │     "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("213")]),a._v(" B │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" days ago  │\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])])]),e("p",[a._v("La tabla no solamente muestra lo que hay en el directorio de una manera distinta sino algo más. Como las tablas de una hoja de cálculo "),e("em",[a._v("-"),e("em",[a._v("spreadsheet")]),a._v("-")]),a._v(", esta tabla te permite trabajar con los datos más interactivamente.")]),a._v(" "),e("p",[a._v("Lo primero que vamos hacer es ordenar nuestra tabla por tamaño. Para poder hacerlo tomaremos la salida de "),e("code",[a._v("ls")]),a._v(" y la alimentaremos al comando que ordena tablas basado en los valores de una columna (para este ejemplo sería la columna "),e("code",[a._v("size")]),a._v(").")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" sort-by size "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" reverse\n╭────┬───────────────────────┬──────┬───────────┬─────────────╮\n│ "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#  │         name          │ type │   size    │  modified   │")]),a._v("\n├────┼───────────────────────┼──────┼───────────┼─────────────┤\n│  "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" │ Gemfile.lock          │ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" │   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("6.9")]),a._v(" KiB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" days ago  │\n│  "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" │ SUMMARY.md            │ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" │   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.7")]),a._v(" KiB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" days ago  │\n│  "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" │ Gemfile               │ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" │   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.1")]),a._v(" KiB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" days ago  │\n│  "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" │ LICENSE               │ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" │   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.1")]),a._v(" KiB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" days ago  │\n│  "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(" │ CONTRIBUTING.md       │ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" │     "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("955")]),a._v(" B │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("9")]),a._v(" mins ago  │\n│  "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" │ books.md              │ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" │     "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("687")]),a._v(" B │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" days ago  │\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])])]),e("p",[a._v("Puedes observar que para lograrlo no tuvimos que pasar argumentos al comando "),e("code",[a._v("ls")]),a._v(". En cambio, nosotros usamos el comando "),e("code",[a._v("sort-by")]),a._v(" que proporciona Nu para ordenar la salida del comando "),e("code",[a._v("ls")]),a._v(". Para ver los archivos más grandes en las primeras filas usamos el comando "),e("code",[a._v("reverse")]),a._v(".")]),a._v(" "),e("p",[a._v("Nu proporciona muchos comandos que trabajan con tablas. Por ejemplo, podemos filtrar los contenidos de la tabla de "),e("code",[a._v("ls")]),a._v(" para únicamente mostrar archivos superiores a 1 kilobytes:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" where size "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" 1kb\n╭───┬───────────────────┬──────┬─────────┬────────────╮\n│ "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# │       name        │ type │  size   │  modified  │")]),a._v("\n├───┼───────────────────┼──────┼─────────┼────────────┤\n│ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" │ Gemfile           │ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.1")]),a._v(" KiB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" days ago │\n│ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" │ Gemfile.lock      │ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("6.9")]),a._v(" KiB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" days ago │\n│ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" │ LICENSE           │ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.1")]),a._v(" KiB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" days ago │\n│ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" │ SUMMARY.md        │ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.7")]),a._v(" KiB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" days ago │\n╰───┴───────────────────┴──────┴─────────┴────────────╯\n")])])]),e("p",[a._v("Al igual que en la filosofía Unix, poder hacer que los comandos hablen entre ellos nos da maneras de mezclar y combinar de formas distintas. Miremos otro ejemplo:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v("\n╭─────┬──────┬──────────────────────┬─────────┬───────┬───────────┬──────────╮\n│  "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#  │ pid  │         name         │ status  │  cpu  │    mem    │ virtual  │")]),a._v("\n├─────┼──────┼──────────────────────┼─────────┼───────┼───────────┼──────────┤\n│   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("7570")]),a._v(" │ nu                   │ Running │  "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.96")]),a._v(" │  "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("23.2")]),a._v(" MiB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("32.8")]),a._v(" GiB │\n│   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3533")]),a._v(" │ remindd              │ Sleep   │  "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.00")]),a._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("103.6")]),a._v(" MiB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("32.3")]),a._v(" GiB │\n│   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3495")]),a._v(" │ TVCacheExtension     │ Sleep   │  "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.00")]),a._v(" │  "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("11.9")]),a._v(" MiB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("32.2")]),a._v(" GiB │\n│   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3490")]),a._v(" │ MusicCacheExtension  │ Sleep   │  "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.00")]),a._v(" │  "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("12.9")]),a._v(" MiB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("32.2")]),a._v(" GiB │\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])])]),e("p",[a._v("Es posible que estés familiarizado con el comando "),e("code",[a._v("ps")]),a._v(" si has utilizado Linux. Con dicho comando, podemos tener una lista de los procesos actuales que ejecuta el sistema, qué estado tienen y sus nombres. También podemos ver la carga CPU del proceso.")]),a._v(" "),e("p",[a._v("¿Qué tal si quisiéramos mostrar los procesos que activamente usan el CPU? Así como hicimos con el comando "),e("code",[a._v("ls")]),a._v(" previamente, también podemos trabajar con la tabla que nos devuelve "),e("code",[a._v("ps")]),a._v(":")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" where cpu "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v("\n╭───┬──────┬────────────────┬─────────┬────────┬───────────┬──────────╮\n│ "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# │ pid  │      name      │ status  │  cpu   │    mem    │ virtual  │")]),a._v("\n├───┼──────┼────────────────┼─────────┼────────┼───────────┼──────────┤\n│ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1583")]),a._v(" │ Terminal       │ Running │  "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("20.69")]),a._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.8")]),a._v(" MiB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("33.0")]),a._v(" GiB │\n│ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" │  "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("579")]),a._v(" │ photoanalysisd │ Running │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("139.50")]),a._v(" │  "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("99.9")]),a._v(" MiB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("32.3")]),a._v(" GiB │\n╰───┴──────┴────────────────┴─────────┴────────┴───────────┴──────────╯\n")])])]),e("p",[a._v("Hasta ahora, hemos visto el uso de "),e("code",[a._v("ls")]),a._v(" y "),e("code",[a._v("ps")]),a._v(" para enumerar archivos y procesos. Nu también ofrece otros comandos que pueden crear tablas con información de gran utilidad. Exploremos "),e("code",[a._v("date")]),a._v(" y "),e("code",[a._v("sys")]),a._v(".")]),a._v(" "),e("p",[a._v("Ejecutando "),e("code",[a._v("date now")]),a._v(" nos proporciona información del día y tiempo:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" now\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v("-03-07 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("14")]),a._v(":14:51.684619600 -08:00\n")])])]),e("p",[a._v("Para obtener una tabla podemos alimentar la salida a "),e("code",[a._v("date to-table")])]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" now "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" to-table\n╭───┬──────┬───────┬─────┬──────┬────────┬────────┬──────────╮\n│ "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# │ year │ month │ day │ hour │ minute │ second │ timezone │")]),a._v("\n├───┼──────┼───────┼─────┼──────┼────────┼────────┼──────────┤\n│ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v(" │     "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" │   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("7")]),a._v(" │   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("14")]),a._v(" │     "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("45")]),a._v(" │      "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" │ -08:00   │\n╰───┴──────┴───────┴─────┴──────┴────────┴────────┴──────────╯\n")])])]),e("p",[a._v("Ejecutando "),e("code",[a._v("sys")]),a._v(" devuelve información sobre el sistema en el que se ejecuta Nu:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" sys\n╭───────┬───────────────────╮\n│ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("host")]),a._v("  │ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("record "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),a._v(" fields"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" │\n│ cpu   │ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("table "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(" rows"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("    │\n│ disks │ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("table "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" rows"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("    │\n│ mem   │ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("record "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(" fields"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" │\n│ temp  │ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("table "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" row"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("     │\n│ net   │ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("table "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(" rows"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("    │\n╰───────┴───────────────────╯\n")])])]),e("p",[a._v("Esta tabla se ve un poco diferente con las que ya hemos trabajado. El comando "),e("code",[a._v("sys")]),a._v(" nos regresa una tabla que también contiene tablas estructuradas en las celdas en vez de valores simples. Para explorar esos datos, necesitamos "),e("em",[a._v("obtener")]),a._v(" la columna deseada para mostrar:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" sys "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" get "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("host")]),a._v("\n╭────────────────┬────────────────────────╮\n│ name           │ Debian GNU/Linux       │\n│ os version     │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),a._v("                     │\n│ kernel version │ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("5.10")]),a._v(".92-v8+            │\n│ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("hostname")]),a._v("       │ lifeless               │\n│ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("uptime")]),a._v("         │ 19day 21hr 34min 45sec │\n│ sessions       │ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("table "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" row"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("          │\n╰────────────────┴────────────────────────╯\n")])])]),e("p",[a._v("El comando "),e("code",[a._v("get")]),a._v(' nos permite ir directo al valor de una columa de la tabla. Aquí estamos mirando la columna "host" que contiene información del host dónde se está ejecutando Nu. El nombre del sistema operativo, hostname, CPU, y más. Miremos los nombres de los usuarios en el sistema:')]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" sys "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" get host.sessions.name\n╭───┬────╮\n│ "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" │ jt │\n╰───┴────╯\n")])])]),e("p",[a._v('En este momento, solo hay un usuario en el sistema llamado "jt". Notarás que podemos pasar una ruta de columna '),e("em",[a._v("-"),e("em",[a._v("column path")]),a._v("-")]),a._v(" y no únicamente el nombre de una columna. Nu tomará esta ruta de columna e irá a los datos correspondientes en la tabla.")]),a._v(" "),e("p",[a._v('Es posible que hayas notado algo más diferente también. En lugar de tener una tabla de datos, tenemos solo un elemento individual: la cadena "jt". Nu trabaja tanto con tabla de datos así como cadenas. Cadenas son una parte importante de trabajar con comandos fuera de Nu.')]),a._v(" "),e("p",[a._v("Miremos en acción cómo funcionan las cadenas fuera de Nu. Tomaremos el ejemplo anterior y ejecutaremos el comando externo "),e("code",[a._v("echo")]),a._v(" (el carácter "),e("code",[a._v("^")]),a._v(" le informa a Nu que no se desea usar el comando "),e("em",[a._v("interno")]),a._v(" también llamado "),e("code",[a._v("echo")]),a._v("):")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" sys "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" get host.sessions.name "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" each "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("it"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" ^echo "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$it")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\njt\n")])])]),e("p",[a._v("Si esto se parece mucho a lo que teníamos antes, ¡tienes buen ojo! Es similar, pero con una diferencia importante: hemos llamado "),e("code",[a._v("echo")]),a._v(" con el valor que vimos antes. Esto nos permite pasar datos fuera de Nu a "),e("code",[a._v("echo")]),a._v(" (o cualquier comando fuera de Nu, como "),e("code",[a._v("git")]),a._v(" por ejemplo)")]),a._v(" "),e("p",[e("em",[a._v("Nota: Para texto de ayuda de los comandos internos de Nu, puedes descubrirlos con el comando "),e("code",[a._v("help")])]),a._v(":")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("help")]),a._v(" path\nExplore and manipulate paths.\n\nThere are three ways to represent a path:\n\n* As a path literal, e.g., "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/home/viking/spam.txt'")]),a._v("\n* As a structured path: a table with "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'parent'")]),a._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'stem'")]),a._v(", and "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'extension'")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("and\n* "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'prefix'")]),a._v(" on Windows"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" columns. This "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("format")]),a._v(" is produced by the "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'path parse'")]),a._v("\n  subcommand.\n* As an inner list of path parts, e.g., "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'[[ / home viking spam.txt ]]'")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n  Splitting into parts is "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v(" by the "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("path "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("split")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" command.\n\nAll subcommands accept all three variants as an input. Furthermore, the "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'path\njoin'")]),a._v(" subcommand can be used to "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("join")]),a._v(" the structured path or path parts back into\nthe path literal.\n\nUsage:\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" path\n\nSubcommands:\n  path "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("basename")]),a._v(" - Get the final component of a path\n  path "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("dirname")]),a._v(" - Get the parent directory of a path\n  path exists - Check whether a path exists\n  path "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("expand")]),a._v(" - Try to "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("expand")]),a._v(" a path to its absolute form\n  path "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("join")]),a._v(" - Join a structured path or a list of path parts.\n  path parse - Convert a path into structured data.\n  path relative-to - Get a path as relative to another path.\n  path "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("split")]),a._v(" - Split a path into parts by a separator.\n  path "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("type")]),a._v(" - Get the "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("type")]),a._v(" of the object a path refers to "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("e.g., file, dir, symlink"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\nFlags:\n  -h, --help\n      Display this "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("help")]),a._v(" message\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);