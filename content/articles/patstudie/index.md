+++
date = '2026-04-24T16:19:53+02:00'
title = 'Pat: het ultieme redmiddel'
+++



<!--
.diagram black:Ke8; white:e7,Ke6
-->
<div style='cursor:pointer' onclick='navigator.clipboard.writeText("4k3/4P3/4K3/8/8/8/8/8 b - - 0 1"); return false'>

![](ddf5cdcc.svg)

</div>





Een speler staat *pat* indien:

- hij aan zet is
- *niet* schaak staat
- geen enkel stuk *reglementair* kan verzetten!

Vele schakers denken dat dit toch wel erg zeldzaam is.

Misschien is dit wel zo, maar toch kan streven naar pat het laatste redmiddel zijn.

Schaken is een spel met vreemde regels maar het zijn precies deze die de partij extra kruiden.


De volgende stelling maakt dit duidelijk:

![](da0cd102.svg)

In deze stelling weet Wit (aan zet) toch te ontsnappen aan het dreigend mat!

{{< youtube Q21Xq636IDY >}}
Je kan de video ook bekijken op [dropbox](https://www.dropbox.com/scl/fi/rmyvzi4cchkjr2wwrx6nn/This-Looks-Hopeless-But-White-have-hope.mp4?rlkey=lbd612ofm97obyt7xcbiqi7ow&dl=0)

Of speel hier na:

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
[Result "1/2-1/2"]
[SetUp "1"]
[FEN "N7/1P6/8/8/8/1k3P2/p5Pb/K7 w - - 0 1"]
[Link "https://www.chess.com/analysis/game/pgn/3HmQ8AA8x6/analysis"]

1. g3 Bxg3 $1 2. f4 Bxf4 $1 3. b8=Q+ Bxb8 $1 4. Nc7 $3 Ba7 5. Nb5 $1 Bc5 6. Nc3 $3 Bd4
1/2-1/2`, position: 'start', showCoords: true, orientation: 'white', theme: 'blue', pieceStyle: 'wikipedia', figurine: 'merida', locale: 'en', timerTime: '', layout: 'top', showFen: false, coordsInner: false, manyGames: false, coordsFactor: '1.0', coordsFontSize: '', colorMarker: '', startPlay: '', hideMovesBefore: true, notation: 'long', notationLayout: 'list', resizable: true, headers: false,};
	
var board = PGNV.pgnPuzzle('board', config);
</script>

