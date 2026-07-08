import { glyphs } from './glyph';
export function bindMobileMousedown(el, f, redraw) {
    for (const mousedownEvent of ['touchstart', 'mousedown']) {
        el.addEventListener(mousedownEvent, e => {
            f(e);
            e.preventDefault();
            if (redraw)
                redraw();
        }, { passive: false });
    }
}
export const bind = (eventName, f, redraw, passive = true) => onInsert(el => el.addEventListener(eventName, e => {
    const res = f(e);
    if (res === false)
        e.preventDefault();
    redraw === null || redraw === void 0 ? void 0 : redraw();
    return res;
}, { passive }));
export function onInsert(f) {
    return {
        insert: vnode => f(vnode.elm),
    };
}
export const clockContent = (seconds) => {
    if (!seconds && seconds !== 0)
        return ['-'];
    const date = new Date(seconds * 1000), sep = ':', baseStr = pad2(date.getUTCMinutes()) + sep + pad2(date.getUTCSeconds());
    return seconds >= 3600 ? [Math.floor(seconds / 3600) + sep + baseStr] : [baseStr];
};
const pad2 = (num) => (num < 10 ? '0' : '') + num;
export const formatSquareForScreenReader = (translate, file, rank, piece) => {
    const square = `${file.toUpperCase()}${rank}`;
    if (!piece)
        return `${square} ${translate('aria.empty')}`;
    const pieceName = translate(`aria.piece.${piece.role}`);
    return `${square} ${translate(`aria.${piece.color}`)} ${pieceName}`;
};
export const formatMoveForScreenReader = (san, nags, translate) => {
    let formatted = translate ? transSanToWords(san, translate) : san;
    if (nags && nags.length > 0) {
        const annotations = nags
            .map(nag => { var _a; return (_a = glyphs[nag]) === null || _a === void 0 ? void 0 : _a.name; })
            .filter(Boolean)
            .join(', ');
        if (annotations) {
            formatted += `, ${annotations}`;
        }
    }
    return formatted;
};
const transSanToWords = (san, translate) => san
    .split('')
    .map(c => {
    if (c === 'x')
        return translate('san.takes');
    if (c === '+')
        return translate('san.check');
    if (c === '#')
        return translate('san.checkmate');
    if (c === '=')
        return translate('san.promotesTo');
    if (c === '@')
        return translate('san.droppedOn');
    const code = c.charCodeAt(0);
    if (code > 48 && code < 58)
        return c; // 1-8
    if (code > 96 && code < 105)
        return c.toUpperCase(); // a-h
    if (c === 'K')
        return translate('aria.piece.king');
    if (c === 'Q')
        return translate('aria.piece.queen');
    if (c === 'R')
        return translate('aria.piece.rook');
    if (c === 'B')
        return translate('aria.piece.bishop');
    if (c === 'N')
        return translate('aria.piece.knight');
    if (c === 'O')
        return 'O'; // for castling
    return c;
})
    .join(' ')
    .replace('O - O - O', translate('san.longCastling'))
    .replace('O - O', translate('san.shortCastling'));
//# sourceMappingURL=util.js.map