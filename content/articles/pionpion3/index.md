+++
date = '2026-05-02T18:48:33+02:00'
title = 'Pionnen op dezelfde lijn 2'
+++
<!--
.diagram game.pgn
-->
<div style='cursor:pointer' onclick='navigator.clipboard.writeText("8/8/3k4/5p2/5P2/4K3/8/8 w - - 0 1"); return false'>

![](1f57da11.svg)

</div>

Deze stelling lijkt heel erg op de stelling die we hebben gezien in ['Pionnen op dezelfde lijn 1'](articles/pionpion2).

Het resultaat is echter steeds remise: Wit - aan zet - kan weliswaar de pion winnen maar dit is onvoldoende om te winnen: Zwart verhindert immers dat Wit de sleutelvelden bereikt.

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
[Result "1/2-1/2"]
[SetUp "1"]
[FEN "8/8/3k4/5p2/5P2/4K3/8/8 w - - 0 1"]
[Link "https://www.chess.com/analysis/game/pgn/4unVMXgr46/analysis"]

1. Kd4 Ke6 2. Kc5 Ke7 3. Kd5 Kf7 4. Ke5 Kg6 5. Ke6 Kg7 $1 6. Kxf5 Kf7 $1 7. Ke5 Ke7 $1
8. f5 Kf7 $1 9. f6 Kf8 $1 10. Ke6 Ke8 $1 11. f7+ Kf8 12. Kf6 1/2-1/2`, position: 'start', showCoords: true, orientation: 'white', theme: 'blue', pieceStyle: 'wikipedia', figurine: 'merida', locale: 'en', timerTime: '', layout: 'top', showFen: false, coordsInner: false, manyGames: false, coordsFactor: '1.0', coordsFontSize: '', colorMarker: '', startPlay: '', hideMovesBefore: true, notation: 'long', notationLayout: 'list', resizable: true, headers: false,};
	
var board = PGNV.pgnPuzzle('board', config);
</script>



