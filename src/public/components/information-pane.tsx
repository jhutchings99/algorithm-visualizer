import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Info } from "lucide-react";
import CodeBlock from "./code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function InformationPane() {
  let codeString = `let code = foo();
function foo(hi: string) {
    return 1 + 1;
}`;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="absolute right-0 m-4">
          <Info />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[400px] sm:max-w-[400px]">
        <SheetHeader>
          <SheetTitle>Information</SheetTitle>
          <SheetDescription>
            <Tabs defaultValue="javascript">
              <TabsList>
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
                <TabsTrigger value="java">Java</TabsTrigger>
                <TabsTrigger value="c++">C++</TabsTrigger>
                <TabsTrigger value="go">Go</TabsTrigger>
                <TabsTrigger value="rust">Rust</TabsTrigger>
              </TabsList>
              <TabsContent value="javascript" className="w-[362px]">
                <CodeBlock language="typescript" code={codeString} />
              </TabsContent>
            </Tabs>
          </SheetDescription>
          <SheetTitle>Code</SheetTitle>
          <SheetDescription>
            <Tabs defaultValue="javascript">
              <TabsList>
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
                <TabsTrigger value="java">Java</TabsTrigger>
                <TabsTrigger value="c++">C++</TabsTrigger>
                <TabsTrigger value="go">Go</TabsTrigger>
                <TabsTrigger value="rust">Rust</TabsTrigger>
              </TabsList>
              <TabsContent value="javascript" className="w-[362px]">
                <CodeBlock language="typescript" code={codeString} />
              </TabsContent>
            </Tabs>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
