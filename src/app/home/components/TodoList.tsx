import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@radix-ui/react-separator";

export const TodoList = () => {
  return (
    <div className="">
      Todo
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto ">
        <Card className="p-4">
          <div className="flex items-center gap-4">
            <Checkbox id="item1" />
            <label htmlFor="item1" className="text-sm  text-mutated-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </label>
          </div>
        </Card>
        <Separator className="my-2" />
        <Card className="p-4">
          <div className="flex items-center gap-4">
            <Checkbox id="item1" />
            <label htmlFor="item1" className="text-sm  text-mutated-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </label>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-4">
            <Checkbox id="item1" />
            <label htmlFor="item1" className="text-sm  text-mutated-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </label>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-4">
            <Checkbox id="item1" />
            <label htmlFor="item1" className="text-sm  text-mutated-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </label>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-4">
            <Checkbox id="item1" />
            <label htmlFor="item1" className="text-sm  text-mutated-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </label>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-4">
            <Checkbox id="item1" />
            <label htmlFor="item1" className="text-sm  text-mutated-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </label>
          </div>
        </Card>
      </ScrollArea>
    </div>
  );
};
