const orders = [
  { id: "A658", status: "draft", products: ["T-Shirt", "Polo"] },
  { id: "A446", status: "processing", products: ["T-Shirt"] },
  { id: "A883", status: "draft", products: ["Polo", "Polo"] },
  { id: "A234", status: "processing", products: ["Camisa", "Saia"] },
  { id: "A754", status: "cancelled", products: ["Saia"] },
  { id: "A236", status: "shipped", products: ["Sweatshirt", "Vestido"] },
  { id: "A467", status: "processing", products: ["Camisa", "Saia"] },
  { id: "A213", status: "cancelled", products: ["Vestido", "Top"] },
  { id: "A783", status: "processing", products: ["T-Shirt", "Polo"] },
  { id: "A364", status: "shipped", products: ["T-Shirt", "Polo"] },
];

// Seleciona o nó do corpo da tabela pelo ID "table-body"
const tableBodyNode = document.querySelector("#table-body");

for (let o of orders) {
  // Cria um elemento <tr> para representar uma linha na tabela
  const trTable = document.createElement("tr");
  // Cria elementos <td> para cada coluna na linha da tabela
  const tdId = document.createElement("td");
  const tdStatus = document.createElement("td");
  const tdProducts= document.createElement("td");
  // Adiciona o conteúdo do ID do pedido à coluna correspondente
    tdId.textContent = o.id;
    tdStatus.textContent = o.status;
    //tdProducts.textContent = o.products.join(", ");
  // Adiciona as colunas à linha da tabela
    trTable.appendChild(tdId);
    trTable.appendChild(tdStatus);
    trTable.appendChild(tdProducts)
    // Adiciona a linha completa à tabela
  tableBodyNode.appendChild(trTable);

  switch(o.status){
        case "draft":
        tdStatus.classList.add("orange");
        break;
        case "cancelled":
        tdStatus.classList.add("red");
        break;
        case "processing":
        tdStatus.classList.add("blue");
        break;
        case "shipped":
        tdStatus.classList.add("green")
        break;

  }

    let ul = document.createElement("ul");
        for(let product of o.products){
            const li = document.createElement("li");
            // Adiciona o conteúdo do elemento product ao li
            li.textContent =product;
            ul.appendChild(li);
        }

        tdProducts.appendChild(ul);

  // criar nome para as celulas da tabela 
  tdStatus.id = "statusCell";
  tdId.id = "idCell";
  tdProducts.id = "productsCell";

}
