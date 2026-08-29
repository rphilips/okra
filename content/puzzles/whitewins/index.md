+++
date = 2026-05-12T18:59:22+02:00
title = "De witte loper haalt het van de zwarte toren"
weight = 9223372036654011045
+++





<!--
.diagram puzzle.pgn
-->
<div style='cursor:pointer' onclick='navigator.clipboard.writeText("3K4/3P4/7B/8/8/8/7k/4r3 w - - 0 1"); return false'>

![](f76e6203.svg)

</div>

Wit moet 3 zaken oplossen:

- hij moet zijn koning beschermen tegen de schaakjes door de zwarte toren
- hij moet zijn pion beschermen
- hij moet zijn pion weten te promoveren

En dat lukt allemaal ...

<!--
.tube https://www.youtube.com/watch?v=ud7cjSkTT80&list=PLlN1WdzKJmlLS17Yu35d7HPJqvpL9VKwM&index=7
-->
{{< youtube ud7cjSkTT80 >}}

<!--
.dropbox https://www.dropbox.com/scl/fi/7d6o1345f8xkd69i3oylh/Find-White-s-Winning-Move.mp4?rlkey=gewy01fdkzj5pqp4naje77e3n&st=p3p7byk8&dl=0
-->
Je kan de video ook bekijken op [dropbox](https://www.dropbox.com/scl/fi/7d6o1345f8xkd69i3oylh/Find-White-s-Winning-Move.mp4?rlkey=gewy01fdkzj5pqp4naje77e3n&st=p3p7byk8&dl=0)

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
[FEN "3K4/3P4/7B/8/8/8/7k/4r3 w - - 0 1"]
[Link "https://www.chess.com/analysis/game/pgn/3GbwAR57R8/analysis"]

1. Bf4+ $1 Kh3 2. Bd6 $1 Re2 3. Kc7 Rc2+ 4. Kb6 Rb2+ 5. Kc5 Rc2+ 6. Kb4 Rb2+ $6 7.
Kc3 Rf2 8. d8=Q *`, position: 'start', showCoords: true, orientation: 'white', theme: 'blue', pieceStyle: 'wikipedia', figurine: 'merida', locale: 'en', timerTime: '', layout: 'top', showFen: false, coordsInner: false, manyGames: false, coordsFactor: '1.0', coordsFontSize: '', colorMarker: '', startPlay: '', hideMovesBefore: true, notation: 'long', notationLayout: 'list', resizable: true, headers: false,};
	
var board = PGNV.pgnPuzzle('board', config);
</script>
