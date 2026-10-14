+++
date = '2026-09-29T13:23:49+02:00'
title = 'Toren tegen pion (2)'
weight = 9223372036641935178
+++

Eerste basisstelling

<!--
.diagram fen:7R/8/8/8/8/2K5/8/2k5 b - - 0 1
-->
<div style='cursor:pointer' onclick='navigator.clipboard.writeText("7R/8/8/8/8/2K5/8/2k5 b - - 0 1"); return false'>

![](3e8d8850783661687c8ea63bdbcc727f.svg)

</div>

Zwart gaat deze partij verliezen maar kan voorlopig ontsnappen

Tweede basisstelling

<!--
.diagram fen:7R/8/8/8/8/1K6/8/k7 b - - 0 1
-->
<div style='cursor:pointer' onclick='navigator.clipboard.writeText("7R/8/8/8/8/1K6/8/k7 b - - 0 1"); return false'>

![](daa8139e8fed3c9f7c023cdf0d1808c3.svg)

</div>

Zwart kan niet ontsnappen: de volgende zet van Wit staat hij schaakmat

Derde basisstelling

<!--
.diagram fen:7R/8/8/8/8/2K5/8/1k6 w - - 0 1; arrow:b1a2
-->
<div style='cursor:pointer' onclick='navigator.clipboard.writeText("7R/8/8/8/8/2K5/8/1k6 w - - 0 1"); return false'>

![](9a9cdf8631769b7fd69826bf1ae6abd3.svg)

</div>

Wit aan zet. Speelt hij Th1, dan moet de zwarte koning naar a2. Daar staat de koning vast! Dit wil zeggen, dat als Wit dit kan vast houden, Zwart ofwel pat staat, ofwel met andere stukken *MOET* spelen.

<!--
.diagram puzzle.pgn
-->
<div style='cursor:pointer' onclick='navigator.clipboard.writeText("8/8/8/3R4/2K5/6pp/k7/8 w - - 0 1"); return false'>

![](c83516c61a5e0430d705e7ec273edd10.svg)

</div>

Een toren die het moet opnemen tegen 2 verbonden pionnen die de 6e (3e) rij bereiken is meestal reddeloos verloren: er gaat altijd wel 1 van de pionnen promoveren.
In deze stelling staat de zwarte koning erg ongelukkig en door gebruik te maken van de 3 basisstellingen gaat de koning+toren toch het pleit in zijn voordeel beslechten.

<!--
.yt MQA5JfpRWJI
-->
{{< youtube MQA5JfpRWJI >}}

Je kan de video ook bekijken op [dropbox](https://www.dropbox.com/scl/fi/nw0net2psslc2adto6ead/Best_chess_study_ever_MQA5JfpRWJI.mp4?rlkey=numin2cc76w4qoch2a0q3o3ft&dl=0)
<!--
.game puzzle.pgn
-->

<!-- Game begin -->
<link href="/okra/js/lichess/pgn/lichess-pgn-viewer.css" type="text/css" rel="stylesheet" />
<style>
    body {
         background: var(--demo-bg, #161512);
      --board-color: #f1e14e;
      margin: 0;
    }
</style>
<div id="game" data-pgn="[Event &#34;?&#34;]&#10;[Site &#34;?&#34;]&#10;[Date &#34;????.??.??&#34;]&#10;[Round &#34;?&#34;]&#10;[White &#34;?&#34;]&#10;[Black &#34;?&#34;]&#10;[Result &#34;*&#34;]&#10;[SetUp &#34;1&#34;]&#10;[FEN &#34;8/8/8/3R4/2K5/6pp/k7/8 w - - 0 1&#34;]&#10;[Link &#34;https://www.chess.com/analysis/game/pgn/57tk79PYnJ/analysis&#34;]&#10;&#10;1. Rd2+ $1 Kb1 (1... Ka3 2. Rd3+ $1) 2. Kc3 $1 Kc1 (2... Ka1 $2 3. Kb3) 3. Ra2 $1 Kd1&#10;(3... Kb1 4. Re2 g2 5. Re1+ $1 Ka2 6. Rg1 $1 h2 7. Rxg2+ $1 Kb1 8. Rxh2) 4. Kd3 $1 Ke1&#10;(4... Kc1 5. Ke3 h2 6. Ra1+ $1 Kb2 7. Rh1 $1) 5. Ke3 $1 Kf1 6. Kf3 $1 Kg1 7. Kxg3 $1 Kf1&#10;8. Kxh3 *">&#160;</div>
<script type="module">
    import { ViewPGN } from "/okra/js/lichess/pgn/one.js";
    ViewPGN("", "game");
</script>
<!-- Game end -->


