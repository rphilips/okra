+++
date = 2026-05-13T13:19:01+02:00
title = "Test je kennis van het pionneneindspel"
weight = 9223372036653945066
+++



<!--
.diagram puzzle.pgn
-->
<div style='cursor:pointer' onclick='navigator.clipboard.writeText("8/3Pk3/8/1K3P2/8/8/8/8 w - - 0 1"); return false'>

![](d1aa19cf.svg)

</div>

In 

<!--
.link articles/pawnbasic
-->
[Basis pionneneindspelen]({{< relref "/articles/pawnbasic/index.md">}}) <span style='font-size: smaller;cursor: pointer' onclick='navigator.clipboard.writeText("articles/pawnbasic");'>(artikel)</span>

leerden we de elementaire pionneneindspelen.

Schaken is echter nooit eenvoudig zoals het volgende eindspel toont


<!--
.tube https://www.youtube.com/watch?v=mtPzy7adwbs&list=PLlN1WdzKJmlLS17Yu35d7HPJqvpL9VKwM&index=2
-->
{{< youtube mtPzy7adwbs >}}

<!--
.dropbox https://www.dropbox.com/scl/fi/psvad062dn1pbnfhns6mn/Test-Your-Endgame-Technique.mp4?rlkey=6q8vz6eecahydusc3wtfcv1sh&st=1ws4befd&dl=0
-->
Je kan de video ook bekijken op [dropbox](https://www.dropbox.com/scl/fi/psvad062dn1pbnfhns6mn/Test-Your-Endgame-Technique.mp4?rlkey=6q8vz6eecahydusc3wtfcv1sh&st=1ws4befd&dl=0)

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
[FEN "8/3Pk3/8/1K3P2/8/8/8/8 w - - 0 1"]
[Link "https://www.chess.com/analysis/game/pgn/5U1S2AywkA/analysis"]

1. Kc6 $1 Kd8 2. Kd5 $1 Kxd7 3. f6 $1 Kd8 4. Kd6 Ke8 5. Ke6 Kf8 6. f7 Kg7 7.
Ke7 $1 *`, position: 'start', showCoords: true, orientation: 'white', theme: 'blue', pieceStyle: 'wikipedia', figurine: 'merida', locale: 'en', timerTime: '', layout: 'top', showFen: false, coordsInner: false, manyGames: false, coordsFactor: '1.0', coordsFontSize: '', colorMarker: '', startPlay: '', hideMovesBefore: true, notation: 'long', notationLayout: 'list', resizable: true, headers: false,};
	
var board = PGNV.pgnPuzzle('board', config);
</script>
