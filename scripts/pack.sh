#!/bin/bash

# Run yarn build
yarn build

# Create the export folder if it doesn't exist
if [ ! -d "export" ]; then
    mkdir export
fi

# zip the ./dist folder
zip -r export/obsidian-chrome-manager.zip dist
