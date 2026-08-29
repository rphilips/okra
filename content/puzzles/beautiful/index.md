+++
date = 2026-06-27T10:43:14+02:00
title = "Prachtige eindspel"
weight = 9223372036650066413
+++



Als we een pion promoveren nemen we automatisch een koningin: het sterkste stuk op het bord staat garant voor de winst.

Toch zagen we in 
[Underpromotion]({{< relref "/articles/underpromotion/index.md">}}) <span style='font-size: smaller;cursor: pointer' onclick='navigator.clipboard.writeText("articles/underpromotion/index.md");'>(artikel)</span>
tot drie maal toe, dat wit alleen wint door te promoveren tot een ander stuk.


<!--
.diagram puzzle.pgn
-->
<div style='cursor:pointer' onclick='navigator.clipboard.writeText("7K/P1p1p1p1/2P1P1Pk/6pP/3p2P1/1P6/3P4/8 w - - 0 1"); return false'>

![](a3b2e83f.svg)

</div>

Deze schaakpuzzel gaat over hetzelfde thema!

{{< youtube irbZZcWty-M >}}

Je kan de video ook bekijken op [dropbox](https://www.youtube.com/watch?v=irbZZcWty-M)




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
[Result "1-0"]
[SetUp "1"]
[FEN "7K/P1p1p1p1/2P1P1Pk/6pP/3p2P1/1P6/3P4/8 w - - 0 1"]
[Link "https://www.chess.com/analysis/game/pgn/27k63mBvHk/analysis"]

1. a8=N $1 d3 2. Nb6 $1 cxb6 3. c7 $1 b5 4. c8=N $1 b4 5. Nd6 $1 exd6 6. e7 $1 d5 7. e8=N $1
d4 8. Nf6 $1 gxf6 9. g7 f5 10. g8=N# 1-0`, position: 'start', showCoords: true, orientation: 'white', theme: 'blue', pieceStyle: 'wikipedia', figurine: 'merida', locale: 'en', timerTime: '', layout: 'top', showFen: false, coordsInner: false, manyGames: false, coordsFactor: '1.0', coordsFontSize: '', colorMarker: '', startPlay: '', hideMovesBefore: true, notation: 'long', notationLayout: 'list', resizable: true, headers: false,};
	
var board = PGNV.pgnPuzzle('board', config);
</script>
