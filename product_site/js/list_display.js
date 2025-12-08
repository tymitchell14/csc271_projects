
//function to display a preview of a list entered by the user
function displayList() {
    //get the name of the list and display it in the preview field
    var listName = document.getElementById("enter_list_name").value;
    var previewName = document.querySelector("h2.listPreviewName");
    previewName.textContent = listName;

    
    formList = document.querySelectorAll("input.list_entry");
    previewList = document.querySelectorAll("li.preview_list_entry");

    //match each list entry to the corresponding entry in the preview field
    for(var i = 0; i < formList.length; i++) {
        previewList[i].textContent = formList[i].value;
    }

}

//event listener so when preview list button is clicked the displayList function runs
var previewButton = document.getElementById("list-preview");
previewButton.addEventListener('click', displayList, false);