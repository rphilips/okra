+++
date = '2026-04-09T15:36:46+02:00'
title = 'Basis pion eindspel 1'
+++

<!--
.diagram puzzle.pgn
-->
![](da0cd102.svg)

Wit speelt en wint!


<!--
.puzzle puzzle.pgn
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
[SetUp "1"]
[FEN "8/5p2/4p3/8/3P4/5k2/P7/5K2 w - - 0 1"]
[Link "https://www.chess.com/analysis/game/pgn/fiXS8Ti8N/analysis"]

1. d5 exd5 2. a4 *`, position: 'start', showCoords: true, orientation: 'white', theme: 'blue', pieceStyle: 'wikipedia', figurine: 'merida', locale: 'en', timerTime: '', layout: 'top', showFen: false, coordsInner: false, manyGames: false, coordsFactor: '1.0', coordsFontSize: '', colorMarker: '', startPlay: '', hideMovesBefore: true, notation: 'long', notationLayout: 'list', resizable: true, headers: false,};
	
var board = PGNV.pgnPuzzle('board', config);
</script>

