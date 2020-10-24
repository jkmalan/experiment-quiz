const appState = {
    current_view: 'intro',
    current_correct: 0,
    current_wrong: 0
}

document.addEventListener('DOMContentLoaded', () => {

    document.querySelector("#name_form").onsubmit = (e) => {
        handle_form(e)
    }
  //create_question_view()

  document.querySelector("#app_widget").onclick = (e) => {
      handle_vote(e)
  }
});


const handle_form = (e) => {
    var name = document.querySelector("#name").value;
    var quiz_selection = document.querySelector("#quiz-selection").value;
    alert('hello' + name + "you chose" + quiz_selection);
    if (quiz_selection == "quiz_1"){
        create_question_view()
    }
    else if (quiz_selection == "quiz_2"){
        create_question_view()
    }

}
const handle_vote = (e) => {
    console.log(e.target)
    if (e.target.dataset.vote == "true"){
        //console.log("hire")
        appState.current_correct +=1 
        create_question_view()
    } else if (e.target.dataset.vote == "false"){
        //console.long("fire")
        appState.current_wrong +=1
        create_question_view()
    }

    if (appState.current_correct=10){
        alert("10 correct, Restart")
        appState.current_correct = 0;
        appState.current_wrong = 0;
    }
    
}


const create_question_view = async () => {

    const data = await fetch ("https:/my-json-server.typicode.com/gracelamalva/CUS1172_Project3")
    const model = await data.json()
    const html_element = render_widget(model, '#question_view')
    document.querySelector("#app_widget").innerHTML = html_element;
}


const render_widget = (model, view) => {
    template_source = document.querySelector(view).innerHTML;
   // console.log(template_source);
    var template = Handlebars.compile(template_source);
    var html_widget_element = template({...model,...appState})
   // console.log({...model,...appState})

     // var model = {
     //    first_name : 'Grace'
     //}

    // console.log(model)
    //var html_widget_element = template(model)
    return html_widget_element; 

}

