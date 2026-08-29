+++
date = 2026-06-12T06:46:02+02:00
title = "De fried liver attack en schaakmat door rokade"
weight = 9223372036651376645
+++



<!--
.diagram r1bqkb1r/ppp2Npp/2n5/3np3/2B5/8/PPPP1PPP/RNBQK2R w KQkq - 0 1
-->
<div style='cursor:pointer' onclick='navigator.clipboard.writeText("r1bqkb1r/ppp2Npp/2n5/3np3/2B5/8/PPPP1PPP/RNBQK2R w KQkq - 0 1"); return false'>

![](559723d1.svg)

</div>

De [Fried Liver Attack](https://en.wikipedia.org/wiki/Fried_Liver_Attack) is een van de meest beruchte openingen in het schaakspel: nagenoeg alle beginnende schakers ondergaan het paard offer op de zesde zet.

Niemand minder dan Magnus Carlsen is hier een liefhebber van met ... zwart. Alleen, hij weet daar altijd een extraatje aan mee te geven.
In de volgende partij zien we Carlsen een lesje geven aan [Gukesh](https://nl.wikipedia.org/wiki/Dommaraju_Gukesh)

<!--
.tube https://www.youtube.com/watch?v=ezza5yydBNw&t=59s
-->
{{< youtube ezza5yydBNw >}}

<!--
.dropbox https://www.youtube.com/watch?v=ezza5yydBNw&t=59s
-->
Je kan de video ook bekijken op [dropbox](https://www.youtube.com/watch?v=ezza5yydBNw&t=59s)


We gaan echter een partij volgen van een ander wonderkind. In die partij zien we de dertien-jarige [Paul Morphy](https://nl.wikipedia.org/wiki/Paul_Morphy) aande slag tegen zijn vader [Alonzo](https://en.wikipedia.org/wiki/Alonzo_Morphy).

<!--
.image morphy.jpg
-->
![](morphy.jpg)
<!--
.image amorphy.jpg
-->
![](amorphy.jpg)

De voorlaatste stelling is echter wel heel speciaal:

<!--
.diagram r4b1r/ppp3pp/8/4p3/2Pq4/3P4/PP2QPPP/2k1K2R w K - 0 1; arrow:e1g1
-->
<div style='cursor:pointer' onclick='navigator.clipboard.writeText("r4b1r/ppp3pp/8/4p3/2Pq4/3P4/PP2QPPP/2k1K2R w K - 0 1"); return false'>

![](7173342e.svg)

</div>

Laten we de partij zelf volgen (de bespreking is door chess.com)

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
pgn: `[Event "New Orleans ?"]
[Site "New Orleans, LA USA"]
[Date "1850.??.??"]
[Round "?"]
[White "Paul Morphy"]
[Black "Alonzo Morphy"]
[Result "1-0"]
[SetUp "1"]
[FEN "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/1NBQKBNR w Kkq - 0 1"]
[PlyCount "35"]
[EventDate "1850.??.??"]
[WhiteElo ""]
[BlackElo ""]
[ECO ""]
[Link "https://www.chess.com/article/view/fried-liver-attack-chess-opening"]

{Note: Paul Mophy is giving his father rook odds $1} 1. e4 e5 2. Nf3 Nc6 3. Bc4
Nf6 4. Ng5 d5 5. exd5 Nxd5 6. Nxf7 Kxf7 7. Qf3+ Ke6 8. Nc3 Nd4 9. Bxd5+ Kd6 10.
Qf7 Be6 11. Bxe6 Nxe6 12. Ne4+ Kd5 13. c4+ Kxe4 14. Qxe6 Qd4 15. Qg4+ Kd3 16.
Qe2+ Kc2 17. d3+ Kxc1 18. O-O# {Amazing $1 Castling and checkmating in the same
move $1} 1-0`, position: 'start', showCoords: true, orientation: 'white', theme: 'blue', pieceStyle: 'wikipedia', figurine: 'merida', locale: 'en', timerTime: '', layout: 'top', showFen: false, coordsInner: false, manyGames: false, coordsFactor: '1.0', coordsFontSize: '', colorMarker: '', startPlay: '', hideMovesBefore: true, notation: 'long', notationLayout: 'list', resizable: true, headers: false,};

var board = PGNV.pgnView('board', config);
</script>
