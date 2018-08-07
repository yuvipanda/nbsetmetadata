import setuptools
from glob import glob

setuptools.setup(
    name='nbsetmetadata',
    version='0.1.0',
    url="https://github.com/yuvipanda/nbsetmetadata",
    author="Yuvi Panda",
    description="Jupyter Notebook extension to set metadata in notebooks via URL",
    data_files=[
        ('share/jupyter/nbextensions/nbsetmetadata', glob('nbsetmetadata/static/*.js')),
        ('etc/jupyter/nbconfig/notebook.d', ['nbsetmetadata/etc/nbextension.json'])
    ],
    packages=setuptools.find_packages(),
    install_requires=['notebook>=5.6.0']
)
