function BuiltList(response) {
  this.response = response;

  this.builtHTMLlist = function() {
    const template = document.querySelector('#payroll-entry');
    if (template === null) {
      return
    }
    const dlElement = template.content.querySelector('dl')
    if (dlElement === null) {
      return
    }
    const body = document.querySelector("#content");
    if (body === null) {
      return
    }
    if (typeof response === "undefined") {
      console.warn("Cannot built HTML, worng configuration")
      return
    }
    response.forEach(function(item) {
      const templatedt = document.createElement("dt");
      const templatedd = document.createElement("dd");

      templatedt.textContent = item.name;
      templatedd.textContent = item.income;

      const div = document.createElement("div");
      div.appendChild(templatedt)
      div.appendChild(templatedd)

      dlElement.appendChild(div);
    })
    const cloneTemplate = template.content.cloneNode(true);
    body.appendChild(cloneTemplate);
  };
}
