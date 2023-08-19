import { render, screen } from "@testing-library/react";
import { Card } from "../../src/components";

describe("Pruebas en <Card/>", () => {
  const title = "Sample title";
  const uri =
    "https://media2.giphy.com/media/Ur3robVPYVLkk/giphy.gif?cid=d7999a31gua4s7aj94uzughixjxjfcg7813thsro5bxy86dh&ep=v1_gifs_search&rid=giphy.gif&ct=g";
  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<Card title={title} uri={uri} />);
    expect(container).toMatchSnapshot();
  });
});
