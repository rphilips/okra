+++
date = '2026-05-19T15:01:21+02:00'
title = 'Triangulatie'
+++

In

<!--
.link articles/pionpion1/index.md
-->
[Pion tegen pion: de dansende koningen]({{< relref "/articles/pionpion1/index.md">}}) <span style='font-size: smaller;cursor: pointer' onclick='navigator.clipboard.writeText("articles/pionpion1/index.md");'>(artikel)</span>

zie je een goed voorbeeld van triangulatie: Wit maakt een driehoekje om uiteindelijk op het beslissende veld terecht te komen.


Een prachtig voorbeeld van triangualtie vind je terug in de studie van [Alexey Troitsky](https://en.wikipedia.org/wiki/Alexey_Troitsky).
Troitsky was een legendarische componist die als geen andere schaakideeën wist te illustreren.


<!--
.diagram game.pgn
-->
<div style='cursor:pointer' onclick='navigator.clipboard.writeText("8/5K1p/3p2pr/6p1/4n1pb/3N1bk1/4prn1/4B1RR w - - 0 1"); return false'>

![](9387842b.svg)

</div>



<!--
.tube https://www.youtube.com/watch?v=6W2cwsrcGVI&list=PLlN1WdzKJmlLS17Yu35d7HPJqvpL9VKwM&index=31
-->
{{< youtube 6W2cwsrcGVI >}}

<!--
.dropbox https://www.dropbox.com/scl/fi/4qj3b0k078myc39wt0uk7/The_INCREDIBLE_Puzzle_Stockfish_Can_t_Crack_6W2c.mp4?rlkey=7zntr7alddwqohwwxgido6tns&st=q4eim7r2&dl=0
-->
Je kan de video ook bekijken op [dropbox](https://www.dropbox.com/scl/fi/4qj3b0k078myc39wt0uk7/The_INCREDIBLE_Puzzle_Stockfish_Can_t_Crack_6W2c.mp4?rlkey=7zntr7alddwqohwwxgido6tns&st=q4eim7r2&dl=0)

<!--
.game game.pgn
-->
<div id="board">&#160;</div>

<script src="/js/pgnviewer.js"></script>
<script src="https://rphilips.github.io/okra/js/pgnviewer.js"></script>
<style>
san   {color: black;}
</style>

<script>
config = {
pgn: `[Event "?"]
[Site "?"]
[Date "????.??.??"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[FEN "8/5K1p/3p2pr/6p1/4n1pb/3N1bk1/4prn1/4B1RR w - - 0 1"]
[Link "https://www.chess.com/analysis/game/pgn/2WG2V2zEaA/analysis"]
[SetUp "1"]

 {Dit lijkt een complexe situatie. Als we echter goed kijken dan valt het op dat
Zwart enkel de pion op d6 en de toren op h6 kan bewegen. Als bvb. het paard op
e4 speelt dan geeft de loper op e1 schaakmat! Het plan voor Wit wordt
duidelijk: hij moet er voor zorgen dat de toren en de pion niet meer kunnen
bewegen. Het paard moet dan aan de slag en de witte loper geeft schaakmat. Er
is echter een probleempje. Als zwart er in slaagt om het paard op e4 met
tempowinst te bewegen (door bijvoorbeeld schaak te geven ...) dan kan hij de
loper op f3 wegspelen om zo plaats te geven aan zijn koning.}1.Kf8 {Wit gaat
eerst de pion op d6 verplichten te spelen door de toren passend aan te vallen.
Merk op dat de witte koning gebruik maakt van de zwarte velden: daar staat hij
veilig voor de paardschaakjes.}1...Rh5 2.Kg7 d5 $1 3.Kf8 Rh6 $1 4.Ke7 {Wit moet
nu een zetje winnen. Dit kan enkel door eens op een wit veld te stappen. Het
veld c6 is safe.}4...Rh5 $1 5.Kd8 Rh6 $1 6.Kc7 Rh5 $1 7.Kb6 Rh6 $1 8.Kc6
{Triangualtie: merk op dat de witte koning nu met het juiste ritme naar de
toren terugkeert.}8...Rh5 $1 9.Kc7 Rh6 10.Kd8 Rh5 11.Ke7 Rh6 12.Kf8 Rh5 13.Kg7
$1 d4 $1 14.Kf8 {Wit moet nog een keer een zet winnen met triangulatie. Je zou
nu denken: terug naar c6, triangulatie, terug naar de toren ... Echter als hij
nu op c6 stapt, dan speelt hij zijn paard weg en het is de loper die schaakt
geeft! Echter ook het veld c2 is 'veilig'}14...Rh6 $1 15.Ke7 Rh5 16.Kd8 Rh6
17.Kc7 $1 Rh5 $1 18.Kb6 Rh6 $1 19.Ka5 $1 Rh5 20.Kb4 $1 Rh6 21.Ka3 $1 Rh5 22.Kb2
Rh6 23.Kc1 Rh5 24.Kc2 {Triangulatie!}24...Rh6 25.Kb2 Rh5 26.Ka3 Rh6 27.Kb4 Rh5
28.Ka5 Rh6 29.Kb6 Rh5 30.Kc7 Rh6 31.Kd8 Rh5 32.Ke7 Rh6 33.Kf8 Rh5 34.Kg7 h6
35.Kf8 {Zwart kan nog enkel zijn paard bewegen!}35...Nf6 36.Bxf2# *`, position: 'start', showCoords: true, orientation: 'white', theme: 'blue', pieceStyle: 'wikipedia', figurine: 'merida', locale: 'en', timerTime: '', layout: 'top', showFen: false, coordsInner: false, manyGames: false, coordsFactor: '1.0', coordsFontSize: '', colorMarker: '', startPlay: '', hideMovesBefore: true, notation: 'long', notationLayout: 'list', resizable: true, headers: false,};

var board = PGNV.pgnView('board', config);
</script>

