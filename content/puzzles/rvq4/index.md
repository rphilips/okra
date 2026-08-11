+++
date = '2026-08-09T18:14:16+02:00'
title = 'Torens versus Dame studies (4)'
+++

<!--
.image castle.jpg
-->
![](castle.jpg)

[Château de Chambord](https://www.reisroutes.be/blog/loirevallei/mooiste-kastelen-loire/) - de parel van de Loirevallei
Het Château de Chambord is het grootste kasteel van de Loirevallei. Voor velen is dit hét mooiste kasteel van de Loirevallei. Het is dan ook niet gek dat het Château de Chambord het meest bezochte kasteel in de regio is. Het kasteel werd door koning Frans I in de zestiende eeuw als jachtslot gebouwd. Daardoor werd ook het bos rondom het kasteel beschermd. Vandaag is het park rond het kasteel zelfs het grootste afgesloten bosgebied in Europa, het gebied is even groot als Parijs.

Dergelijk kasteel verdient een buitengewone puzzel.

De kern van de puzzel zijn de pat-dreigingen die de dame partij kan opzetten.



<!--
.diagram puzzle.pgn
-->
<div style='cursor:pointer' onclick='navigator.clipboard.writeText("7k/2q3pP/6P1/8/8/8/6Pp/2RR3K w - - 0 1"); return false'>

![](7kx2q3pPx6P1x8x8x8x6Ppx2RR3Kzwzuzuz0z1.svg)

</div>

<!--
.yt https://www.youtube.com/watch?v=XujNn7HT2A0
-->
{{< youtube XujNn7HT2A0 >}}

Je kan de video ook bekijken op [dropbox](https://www.dropbox.com/scl/fi/u28xmlfp2902pqfg2fp16/Hard_Chess_Puzzle_Two_Rooks_Against_A_Queen_XujN.mp4?rlkey=382xkmb8yhosqan4ii27pudgr&dl=0)


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
[FEN "7k/2q3pP/6P1/8/8/8/6Pp/2RR3K w - - 0 1"]
[Link "https://www.chess.com/analysis/game/pgn/51J2daq1bC/analysis"]

1. Rc4 {Wit mag niet slaan, anders is het pat. Ook Zwart mag de toren niet
slaan, anders geeft de andere toren mat $1} 1... Qb8 2. Rcd4 Qd6 {Deze zet
verhindert de mat.} 3. Rf1 $3 {Wit heeft een plan: hij gaat de torens verdubbelen
op de f-lijn.} 3... Qb8 4. Ra4 Qe8 5. Ra6 Qc8 6. Ra7 Qe8 7. Raf7 Qxf7 8. gxf7 *`, position: 'start', showCoords: true, orientation: 'white', theme: 'blue', pieceStyle: 'wikipedia', figurine: 'merida', locale: 'en', timerTime: '', layout: 'top', showFen: false, coordsInner: false, manyGames: false, coordsFactor: '1.0', coordsFontSize: '', colorMarker: '', startPlay: '', hideMovesBefore: true, notation: 'long', notationLayout: 'list', resizable: true, headers: false,};
	
var board = PGNV.pgnPuzzle('board', config);
</script>
