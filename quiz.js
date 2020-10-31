const appState = {
    current_view: 'intro',
    current_question: 0,
    current_correct: 0,
    current_wrong: 0,
}

document.addEventListener('DOMContentLoaded', () => {

    document.querySelector("#name_form").onsubmit = (e) => {
        e.preventDefault();
        handle_form(e);
    }
  //create_question_view()

    document.querySelector("#app_widget").onclick = (e) => {
        handle_vote(e);
    }
});

const handle_form = (e) => {
    let data = new FormData(e.target);

    let name = data.get('name');
    let quiz = data.get('quiz');

    console.log('Name: ' + name);
    console.log('Quiz: ' + quiz);

    if (quiz === "quiz_1") {
        create_question_view()
    }
    else if (quiz === "quiz_2"){
        create_question_view()
    }
}

const handle_vote = (e) => {
    if (e.target.dataset.vote == "true"){
       
        appState.current_correct +=1 
        create_question_view()
    } else if (e.target.dataset.vote == "false"){
        
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

    const data = await fetch("https:/my-json-server.typicode.com/gracelamalva/CUS1172_Project3/questions");
    const model = await data.json();
    console.log(model);

    for (let i = 0; i < model.length; i++) {
        let template = document.querySelector('#question_card').innerHTML;
        document.querySelector("#app_widget").innerHTML += render_template(template, model[i]);
    }
}

let render_template = (template, data) => {
    let render = Handlebars.compile(template)
    return render(data);
}
