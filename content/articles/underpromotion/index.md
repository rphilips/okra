+++
date = '2026-05-18T12:14:00+02:00'
title = 'Underpromotion'
+++

In praktisch alle gevallen promoveert een pion die de achtste rij bereikt tot koningin.

Zoals deze studie toont, kan het echter ook anders ...

<!--
.diagram game.pgn
-->
<div style='cursor:pointer' onclick='navigator.clipboard.writeText("5rk1/3qPb2/7p/7P/8/3B4/8/1K1R4 w - - 0 1"); return false'>

![](6e4eefbb.svg)

</div>

<!--
.tube https://www.youtube.com/watch?v=eeCwsn5V0Zo
-->
{{< youtube eeCwsn5V0Zo >}}

<!--
.dropbox https://www.dropbox.com/scl/fi/ajgim7hnpzrj3on27jj2h/Underpromote_A_Very_Cool_and_Tricky_Endgame_Stud.mp4?rlkey=0f00bw6dr7gjnqvbtxklkl6yz&st=vj2g6gad&dl=0
-->
Je kan de video ook bekijken op [dropbox](https://www.dropbox.com/scl/fi/ajgim7hnpzrj3on27jj2h/Underpromote_A_Very_Cool_and_Tricky_Endgame_Stud.mp4?rlkey=0f00bw6dr7gjnqvbtxklkl6yz&st=vj2g6gad&dl=0)

<!--
.game game.pgn
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
[FEN "5rk1/3qPb2/7p/7P/8/3B4/8/1K1R4 w - - 0 1"]
[Link "https://www.chess.com/analysis/game/pgn/4LsJoGQcTx/analysis"]

1. Bh7+ $1 Kg7 $6 (1... Kxh7 2. exf8=N+ $3) (1... Kh8 $6 2. exf8=R+ $3) 2. exf8=B+ $3 *`, position: 'start', showCoords: true, orientation: 'white', theme: 'blue', pieceStyle: 'wikipedia', figurine: 'merida', locale: 'en', timerTime: '', layout: 'top', showFen: false, coordsInner: false, manyGames: false, coordsFactor: '1.0', coordsFontSize: '', colorMarker: '', startPlay: '', hideMovesBefore: true, notation: 'long', notationLayout: 'list', resizable: true, headers: false,};

var board = PGNV.pgnView('board', config);
</script>



