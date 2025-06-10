async function runEnding() {
    // Fade out the document body (except the new overlay)
    document.body.style.transition = 'opacity 1s';
    document.body.style.opacity = '0';
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Clear body and reset opacity to show the ending
    document.body.style.opacity = '1';
    document.body.innerHTML = ''; // Remove all existing content

    // Create a div in the center of the screen and display the ending text
    const endingDiv = document.createElement('div');
    endingDiv.style.position = 'fixed';
    endingDiv.style.top = '50%';
    endingDiv.style.left = '50%';
    endingDiv.style.transform = 'translate(-50%, -50%)';
    endingDiv.style.color = 'white';
    endingDiv.style.fontSize = '2rem';
    endingDiv.style.textAlign = 'center';
    endingDiv.style.whiteSpace = 'pre-line'; // So \n is respected

    endingDiv.textContent = "Merci d'avoir joué !\nThe End";

    // Set background to black or darken screen
    document.body.style.backgroundColor = 'black';
    document.body.appendChild(endingDiv);

    // fade out the ending text after a delay
    await new Promise(resolve => setTimeout(resolve, 5000));
    endingDiv.style.transition = 'opacity 1s';
    endingDiv.style.opacity = '0';
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Remove the ending div
    
    document.body.removeChild(endingDiv);


}

export default runEnding;
