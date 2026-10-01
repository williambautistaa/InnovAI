#!/bin/bash

# Create directories if they don't exist
mkdir -p .vscode

# Open VSCode with the specified directories
code --user-data-dir ./.vscode
