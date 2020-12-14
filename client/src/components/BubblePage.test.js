import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

import { fetchBubbles as mockFetchBubbles } from "../utils/fetchBubbles";
jest.mock("../utils/fetchBubbles");

const newBubbles = [
  { code: { hex: "#6093ca" }, color: "blue", id: 10 },
  { code: { hex: "#8a2be2" }, color: "blueviolet", id: 11 },
];

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  mockFetchBubbles.mockResolvedValue(newBubbles);
  // render(<BubblePage />);

  // const bubbles = screen.findByText(/bubble/i);
  // expect(await bubbles).toBeInTheDocument();
  

});
