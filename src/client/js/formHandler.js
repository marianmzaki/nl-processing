/*Get Value of the input for URL
 *  - Check if it's URL or not
 *      yes
 *          send it to the backend
 *      no
 *          show user message it's not valid URL
 */

const error = document.getElementById('error');
const text = document.getElementById('text');
const agreement = document.getElementById('agreement');
const subjectivity = document.getElementById('subjectivity');
const confidence = document.getElementById('confidence');
const irony = document.getElementById('irony');
const score_tag = document.getElementById('score_tag');

function handleSubmit(event) {
    event.preventDefault()

    //Get input from form input field
    let input_url = document.getElementById('article-url').value;


    //var input_url = document.querySelectorAll('input[name=input]')
    console.log(" Submit clicked" )
    //Verify that input is a valid url
    if(Client.validateUrl(JSON.parse(JSON.stringify(input_url))))
    {
        

        // Clear previous form results
        text.innerHTML = "";
        agreement.innerHTML = "";
        subjectivity.innerHTML = "";
        confidence.innerHTML = "";
        irony.innerHTML = "";
        score_tag.innerHTML = "";

        console.log("::: FORM INPUT VALID :::")
        const test = JSON.stringify({url: input_url})
        console.log(test);
        console.log("BUILDING REQUEST");
        fetch('http://localhost:8081/article', {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
        },
            body: JSON.stringify({url: input_url})
        })
        .then(res => res.json())
        .then(function(res) {
            // print for debugging
            console.log(res); 
            text.innerHTML = res.sentence_list[0].text;
            agreement.innerHTML = res.agreement;
            subjectivity.innerHTML = res.subjectivity;
            confidence.innerHTML = res.confidence;
            irony.innerHTML = res.irony;
            score_tag.innerHTML = res.score_tag;
        })
        console.log("finish External API call")

    }else{
        text.innerHTML = "";
        agreement.innerHTML = "";
        subjectivity.innerHTML = "";
        confidence.innerHTML = "";
        irony.innerHTML = "";
        score_tag.innerHTML = "";
        // Display error message if URL is not valid
        alert("The URL:[" +JSON.stringify(input_url)+"] is not valid. Please enter a valid url");
        
    } 
}

export { handleSubmit }
