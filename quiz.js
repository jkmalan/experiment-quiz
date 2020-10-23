const appState = {
    current_view: 'intro',
    current_correct: 0,
    current_wrong: 0
}

document.addEventListener('DOMContentLoaded', () => {

  create_user_view(1)

  document.querySelector("#app_widget").onclick = (e) => {
      handle_vote(e)
  }
});

const handle_vote = (e) => {
    console.log(e.target)
    if (e.target.dataset.vote == "hire"){
        //console.log("hire")
        appState.current_hire +=1 
        create_user_view(1)
    } else if (e.target.dataset.vote == "fire"){
        //console.long("fire")
        appState.current_fire +=1
        create_user_view(1)
    }

    if (appState.current_hire - appState.current_fire < 0){
        alert("Restart")
        appState.current_hire = 0;
        appState.current_fire = 0;
    }
    
}


const create_user_view = async (user_idx) => {

    const data = await fetch ("https://randomuser.me/api/?results=1")
    const model = await data.json()
    const html_element = render_widget(model, '#user_view')
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

