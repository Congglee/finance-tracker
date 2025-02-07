import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  CreateCategoryBody,
  CreateCategoryBodyType,
} from "@/schemas/category.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleOff } from "lucide-react";
import { useForm } from "react-hook-form";
import EmojiPicker, { Theme } from "emoji-picker-react";
import { useTheme } from "next-themes";

interface NewCategoryFormProps {
  disabled?: boolean;
  onClose: () => void;
}

export default function NewCategoryForm({
  disabled,
  onClose,
}: NewCategoryFormProps) {
  const form = useForm<CreateCategoryBodyType>({
    resolver: zodResolver(CreateCategoryBody),
    defaultValues: { name: "", icon: "" },
  });

  const theme = useTheme();

  const onSubmit = form.handleSubmit((values) => {
    console.log(values);
    onClose();
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-4 pt-4">
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id="name"
                  disabled={disabled}
                  placeholder="e.g. Food, Travel, etc."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="icon"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="icon">Icon</FormLabel>
              <div className="space-y-4">
                <div
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "w-full h-20"
                  )}
                >
                  <span className="text-5xl">
                    {field.value ? (
                      field.value
                    ) : (
                      <CircleOff className="size-[48px]" />
                    )}
                  </span>
                </div>
                <FormControl>
                  <EmojiPicker
                    theme={theme.resolvedTheme as Theme}
                    onEmojiClick={(emoji) => field.onChange(emoji.emoji)}
                    style={{ width: "100%", height: "400px" }}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" disabled={disabled}>
          Create category
        </Button>
        <Button
          type="button"
          disabled={disabled}
          onClick={() => form.reset()}
          className="w-full"
          variant="outline"
        >
          Reset
        </Button>
      </form>
    </Form>
  );
}
