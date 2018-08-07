define([
    'base/js/namespace',
], function (
    Jupyter,
) {
    function setMetadataFromURL() {
        // If any JSON blob is in the `setMetadata` query param, we fetch it
        // and shallow-merge it into the metadata of the notebook.
        let url = new URL(document.location);
        if (url.searchParams.has('setMetadata')) {
            let data = JSON.parse(url.searchParams.get('setMetadata'));
            for (let k in data) {
                Jupyter.notebook.metadata[k] = data[k];
                console.log('nbsetmetadata: Setting ' + k + ' to ' + JSON.stringify(data[k]));
            }
            Jupyter.notebook.save_notebook();
        }
    }

    return {
        load_ipython_extension: function() {
            setMetadataFromURL();
        }
    };
});