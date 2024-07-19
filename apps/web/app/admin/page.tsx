import { Button } from "@repo/ui/button";
import { Demo } from "@repo/ui/demo";
import { InputBox } from "@repo/ui/input-box";

export default function () {
  return (
    <div>
      <Button appName="Admin">Admin Choco</Button>
      <Demo></Demo>
      <InputBox></InputBox>
    </div>
  );
}
