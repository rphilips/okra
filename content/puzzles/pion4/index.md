+++
date = '2026-04-15T10:32:14+02:00'
title = 'Basis pion eindspel 4'
+++

<!--
.diagram puzzle.pgn
-->
![](da0cd102.svg)

Dit is het eindspel uit de partij Maroczy - Marshall gespeeld in 1903 te Monte Carlo.

Zwart speelt en wint!


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
pgn: `[Event ""]
[Site ""]
[Date ""]
[Round ""]
[White ""]
[Black ""]
[Result "*"]
[FEN "8/8/8/8/6p1/5k2/7K/8 b - - 0 1"]
[SetUp "1"]

1...Kf2 2.Kh1 Kg3 3.Kg1 Kh3 4.Kh1 g3 5.Kg1 g2 6.Kf2 Kh2 *`, position: 'start', showCoords: true, orientation: 'white', theme: 'blue', pieceStyle: 'wikipedia', figurine: 'merida', locale: 'en', timerTime: '', layout: 'top', showFen: false, coordsInner: false, manyGames: false, coordsFactor: '1.0', coordsFontSize: '', colorMarker: '', startPlay: '', hideMovesBefore: true, notation: 'long', notationLayout: 'list', resizable: true, headers: false,};
	
var board = PGNV.pgnPuzzle('board', config);
</script>
