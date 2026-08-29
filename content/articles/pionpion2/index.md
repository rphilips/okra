+++
date = 2026-05-02T18:40:16+02:00
title = "Pionnen op dezelfde lijn 1"
weight = 9223372036654876191
+++



<!--
.diagram white:Kd4,f5; black: Kd7,f6; mark:c6,d6,e6
-->
<div style='cursor:pointer' onclick='navigator.clipboard.writeText("8/3k4/5p2/5P2/3K4/8/8/8 w - - 0 1"); return false'>

![](210eed7c.svg)

</div>

Wit kan de zwarte pion veroveren indien hij 1 van de 3 (aan beide zijden) aanliggende velden kan betreden.

Is hij aan zet, dan neemt hij de oppositie en wint hij!

Is Zwart aan zet dan neemt deze de oppositie en is de partij remise.

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
[FEN "8/3k4/5p2/5P2/3K4/8/8/8 w - - 0 1"]
[Link "https://www.chess.com/analysis/game/pgn/49j9xRfJ6z/analysis"]

1. Kd5 Ke7 2. Kc6 Kf7 3. Kd7 Kf8 4. Ke6 Kg7 5. Ke7 Kh6 6. Kxf6 *`, position: 'start', showCoords: true, orientation: 'white', theme: 'blue', pieceStyle: 'wikipedia', figurine: 'merida', locale: 'en', timerTime: '', layout: 'top', showFen: false, coordsInner: false, manyGames: false, coordsFactor: '1.0', coordsFontSize: '', colorMarker: '', startPlay: '', hideMovesBefore: true, notation: 'long', notationLayout: 'list', resizable: true, headers: false,};
	
var board = PGNV.pgnPuzzle('board', config);
</script>
