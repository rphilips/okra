+++
date = '2026-08-03T18:10:36+02:00'
title = 'Torens versus Dame studies'
+++

Ach, virtuele vakantie in de Loire streek...

Dromen van kastelen en de koninginnen in de torens van die kastelen.

Elke dag dat ik er ben, wil ik een kasteel tonen, samen met een eindspelstudie waarbij torens en koninginnen strijden.

Château de Montpoupon: mijn favouriet kasteel!
<!--
.image castle.jpg
-->
![](castle.jpg)

<!--
.diagram puzzle.pgn
-->
<div style='cursor:pointer' onclick='navigator.clipboard.writeText("5q1k/1RR5/8/8/8/8/4K3/8 w - - 0 1"); return false'>

![](5q1kx1RR5x8x8x8x8x4K3x8zwzuzuz0z1.svg)

</div>

Toon hoe Wit toch weet te winnen!

<!--
.yt https://www.youtube.com/watch?v=kzfj2mEcJCY
-->
{{< youtube kzfj2mEcJCY >}}

Je kan de video ook bekijken op [dropbox](https://www.dropbox.com/scl/fi/3waejm3bcgn399vj161px/How_Do_You_Win_With_Two_Rooks_kzfj2mEcJCY.mp4?rlkey=q0nykt2sqzlkugt6bki6sscpf&dl=0)

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
[FEN "5q1k/1RR5/8/8/8/8/4K3/8 w - - 0 1"]
[Link "https://www.chess.com/analysis/game/pgn/3k93X6aUTg/analysis"]

1. Rh7+ $1 Kg8 2. Rhe7 Kh8 (2... Qc8 3. Rg7+ Kh8 4. Rh7+ $1 Kg8 5. Rbg7+ Kf8 6.
Rh8+) 3. Rbc7 Qg8 4. Kf1 $1 Qf8+ 5. Rf7 Qg8 6. Ra7 *`, position: 'start', showCoords: true, orientation: 'white', theme: 'blue', pieceStyle: 'wikipedia', figurine: 'merida', locale: 'en', timerTime: '', layout: 'top', showFen: false, coordsInner: false, manyGames: false, coordsFactor: '1.0', coordsFontSize: '', colorMarker: '', startPlay: '', hideMovesBefore: true, notation: 'long', notationLayout: 'list', resizable: true, headers: false,};
	
var board = PGNV.pgnPuzzle('board', config);
</script>
