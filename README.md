# nbsetmetadata

Jupyter Notebook Extension to set metadata in a notebook from a URL Parameter

## Why?

Not particularly useful in itself, but useful when coupled with JupyterHub!
You might want to construct links to particular notebooks that will set some
custom user-specific metadata in the Notebook metadata. This is particularly
useful with LTIAuthenticator, but other uses are possible too.

## Installation

`nbsetmetadata` can be installed from PyPI:

```bash
pip install nbsetmetadata
```

This should install & enable the notebook extension automatically.

## Usage

The extension expects a URL parameter called `setMetadata`, containing
a JSON dictionary. This dictionary is shallow-merged into the metadata
field of the notebook object, and saved.
