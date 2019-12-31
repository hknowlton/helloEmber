import Route from "@ember/routing/route";

export default class ScientistsRoute extends Route {
  model() {
    return [
      { name: "Marie Curie" },
      { name: "Mae Jemison" },
      { name: "Albert Hofmann" }
    ];
  }
}
