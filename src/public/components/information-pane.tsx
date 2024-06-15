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
import { Separator } from "./ui/separator";

interface InformationPaneProps {
  description: string;
  keyPoints: string[];
  codeBlocks: string[];
  languages: string[];
}

export default function InformationPane(props: InformationPaneProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="absolute right-0 m-4">
          <Info />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[400px] sm:max-w-[400px]">
        <SheetHeader>
          <SheetTitle>Description</SheetTitle>
          <SheetDescription>{props.description}</SheetDescription>
          <Separator />
          <SheetTitle>Information</SheetTitle>
          <SheetDescription>
            <ul className=" list-disc list-inside">
              {props.keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </SheetDescription>
          <Separator />

          <SheetTitle>Code</SheetTitle>
          <SheetDescription>
            <Tabs defaultValue="javascript">
              <TabsList>
                {props.languages.map((language, index) => (
                  <TabsTrigger key={index} value={language}>
                    {language}
                  </TabsTrigger>
                ))}
              </TabsList>
              {props.codeBlocks.map((code, index) => (
                <TabsContent
                  key={index}
                  value={props.languages[index]}
                  className="w-[362px]"
                >
                  <CodeBlock language={props.languages[index]} code={code} />
                </TabsContent>
              ))}
            </Tabs>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
