(window.webpackJsonp=window.webpackJsonp||[]).push([[487],{947:function(e,a,t){"use strict";t.r(a);var s=t(56),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"データの読み込み"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#データの読み込み"}},[e._v("#")]),e._v(" データの読み込み")]),e._v(" "),t("p",[e._v("これまでに、"),t("code",[e._v("ls")]),e._v("、"),t("code",[e._v("ps")]),e._v("、"),t("code",[e._v("date")]),e._v("、および"),t("code",[e._v("sys")]),e._v("コマンドを使って、ファイル、プロセス、日付そしてシステム自身の情報を取得する方法をみてきました。各コマンドはテーブル情報を提供しますが、他にもデータをテーブルに読み込む方法があります。")]),e._v(" "),t("h2",{attrs:{id:"ファイルを開く"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ファイルを開く"}},[e._v("#")]),e._v(" ファイルを開く")]),e._v(" "),t("p",[e._v("データを操作するためのNuの最も強力なコマンドのひとつが"),t("code",[e._v("open")]),e._v("コマンドです。これは様々なデータ形式に対応したマルチツールです。これがなにを意味するかをみるために、jsonファイルを開いてみましょう。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> open editors/vscode/package.json\n──────────────────┬───────────────────────────────────────────────────────────────────────────────\n name             │ lark \n description      │ Lark support for VS Code \n author           │ Lark developers \n license          │ MIT \n version          │ 1.0.0 \n repository       │ [row type url] \n publisher        │ vscode \n categories       │ [table 0 rows] \n keywords         │ [table 1 rows] \n engines          │ [row vscode] \n activationEvents │ [table 1 rows] \n main             │ ./out/extension \n contributes      │ [row configuration grammars languages] \n scripts          │ [row compile postinstall test vscode:prepublish watch] \n devDependencies  │ [row @types/mocha @types/node tslint typescript vscode vscode-languageclient] \n──────────────────┴───────────────────────────────────────────────────────────────────────────────\n")])])]),t("p",[t("code",[e._v("ls")]),e._v('と同様、Nuが理解できるタイプのファイルを開くと、単なるテキスト(またはバイトストリーム)以上のものが返ってきます。ここでは、JavaScriptプロジェクト内の"package.json"ファイルを開いています。NuはJSONテキストを認識し、テーブルデータを返すことができます。')]),e._v(" "),t("p",[e._v("プロジェクトのバージョンを確認したい場合は、"),t("code",[e._v("get")]),e._v("コマンドを利用します。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> open editors/vscode/package.json | get version\n1.0.0\n")])])]),t("p",[e._v("Nuが現在、直接データをテーブルに読み込める形式は次の通りです。")]),e._v(" "),t("ul",[t("li",[e._v("json")]),e._v(" "),t("li",[e._v("yaml")]),e._v(" "),t("li",[e._v("toml")]),e._v(" "),t("li",[e._v("xml")]),e._v(" "),t("li",[e._v("csv")]),e._v(" "),t("li",[e._v("ini")])]),e._v(" "),t("p",[e._v("しかし、これらのいずれでもないテキストファイルを読み込むとどうなるでしょうか、試してみましょう。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> open README.md\n")])])]),t("p",[e._v("ファイルの内容が表示されます。ファイルが大きすぎる場合は、便利なスクロールビューでファイルの中身を確認してからターミナルに戻ってることができます。読みやすさのために、ソースファイルやマークダウンといった一般的なファイル形式ではシンタックスハイライトを提供します。")]),e._v(" "),t("p",[e._v("裏側では、Nuはこれらのファイルをひとつの大きな文字列としてみています。次に、これらの文字列から必要なデータを取得する方法について説明します。")]),e._v(" "),t("h2",{attrs:{id:"文字列を扱う"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文字列を扱う"}},[e._v("#")]),e._v(" 文字列を扱う")]),e._v(" "),t("p",[e._v("Nuの外からきたデータをNuがいつも理解できるとは限らないことを理解しておくのは重要なことです。多くの場合このデータは文字列として与えられます。")]),e._v(" "),t("p",[e._v("以下のファイルが与えられたと想定してみましょう。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> open people.txt\nOctavia | Butler | Writer\nBob | Ross | Painter\nAntonio | Vivaldi | Composer\n")])])]),t("p",[e._v("必要なデータはパイプ('|')記号で区切られており、各行はそれぞれの人物を表しています。Nuはデフォルトではパイプで区切られたファイル形式を知らないので、明示的にこのファイルをパースする必要があります。")]),e._v(" "),t("p",[e._v("ファイルを読み込むときに最初に行うことは、１行ずつ作業することです。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> open people.txt | lines\n───┬──────────────────────────────\n 0 │ Octavia | Butler | Writer \n 1 │ Bob | Ross | Painter\n 2 │ Antonio | Vivaldi | Composer \n───┴──────────────────────────────\n")])])]),t("p",[e._v("テーブルにもどってきたので、行を使って作業していることがわかります。次のステップは、行をもうすこし便利なものに分割できるかみてみることです。そのために、"),t("code",[e._v("split")]),e._v("コマンドを利用します。名前からわかるように、"),t("code",[e._v("split")]),e._v("は区切り文字を含む文字列を列に分割する方法を提供します。"),t("code",[e._v("split")]),e._v("の"),t("code",[e._v("column")]),e._v("サブコマンドを使って、複数の列に分割するします。必要なのは区切り文字を指定することだけです。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('> open people.txt | lines | split column "|"\n───┬──────────┬───────────┬───────────\n # │ Column1  │ Column2   │ Column3 \n───┼──────────┼───────────┼───────────\n 0 │ Octavia  │  Butler   │  Writer \n 1 │ Bob      │  Ross     │  Painter\n 2 │ Antonio  │  Vivaldi  │  Composer \n───┴──────────┴───────────┴───────────\n')])])]),t("p",[e._v("ほとんど正しいように見えますが、余分なスペースを含んでいます。余分なスペースを"),t("code",[e._v("trim")]),e._v("してみましょう。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('> open people.txt | lines | split column "|" | str trim\n───┬─────────┬─────────┬──────────\n # │ Column1 │ Column2 │ Column3 \n───┼─────────┼─────────┼──────────\n 0 │ Octavia │ Butler  │ Writer \n 1 │ Bob     │ Ross    │ Painter\n 2 │ Antonio │ Vivaldi │ Composer \n───┴─────────┴─────────┴──────────\n')])])]),t("p",[e._v("悪くありません。"),t("code",[e._v("split")]),e._v("コマンドは利用可能なデータとデフォルトのカラム名をつけてくれます。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('> open people.txt | lines | split column "|" | str trim | get Column1\n───┬─────────\n 0 │ Octavia \n 1 │ Bob \n 2 │ Antonio \n───┴─────────\n')])])]),t("p",[e._v("デフォルトの名前を利用するかわりに、列に名前をつけることもできます。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('> open people.txt | lines | split column "|" first_name last_name job | str trim \n───┬────────────┬───────────┬──────────\n # │ first_name │ last_name │ job \n───┼────────────┼───────────┼──────────\n 0 │ Octavia    │ Butler    │ Writer \n 1 │ Bob        │ Ross      │ Painter\n 2 │ Antonio    │ Vivaldi   │ Composer \n───┴────────────┴───────────┴──────────\n')])])]),t("p",[e._v("データをテーブルに変換できたので、これまでテーブルに利用してきたすべてのコマンドをつかうことができます。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('> open people.txt | lines | split column "|" first_name last_name job | str trim | sort-by first_name\n───┬────────────┬───────────┬──────────\n # │ first_name │ last_name │ job \n───┼────────────┼───────────┼──────────\n 0 │ Antonio    │ Vivaldi   │ Composer \n 1 │ Bob        │ Ross      │ Painter\n 2 │ Octavia    │ Butler    │ Writer \n───┴────────────┴───────────┴──────────\n')])])]),t("p",[e._v("文字列を操作するために使用できるその他のコマンドです。")]),e._v(" "),t("ul",[t("li",[e._v("str")]),e._v(" "),t("li",[e._v("lines")]),e._v(" "),t("li",[e._v("size")])]),e._v(" "),t("p",[e._v("データがNuが理解できる構造をもっていることがわかっている場合に呼び出すことのできるヘルパーコマンドのセットもあります。例えば、Rustのロックファイルを開いてみましょう。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('> open Cargo.lock\n# This file is automatically @generated by Cargo.\n# It is not intended for manual editing.\n[[package]]\nname = "adhoc_derive"\nversion = "0.1.2"\n')])])]),t("p",[e._v('"Cargo.lock"ファイルは実際には.tomlファイルですが、ファイル拡張子が.tomlではありません。でも大丈夫です、'),t("code",[e._v("from toml")]),e._v("コマンドが使えます。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> open Cargo.lock | from toml\n──────────┬───────────────────\n metadata │ [row 107 columns] \n package  │ [table 130 rows] \n──────────┴───────────────────\n")])])]),t("p",[t("code",[e._v("from")]),e._v("コマンドはサポートされているテキストフォーマットをサブコマンドとして渡すことでNuが扱える構造化データごとに利用できます。")]),e._v(" "),t("h2",{attrs:{id:"rawモードで開く"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rawモードで開く"}},[e._v("#")]),e._v(" rawモードで開く")]),e._v(" "),t("p",[e._v("ファイルを開いてそのデータのテーブルをすぐに操作できると便利ですが、これは必ずしもやりたいことであるとは限りません。テキストをそのまま取得するために、"),t("code",[e._v("open")]),e._v("コマンドに"),t("code",[e._v("--raw")]),e._v("オプションフラグを渡すことができます。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('> open Cargo.toml --raw\n[package]                                                                                        name = "nu"\nversion = "0.1.3"\nauthors = ["Yehuda Katz <wycats@gmail.com>", "Jonathan Turner <jonathan.d.turner@gmail.com>"]\ndescription = "A shell for the GitHub era"\nlicense = "MIT"\n')])])]),t("h2",{attrs:{id:"urlからの取得"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#urlからの取得"}},[e._v("#")]),e._v(" URLからの取得")]),e._v(" "),t("p",[e._v("ファイルシステムからファイルを読み込むことに加えて、"),t("code",[e._v("fetch")]),e._v("コマンドを利用してURLからリソースを取得できます。\nこれはインターネットからURLの内容をフェッチして返してくれます。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> fetch https://www.jonathanturner.org/feed.xml\n─────┬───────────────────────────\n rss │ [row attributes children] \n─────┴───────────────────────────\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);