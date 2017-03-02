# genre-cloud
## Generate JSON
### install exiftool
```
sudo apt-get install libimage-exiftool-perl
```
### enable globstar
```
shopt -s globstar
```
### write JSON file
```
exiftool Musik/**/*.mp3 -Genre -json > genre-cloud.json
```
## Understand HTML structure
* index.html contains a prerendered version
* main.js generates a new version from JSON to html

## Create SVGs for outer cloud shape (optional)
### install inkscape
```
sudo apt-get install inkscape
```
### remove height and width
```
width="450px"
height="300px"
```
## Polyfill
I tried shapes-polyfill.js but it didn't worked :/