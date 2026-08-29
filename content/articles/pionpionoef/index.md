+++
date = 2026-05-03T11:33:58+02:00
title = "Pionnen op dezelfde lijn: oefening"
weight = 9223372036654815369
+++



<!--
.diagram game.pgn
-->
<div style='cursor:pointer' onclick='navigator.clipboard.writeText("k7/8/6p1/6P1/8/K7/8/8 w - - 0 1"); return false'>

![](ffa024cd.svg)

</div>

Dit is een mooie oefening: Wit mag doen wat hij wil, Zwart kan steeds verhinderen dat hij wint.

<!--
.puzzle game.pgn
-->
<p>(Je kan de partij <a href="game.pgn">hier</a> downloaden in PGN formaat)</p><div id="board">&#160;</div>

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
[FEN "k7/8/6p1/6P1/8/K7/8/8 w - - 0 1"]
[Link "https://www.chess.com/analysis/game/pgn/zEqyEDVVQ/analysis"]

1. Ka4 Kb8 $1 2. Kb4 Kc8 $1 3. Kc4 Kd8 $1 4. Kd4 Ke8 $1 5. Ke4 Kd8 $1 6. Kd4 Ke8 $1 7. Kc5
Ke7 $1 8. Kd5 Kd7 $1 9. Ke5 Ke7 $1 *`, position: 'start', showCoords: true, orientation: 'white', theme: 'blue', pieceStyle: 'wikipedia', figurine: 'merida', locale: 'en', timerTime: '', layout: 'top', showFen: false, coordsInner: false, manyGames: false, coordsFactor: '1.0', coordsFontSize: '', colorMarker: '', startPlay: '', hideMovesBefore: true, notation: 'long', notationLayout: 'list', resizable: true, headers: false,};
	
var board = PGNV.pgnPuzzle('board', config);
</script>
