document.querySelector("#add-time")
.addEventListener("click", cloneField)

function cloneField(){
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true)

    const fields = newFieldsContainer.querySelectorAll('input') 

    for (field in fields){
        fields[field].value = ""
    }

    /** OU
     * fields.forEach(function(field){
     * field.value = ""
     * })
     * 
     */

    document.querySelector('#schedule-items').appendChild(newFieldsContainer)
}