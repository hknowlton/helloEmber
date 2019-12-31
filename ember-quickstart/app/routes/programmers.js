import Route from "@ember/routing/route";

export default class ProgrammersRoute extends Route {
  model() {
    return [
      { name: "Heather Knowlton" },
      { name: "Kent C Dodds" },
      { name: "Dan Abramov" }
    ];
  }
}
