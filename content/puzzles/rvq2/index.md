+++
date = '2026-08-03T18:10:36+02:00'
title = 'Torens versus Dame studies (2)'
+++

<!--
.image castle.jpg
-->
![](castle.jpg)

Manoir du Clos Lucé is de laatste verblijfplaats van Leonardo da Vinci.  

Hij liet er drie meesterwerken achter:

- De Mona Lisa
- Sint-Anna-in-drieën
- Johannes de Doper


Tegenwoordig is het een museum over het leven, werk en voorbeelden van uitvindingen van Leonardo da Vinci.

<!--
.diagram file:puzzle.pgn
-->
<div style='cursor:pointer' onclick='navigator.clipboard.writeText("5R1R/8/2k5/q7/2K5/8/8/8 w - - 0 1"); return false'>

![](5R1Rx8x2k5xq7x2K5x8x8x8zwzuzuz0z1.svg)

</div>

Toon hoe Wit wint!

<!--
.yt https://www.youtube.com/watch?v=Btlc9Fdd2N4&list=PLlN1WdzKJmlLS17Yu35d7HPJqvpL9VKwM
-->
{{< youtube Btlc9Fdd2N4 >}}

Je kan de video ook bekijken op [dropbox](https://www.dropbox.com/scl/fi/fb65zbf58pgol11gqglkm/Could_Two_Rooks_Beat_a_Queen_Chess_Puzzle_Btlc9F.mp4?rlkey=yyu6lwkp8dvoabl769krfjqrp&dl=0)

<!--
.puzzle puzzle.pgn
-->
<p>(Je kan de partij <a href="puzzle.pgn">hier</a> downloaden in PGN formaat)</p><div id="board">&#160;</div>

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
[SetUp "1"]
[FEN "5R1R/8/2k5/q7/2K5/8/8/8 w - - 0 1"]
[Link "https://www.chess.com/analysis/game/pgn/5eUXqFW9gr/analysis"]

1. Rh6+ $1 Kd7 2. Rf7+ $1 Ke8 3. Ra7 $3 Qxa7 4. Rh8+ $1 Kd7 5. Rh7+ $1 *`, position: 'start', showCoords: true, orientation: 'white', theme: 'blue', pieceStyle: 'wikipedia', figurine: 'merida', locale: 'en', timerTime: '', layout: 'top', showFen: false, coordsInner: false, manyGames: false, coordsFactor: '1.0', coordsFontSize: '', colorMarker: '', startPlay: '', hideMovesBefore: true, notation: 'long', notationLayout: 'list', resizable: true, headers: false,};
	
var board = PGNV.pgnPuzzle('board', config);
</script>
