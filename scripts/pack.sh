#!/bin/bash

function packageCmd() {
    yarn "$@"
}

function clean() {
    rm -rf node_modules
    rm -rf dist
    rm -rf export
    echo "Cleaned working directories"
}

function build() {
    echo "Building..."
    packageCmd build
    if [ $? -ne 0 ]; then
        echo "Build failed"
        exit 1
    fi
}

function install() {
    if [ ! -d "node_modules" ]; then
        echo "Installing dependencies..."
        packageCmd install
    fi
    if [ $? -ne 0 ]; then
        echo "Failed to install dependencies"
        exit 1
    fi
}

function package() {
    echo "Packaging..."
    if [ ! -d "export" ]; then
        mkdir export
    fi
    zip -r export/$(node -p "require('./package.json').name")-v$(node -p "require('./package.json').version").zip ./dist/
    if [ $? -ne 0 ]; then
        echo "Packaging failed"
        exit 1
    fi
    echo "Packaging successful"
}

function main() {
    case "$1" in
        clean)
            clean
            exit 0
        ;;
        cleanBuild)
            clean
            install
            build
            package
            exit 0
        ;;
        *)
            install
            build
            package
            exit 0
        ;;
    esac
}

main "$@"
