+++
date = '2026-05-18T12:44:13+02:00'
title = 'En passant en Magnus Carlsen'
+++

En passant is zo een schaakregel die niet zo goed wordt begrepen door beginnende schakers.

In de volgende video legt Daniel Rensch (Internationaal schaakmeester en mede-eigenaar van chess.com) uit hoe een en ander in mekaar zit:

<!--
.tube https://www.youtube.com/watch?v=M-f95OHjkLA&list=PLlN1WdzKJmlLS17Yu35d7HPJqvpL9VKwM&index=1
-->
{{< youtube M-f95OHjkLA >}}

<!--
.dropbox https://www.dropbox.com/scl/fi/0a2lnhkxbugho63a8dib4/En_Passant_Explained_M_f95OHjkLA.mp4?rlkey=64fs7ra42cizyz4lxx3gmqjbw&st=e84h3h24&dl=0
-->
Je kan de video ook bekijken op [dropbox](https://www.dropbox.com/scl/fi/0a2lnhkxbugho63a8dib4/En_Passant_Explained_M_f95OHjkLA.mp4?rlkey=64fs7ra42cizyz4lxx3gmqjbw&st=e84h3h24&dl=0)


Kijk eens wat Magnus Carlsen overkwam tijdens een blitz wedstrijd:

<!--
.diagram game.pgn
-->
<div style='cursor:pointer' onclick='navigator.clipboard.writeText("6kr/5pb1/1pB1p1pp/4P3/5n1P/r1p2N2/P4PP1/2KR3R w - - 0 1"); return false'>

![](d7cf68a1.svg)

</div>

<!--
.tube https://www.youtube.com/watch?v=Q_iGTCuiSqw&list=PLlN1WdzKJmlLS17Yu35d7HPJqvpL9VKwM&index=16
-->
{{< youtube Q_iGTCuiSqw >}}

<!--
.dropbox https://www.dropbox.com/scl/fi/wh8meik1z15bhzf6uiaud/Magnus_gets_crushed_by_En_Passant_Checkmate_ches.mp4?rlkey=t5gt3lu4ilmfhj9fsa4t6v6sr&st=92zalq0s&dl=0
-->
Je kan de video ook bekijken op [dropbox](https://www.dropbox.com/scl/fi/wh8meik1z15bhzf6uiaud/Magnus_gets_crushed_by_En_Passant_Checkmate_ches.mp4?rlkey=t5gt3lu4ilmfhj9fsa4t6v6sr&st=92zalq0s&dl=0)

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
[Result "1-0"]
[SetUp "1"]
[FEN "6kr/5pb1/1pB1p1pp/4P3/5n1P/r1p2N2/P4PP1/2KR3R w - - 0 1"]
[Link "https://www.chess.com/analysis/game/pgn/asyo4MPe6/analysis"]

1. Rd8+ Kh7 $4 2. Ng5+ $3 hxg5 3. hxg5+ Nh5 4. Rxh5+ $3 gxh5 5. Be4+ $1 f5 6. exf6# $1
1-0`, position: 'start', showCoords: true, orientation: 'white', theme: 'blue', pieceStyle: 'wikipedia', figurine: 'merida', locale: 'en', timerTime: '', layout: 'top', showFen: false, coordsInner: false, manyGames: false, coordsFactor: '1.0', coordsFontSize: '', colorMarker: '', startPlay: '', hideMovesBefore: true, notation: 'long', notationLayout: 'list', resizable: true, headers: false,};

var board = PGNV.pgnView('board', config);
</script>

