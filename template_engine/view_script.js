var model  = [
    {
      name: "Dr. Christoforou",
      expertise : "Machine Learing, Artificial Intelligence; Brain-computer interfaces; neurally-informed predicrtive models",
      profile : "https://scholar.google.com/citations?user=0PkTM-MAAAAJ&hl=en"
    },
    {
      name: "Dr. Yadav",
      expertise : "Mobile Computing, Computer Systems",
      profile : "https://scholar.google.co.in/citations?user=OsCNwzEAAAAJ&hl=en"
    },
    {
      name: "Dr. Keshtkar",
      expertise : "Natural Language Processing",
      profile : "https://scholar.google.com/citations?user=_yw77_sAAAAJ&hl=en"
    }
  ];


var render_view = (view_id, model_index) => {
  console.log("Rendering View");
  var source = document.querySelector(view_id).innerHTML;
  var template = Handlebars.compile(source);
  var html = template(model[model_index]);

  document.querySelector("#view_widget").innerHTML = html;
}