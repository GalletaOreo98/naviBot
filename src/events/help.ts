import { bot } from "../index";

bot.help(ctx => {    
    ctx.replyWithHTML(helpInfo)
})

const helpInfo = 
`
<b>### Help ###</b>

<b>Sintaxis:</b>
<pre>nv -&lt;Comando&gt; &lt;Parametros&gt;</pre>

<b>Comandos:</b>
<pre>nv -numrand &lt;x1&gt; &lt;x2&gt;</pre>
numero aleatorio entre <i>x1</i> y <i>x2</i>

<pre>nv -ppt &lt;Elección&gt;</pre>
Juego. Elección: <i>piedra</i> | <i>papel</i> | <i>tijera</i>

<pre>nv -elegirentre &lt;e1&gt;, &lt;e2&gt;, &lt;e3&gt;,... &lt;en&gt;</pre>
Elige uno de los <i>en</i> elementos

<pre>nv -mezclar &lt;e1&gt;, &lt;e2&gt;, &lt;e3&gt;,... &lt;en&gt;</pre>
Mezcla los <i>en</i> elementos

<pre>nv -repartirentre &lt;c1&gt;, &lt;c2&gt;, &lt;c3&gt;,... &lt;cn&gt; : &lt;e1&gt;, &lt;e2&gt;, &lt;e3&gt;,... &lt;en&gt;</pre>
Reparte los <i>en</i> elementos entre los <i>cn</i> contenedores
`

export { bot as help }
