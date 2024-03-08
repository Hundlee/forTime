"use client";

import { Project, Task } from "@prisma/client";
import { useEffect, useState } from "react";
import getCategorys from "../_actions/get-categorys";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { z } from "zod";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/app/_components/ui/sheet";
import { Button } from "@/app/_components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import { CalendarIcon, Loader2 } from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/app/_components/ui/popover";
import { Calendar } from "@/app/_components/ui/calendar";
import { ptBR } from "date-fns/locale";
import { cn } from "@/app/_lib/utils";
import { saveTask } from "../_actions/save-task";
import { useSession } from "next-auth/react";
import { toast } from "@/app/_components/ui/use-toast";
import { Textarea } from "@/app/_components/ui/textarea";

interface newTaskProps {
    project: Project;
}

const Addtask = ({ project }: newTaskProps) => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [description, setDescription] = useState<string | undefined>();
    const [category, setCategory] = useState<string | any>();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null
    );
    const [submitIsLoading, setSubmitIsLoading] = useState(false);
    const [sheetIsOpen, setSheetIsOpen] = useState(false);

    const { data } = useSession();

    useEffect(() => {
        const AvaliableCategorys = async () => {
            try {
                const categorys = await getCategorys();

                setCategory(categorys);

                console.log(selectedCategory);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        AvaliableCategorys();
    }, [selectedCategory]);

    const handleSelectCategoryClick = (categoryId: string) => {
        setSelectedCategory(categoryId);
    };

    const FormSchema = z.object({
        title: z.string().min(2, {
            message: "title must be at least 2 characters.",
        }),
        dob: z.date({
            required_error: "A date is required.",
        }),
        startTime: z.string().optional(),
        endTime: z.string().optional(),
        description: z.string().optional(),
        userId: z.string().optional(),
    });

    const formatTime = (
        time: string | Date | undefined
    ): string | undefined => {
        if (!time) return undefined;
        if (typeof time === "string") return time;
        return format(time, "HH:mm");
    };

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            title: "",
        },
    });

    const handleNewTaskSubmit = async (db: z.infer<typeof FormSchema>) => {
        setSubmitIsLoading(true);

        try {
            if (!data?.user) {
                return;
            }

            await saveTask({
                projectId: project.id,
                date: db.dob,
                categoryId: selectedCategory || "",
                name: db.title,
                userId: (data.user as any).id,
                description: description || "",
            });

            setSheetIsOpen(false);
            toast({
                description: "Task created successfully!",
            });
        } catch (error) {
            console.error(error);
        } finally {
            setSubmitIsLoading(false);
        }
    };

    return (
        <div>
            <Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen}>
                <SheetTrigger asChild>
                    <Button variant="default">+ add task</Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader className="text-center">
                        <SheetTitle className="text-white pb-5">
                            Create new task
                        </SheetTitle>
                    </SheetHeader>
                    <div className="">
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit((db) =>
                                    handleNewTaskSubmit(db)
                                )}
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

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="dob"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel className="text-white font-thin">
                                                Date
                                            </FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"link"}
                                                            className={cn(
                                                                "w-auto  text-left font-semibold border-b border-white rounded-none border-opacity-70 p-0",
                                                                !field.value &&
                                                                    "text-white"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(
                                                                    field.value,
                                                                    "PPP"
                                                                )
                                                            ) : (
                                                                <span>
                                                                    Pick a date
                                                                </span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 text-white" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent
                                                    className="w-auto p-0"
                                                    align="start"
                                                >
                                                    <Calendar
                                                        mode="single"
                                                        selected={
                                                            field.value || date
                                                        }
                                                        onSelect={(date) => {
                                                            field.onChange(
                                                                date
                                                            );
                                                            setDate(date);
                                                        }}
                                                        disabled={(date) =>
                                                            date < new Date()
                                                        }
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="">
                                    <div>
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
                                                            {...field}
                                                            onChange={(e) =>
                                                                setDescription(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <div className="py-5">
                                        <h1 className="text-2xl font-semibold text-white">
                                            Category
                                        </h1>

                                        <div className="w-full flex-wrap flex gap-3 pt-5">
                                            {category?.map((category: any) => (
                                                <div
                                                    key={category.id}
                                                    className={`py-2 px-3  rounded-xl w-fit ${
                                                        selectedCategory ===
                                                        category.id
                                                            ? "bg-primary shadow-2xl"
                                                            : "bg-gray-400"
                                                    }`}
                                                    onClick={() =>
                                                        handleSelectCategoryClick(
                                                            category.id
                                                        )
                                                    }
                                                >
                                                    <h1 className="text-white font-semibold">
                                                        {category.name}
                                                    </h1>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full text-2xl px-8 py-6 rounded-full mt-10"
                                        disabled={
                                            !date ||
                                            !selectedCategory ||
                                            submitIsLoading
                                        }
                                    >
                                        {submitIsLoading && (
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        )}
                                        Create Task
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default Addtask;
