import { Button } from "@/app/_components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/app/_components/ui/sheet";
import { Textarea } from "@/app/_components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { saveProject } from "../_actions/save-project";
import { useSession } from "next-auth/react";

const AddProject = () => {
    const [title, setTitle] = useState<string | undefined>();
    const [description, setDescription] = useState<string | undefined>();
    const [submitIsLoading, setSubmitIsLoading] = useState(false);
    const [sheetIsOpen, setSheetIsOpen] = useState(false);

    const { data } = useSession();

    const formSchema = z.object({
        title: z.string(),
        description: z.string().optional(),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
        },
    });

    const handleNewProject = async (values: z.infer<typeof formSchema>) => {
        if (!data?.user) {
            return;
        }

        try {
            await saveProject({
                name: values.title || "",
                description: description || "",
                userId: (data.user as any).id,
            });

            setSheetIsOpen(false);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen}>
                <SheetTrigger asChild>
                    <Button variant="default" className="w-full">
                        Create Project
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader className="text-center">
                        <SheetTitle className="text-white pb-5">
                            Create new Project
                        </SheetTitle>
                    </SheetHeader>
                    <div>
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(handleNewProject)}
                                className="space-y-8"
                            >
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem className=" ">
                                            <FormLabel className="text-white font-thin ">
                                                Title
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Task title"
                                                    className="bg-transparent border-b border-white border-opacity-70 font-semibold text-white"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem className="">
                                            <FormLabel className="text-white font-base  ">
                                                Description
                                            </FormLabel>
                                            <FormControl className="">
                                                <Textarea
                                                    placeholder="Task description"
                                                    className="resize-none bg-transparent  border-white border-opacity-70 font-semibold text-white"
                                                    maxLength={30}
                                                    {...field}
                                                    onChange={(e) =>
                                                        setDescription(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit">Submit</Button>
                            </form>
                        </Form>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default AddProject;
