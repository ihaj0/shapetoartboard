// Get the active document and artboard
var doc = app.activeDocument;
var activeArtboard = doc.artboards[doc.artboards.getActiveArtboardIndex()];

// Get the width and height of the active artboard
var artboardWidth = activeArtboard.artboardRect[2] - activeArtboard.artboardRect[0];
var artboardHeight = activeArtboard.artboardRect[1] - activeArtboard.artboardRect[3];

// Create a new rectangle with the same dimensions as the artboard
var shape = doc.pathItems.rectangle(
    0, // top
    0, // left
    artboardWidth,
    artboardHeight
);

// Center the shape on the artboard
shape.position = [
    activeArtboard.artboardRect[0],
    activeArtboard.artboardRect[1]
];