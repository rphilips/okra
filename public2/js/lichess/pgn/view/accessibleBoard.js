import { read as readFen } from '@lichess-org/chessground/fen';
import { files, ranks } from '@lichess-org/chessground/types';
import { invRanks } from '@lichess-org/chessground/util';
import { h } from 'snabbdom';
import { formatSquareForScreenReader } from './util';
export const renderAccessibleBoard = (ctrl) => {
    const flipped = ctrl.flipped;
    return h('div.lpv__sr-only', {
        attrs: {
            role: 'grid',
            'aria-label': ctrl.translate('aria.accessibleChessboard'),
            'aria-hidden': 'false',
        },
    }, renderBoardRows(ctrl, flipped));
};
const renderBoardRows = (ctrl, flipped) => {
    var _a;
    const pieces = ((_a = ctrl.ground) === null || _a === void 0 ? void 0 : _a.state.pieces) || readFen(ctrl.curData().fen);
    const orderedRanks = flipped ? ranks : invRanks;
    const orderedFiles = flipped ? [...files].reverse() : files;
    return orderedRanks.map(rank => h('div', {
        attrs: {
            role: 'row',
        },
    }, orderedFiles.map(file => {
        const squareKey = `${file}${rank}`;
        const piece = pieces.get(squareKey);
        return renderSquare(ctrl.translate, file, rank, piece);
    })));
};
const renderSquare = (translate, file, rank, piece) => {
    const ariaLabel = formatSquareForScreenReader(translate, file, rank, piece);
    return h('span', {
        attrs: {
            role: 'gridcell',
            'aria-label': ariaLabel,
        },
    }, ariaLabel);
};
//# sourceMappingURL=accessibleBoard.js.map