import React from "react";
import { Button } from "../components/_primitives/Button";

export function NotFound() {
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-5xl font-bold">404</h1>
        <p className="text-base">Sorry, requsted page does not exist.</p>
      </div>
      <Button className="uppercase" to="/" variant="outline">
        Main menu
      </Button>
    </div>
  );
}
