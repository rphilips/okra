import LichessPgnViewer from './lichess-pgn-viewer.min.js';

async function fetchPGN(url) {
  try {
    console.log('Before request');
    const response = await fetch(url);
    const data = await response.text();
    console.log('Response:', data);
    console.log('After request');
    return data;
  } catch (error) {
    console.error('Error:', error.message);
    return "";
  }

}



export async function ViewPGN(url, id) {
  let elm = document.getElementById(id);
  let pgnv = elm.getAttribute("data-pgn");
  if (url != "") {
    pgnv = await fetchPGN(url);
  };
  LichessPgnViewer(elm, {
    pgn: pgnv,
    menu: {
      getPgn: {
        enabled: true, // enable the "Get PGN" menu entry
        fileName: undefined, // name of the file when user clicks "Download PGN". Leave empty for automatic name.
      },
      practiceWithComputer: {
        enabled: false,
      },
      analysisBoard: {
        enabled: false,
      },
    },
  });

}


