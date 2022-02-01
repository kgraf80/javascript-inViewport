"use strict";
exports.__esModule = true;
function inViewport(element, threshold, callback, advancedConfiguration) {
    if (advancedConfiguration === void 0) { advancedConfiguration = null; }
    if ('IntersectionObserver' in window && element) {
        var safeRoot = advancedConfiguration && advancedConfiguration.root
            ? advancedConfiguration.root
            : null;
        var safeRootMargin = advancedConfiguration && advancedConfiguration.rootMargin
            ? advancedConfiguration.rootMargin
            : '0px';
        var config = {
            root: safeRoot,
            rootMargin: safeRootMargin,
            threshold: (Array.isArray(threshold) && threshold.length > 0) ||
                (threshold >= 0 && threshold <= 1)
                ? threshold
                : 0.5
        };
        var observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (change) {
                if (change.isIntersecting === true && change.intersectionRatio > 0) {
                    if (Array.isArray(callback)) {
                        callback[0]();
                        if (callback.length === 1) {
                            observer.unobserve(change.target);
                        }
                    }
                    else {
                        callback();
                    }
                }
                if (change.isIntersecting === false) {
                    if (Array.isArray(callback) && typeof callback[1] === 'function') {
                        callback[1]();
                    }
                }
            });
        }, config);
        observer.observe(element);
    }
}
exports["default"] = inViewport;
//# sourceMappingURL=inviewport.js.map