describe("The Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  function addTodo(todo: string) {
    cy.get("[data-cy=add-input]").realHover().type(todo);
    cy.get("[data-cy=add-btn]").click();
  }

  it("initial state", () => {
    cy.get("[data-cy=add-input]")
      .invoke("attr", "placeholder")
      .should("contain", "输入今天的任务");
    cy.get('[data-cy="add-btn"]').should("be.visible");
  });

  it("add a todo then delete it", () => {
    addTodo("测试一下");

    cy.get("[data-cy=todo-item]")
      .should("be.visible")
      .should("contain", "测试一下");
    // cy.get("[data-cy=todo-item-delete]").should("not.be.visible");

    cy.get("[data-cy=todo-item]").realHover();
    cy.get("[data-cy=todo-item-delete]")
      // .should("be.visible")
      .click()
      .should("not.exist");
  });

  it("test click of a todo", () => {
    addTodo("今天天气不错");

    cy.get("[data-cy=todo-item]").click();
    cy.contains("今天天气不错").should(
      "have.css",
      "text-decoration-line",
      "line-through"
    );
    cy.get("[data-cy=todo-item]").click();
    cy.contains("今天天气不错").should(
      "not.have.css",
      "text-decoration-line",
      "line-through"
    );
  });

  // it("add multiple todo then drag and drop", () => {
  //   addTodo("读一本书");
  //   addTodo("学习线性代数");
  //   addTodo("睡大觉");

  //   // cy.get("[data-cy=todo-item]")
  //   //   .drag("[data-cy=todo-item]")
  //   // .then((success) => {
  //   //   console.log(success);
  //   // });
  //   // cy.get("[data-cy=todo-item]").move({
  //   //   deltaX: 1,
  //   //   deltaY: 100,
  //   // });
  //   // cy.clock();
  //   // cy.contains("读一本书").realMouseDown();
  //   cy.contains("读一本书").trigger("pointerdown").trigger("mousedown");
  //   // cy.tick(500);
  //   cy.contains("读一本书")
  //     .trigger("mousemove", {
  //       clientX: 1,
  //       clientY: 100,
  //     })
  //     .trigger("pointermove", {
  //       clientX: 1,
  //       clientY: 100,
  //     });
  //   // cy.contains("读一本书").realMouseUp();
  //   cy.contains("读一本书").trigger("pointerup").trigger("mouseup");
  // });
});
