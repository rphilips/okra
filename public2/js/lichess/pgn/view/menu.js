import { h } from 'snabbdom';
import { eventRepeater } from '../events';
import { bind, bindMobileMousedown, onInsert } from './util';
export const renderMenu = (ctrl) => {
    var _a, _b, _c, _d;
    return h('div.lpv__menu.lpv__pane', {
        attrs: {
            role: 'menu',
            'aria-label': (_a = ctrl.translate('menu')) !== null && _a !== void 0 ? _a : 'Menu',
        },
        hook: {
            insert: (vnode) => {
                const menuEl = vnode.elm;
                // Focus first menu item when menu opens
                const firstItem = menuEl.querySelector('[role="menuitem"]');
                firstItem === null || firstItem === void 0 ? void 0 : firstItem.focus();
                setupMenuKeyboard(ctrl, menuEl);
            },
        },
    }, [
        h('button.lpv__menu__entry.lpv__menu__flip.lpv__fbt', {
            attrs: { role: 'menuitem' },
            hook: bind('click', ctrl.flip),
        }, ctrl.translate('flipTheBoard')),
        ((_b = ctrl.opts.menu.analysisBoard) === null || _b === void 0 ? void 0 : _b.enabled)
            ? h('a.lpv__menu__entry.lpv__menu__analysis.lpv__fbt', {
                attrs: {
                    role: 'menuitem',
                    href: ctrl.analysisUrl(false),
                    target: '_blank',
                    'aria-label': ctrl.translate('aria.linkOpensInNewTab', ctrl.translate('analysisBoard')),
                },
            }, ctrl.translate('analysisBoard'))
            : undefined,
        ((_c = ctrl.opts.menu.practiceWithComputer) === null || _c === void 0 ? void 0 : _c.enabled)
            ? h('a.lpv__menu__entry.lpv__menu__practice.lpv__fbt', {
                attrs: {
                    role: 'menuitem',
                    href: ctrl.practiceUrl(),
                    target: '_blank',
                    'aria-label': ctrl.translate('aria.linkOpensInNewTab', ctrl.translate('practiceWithComputer')),
                },
            }, ctrl.translate('practiceWithComputer'))
            : undefined,
        ctrl.opts.menu.getPgn.enabled
            ? h('button.lpv__menu__entry.lpv__menu__pgn.lpv__fbt', {
                attrs: { role: 'menuitem' },
                hook: bind('click', ctrl.togglePgn),
            }, ctrl.translate('getPgn'))
            : undefined,
        !ctrl.game.metadata.isLichess || !((_d = ctrl.opts.menu.analysisBoard) === null || _d === void 0 ? void 0 : _d.enabled)
            ? renderExternalLink(ctrl)
            : undefined,
    ]);
};
const renderExternalLink = (ctrl) => {
    const link = ctrl.game.metadata.externalLink;
    const linkText = ctrl.translate(ctrl.game.metadata.isLichess ? 'viewOnLichess' : 'viewOnSite');
    return (link &&
        h('a.lpv__menu__entry.lpv__fbt', {
            attrs: {
                role: 'menuitem',
                href: link,
                target: '_blank',
                'aria-label': ctrl.translate('aria.linkOpensInNewTab', linkText),
            },
        }, linkText));
};
export const renderControls = (ctrl) => h('div.lpv__controls', {
    attrs: {
        role: 'navigation',
        'aria-label': ctrl.translate('aria.navigationControls'),
    },
}, [
    ctrl.pane === 'board' ? undefined : dirButton(ctrl, 'first', 'step-backward'),
    dirButton(ctrl, 'prev', 'left-open'),
    h('button.lpv__fbt.lpv__controls__menu.lpv__icon', {
        class: {
            active: ctrl.pane !== 'board',
            'lpv__icon-ellipsis-vert': ctrl.pane === 'board',
        },
        hook: {
            insert: (vnode) => {
                const el = vnode.elm;
                el.addEventListener('click', ctrl.toggleMenu);
                // Store reference for focus management
                ctrl.menuButton = el;
            },
        },
        attrs: {
            'aria-label': ctrl.translate('menu'),
            'aria-expanded': String(ctrl.pane === 'menu'),
            'aria-haspopup': 'menu',
        },
    }, ctrl.pane === 'board' ? undefined : 'X'),
    dirButton(ctrl, 'next', 'right-open'),
    ctrl.pane === 'board' ? undefined : dirButton(ctrl, 'last', 'step-forward'),
]);
const dirButton = (ctrl, to, icon) => {
    const isDisabled = ctrl.pane === 'board' && !ctrl.canGoTo(to);
    return h(`button.lpv__controls__goto.lpv__controls__goto--${to}.lpv__fbt.lpv__icon.lpv__icon-${icon}`, {
        class: { disabled: isDisabled },
        hook: onInsert(el => bindMobileMousedown(el, e => eventRepeater(() => ctrl.goTo(to), e))),
        attrs: {
            'aria-label': ctrl.translate(`aria.${to}`),
            'aria-disabled': String(isDisabled),
            disabled: isDisabled,
        },
    });
};
const setupMenuKeyboard = (ctrl, menuEl) => {
    const handleMenuKeydown = (e) => {
        var _a;
        switch (e.key) {
            case 'Enter':
            case ' ':
                e.preventDefault();
                (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.click();
                break;
            case 'Escape':
                e.preventDefault();
                ctrl.toggleMenu();
                break;
        }
    };
    menuEl.addEventListener('keydown', handleMenuKeydown);
};
//# sourceMappingURL=menu.js.map