// function showImage() {
//     let imageURL = document.getElementById("imageURL").value; //assigns variable to text input value (URL)
//     let newimage = document.createElement('img'); // creates an image element and assigns it to a variable
//     newimage.src = imageURL; //adds the image URL to the src attribute of the image tag that was created.
//     document.getElementById("imageContainer").appendChild(newimage); //displays the image on the page in the empty paragraph box.

// }

function showImage() {
    let newImage = document.createElement('img'); //Creates new img element and saves it to a variable newImage.
    newImage.src = document.getElementById("imageURL").value; //Alters the src attribute of the newly created image so that it is the URL entered by the user.
    document.getElementById('imageContainer').appendChild(newImage);  //Adds the complete element to the specified p tag. It appears on the webpage (DOM).

    //to get number of times function used.
    let x = document.images.length; //counts number of images in the document
    document.getElementById('imageContainer').innerHTML += `  Image Number ${x}`; //adds
    // document.getElementById('imageContainer').children.length = imgCount;
    // HERE I TRIED TO COUNT THE NUMBER OF IMAGES IN THE PARAGRAPH ELEMENT BUT IT DID NOT DISPLAY. document.getElementById('imageContainer').innerHTML += imgCount; 

    
}
 //COULD NOT GET THE PATTERN FOR URL TO WORK BECAUSE GOOGLE USES DATA TEXT

 function DeleteImg() {

   document.getElementById("imageContainer").innerHTML = "";


 }



