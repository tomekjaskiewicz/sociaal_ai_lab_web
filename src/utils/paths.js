/**
 * Resolves an absolute image path (e.g. "/images/foo.jpg") to the correct URL
 * depending on the hosting environment (e.g. "/sociaal_ai_lab_web/images/foo.jpg").
 */
export const resolvePath = (path) => {
    if (!path) return path;
    if (path.startsWith('http')) return path; // External link
    if (path.startsWith('/')) {
        // Remove leading slash and prepend base
        const base = import.meta.env.BASE_URL;
        // If base is '/', don't double slash (though browser handles it)
        if (base === '/') return path;
        return `${base}${path.substring(1)}`;
    }
    return path;
};
