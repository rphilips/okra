+++
date = '2026-05-02T18:34:31+02:00'
title = 'Pion tegen pion: de dansende koningen'
+++

<!--
.diagram game.pgn
-->
<div style='cursor:pointer' onclick='navigator.clipboard.writeText("8/8/8/4p1K1/2k1P3/8/8/8 w - - 0 1"); return false'>

![](f0b13ca6.svg)

</div>

Dit is een veel voorkomende positie en ... wees voorzichtig: elke misstap is fataal.

Als Wit - aan zet - goed speelt, dan wint hij de partij!

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
[FEN "8/8/8/4p1K1/2k1P3/8/8/8 w - - 0 1"]
[Link "https://www.chess.com/analysis/game/pgn/4xahi2yUkN/analysis"]

1. Kf6 $1 Kd4 2. Kf5 $1 Kc5 3. Kxe5 Kc6 4. Kf6 *`, position: 'start', showCoords: true, orientation: 'white', theme: 'blue', pieceStyle: 'wikipedia', figurine: 'merida', locale: 'en', timerTime: '', layout: 'top', showFen: false, coordsInner: false, manyGames: false, coordsFactor: '1.0', coordsFontSize: '', colorMarker: '', startPlay: '', hideMovesBefore: true, notation: 'long', notationLayout: 'list', resizable: true, headers: false,};
	
var board = PGNV.pgnPuzzle('board', config);
</script>

