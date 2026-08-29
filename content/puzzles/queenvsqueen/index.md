+++
date = 2026-04-11T13:45:30+02:00
title = "Winnen van  uit een onmogelijke positie"
weight = 9223372036656708277
+++



<!--
.diagram puzzle.pgn
-->
![](da0cd102.svg)

Wit speelt en wint!

<!--
.tube https://www.youtube.com/watch?v=EqrUVsVUvAg
-->
{{< youtube EqrUVsVUvAg >}}

<!--
.dropbox https://www.dropbox.com/scl/fi/9a569r8gs5brexn9tyw8l/White-to-move-and-win-and-it-s-amazing.mp4?rlkey=psn5dz2qhffzzmxykdfliz05m&dl=0
-->
Je kan de video ook bekijken op [dropbox](https://www.dropbox.com/scl/fi/9a569r8gs5brexn9tyw8l/White-to-move-and-win-and-it-s-amazing.mp4?rlkey=psn5dz2qhffzzmxykdfliz05m&dl=0)

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
[Result ""]
[FEN "2r5/1Pk1q3/8/4P3/3Q4/8/4K3/8 w - - 0 1"]
[SetUp "1"]

1.Qb6+ Kb8 2.Qa7+ Kc7 3.bxc8=N+ Kxc8 4.Qxe7`, position: 'start', showCoords: true, orientation: 'white', theme: 'blue', pieceStyle: 'wikipedia', figurine: 'merida', locale: 'en', timerTime: '', layout: 'top', showFen: false, coordsInner: false, manyGames: false, coordsFactor: '1.0', coordsFontSize: '', colorMarker: '', startPlay: '', hideMovesBefore: true, notation: 'long', notationLayout: 'list', resizable: true, headers: false,};
	
var board = PGNV.pgnPuzzle('board', config);
</script>
