"use client";

import { Category, Project, Task } from "@prisma/client";
import { CalendarIcon, MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/app/_components/ui/form";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/app/_components/ui/popover";
import { Button } from "@/app/_components/ui/button";
import { Calendar } from "@/app/_components/ui/calendar";
import { cn } from "@/app/_lib/utils";
import { Input } from "@/app/_components/ui/input";
import getCategorys from "./_actions/get-categorys";

interface newTaskProps {
    project: Project;
    task: Task;
}

const NewTaskPage = ({ project, task }: newTaskProps) => {
    const router = useRouter();

    const handleProjectClick = () => {
        router.back();
    };

    const [date, setDate] = useState<Date | undefined>(undefined);
    const [startTime, setStartTime] = useState<string | undefined>();
    const [endTime, setEndTime] = useState<string | undefined>();
    const [description, setDescription] = useState<string | undefined>();
    const [category, setCategory] = useState<CategoryProps[]>();
    const [submitIsLoading, setSubmitIsLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        const AvaliableCategorys = async () => {
            try {
                const categorys = await getCategorys();

                setCategory(categorys);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        AvaliableCategorys();
    }, []);

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
    });

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            title: "",
        },
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log("Title:", data.title);
        console.log("Date:", data.dob);
        console.log("Start Time:", startTime);
        console.log("End Time:", endTime);
        console.log("Description:", description);
    }

    return (
        <div>
            <section className="bg-primary">
                <div className="flex items-center justify-between p-6">
                    <MoveLeft
                        className="text-white"
                        onClick={handleProjectClick}
                    />
                    <h1 className=" text-white text-xl font-semibold">
                        Create New Task
                    </h1>
                </div>

                <div className="">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-8"
                        >
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem className=" px-6">
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
                                    <FormItem className="flex flex-col px-6 pb-6">
                                        <FormLabel className="text-white font-thin">
                                            Date
                                        </FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"default"}
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
                                                    selected={field.value}
                                                    onSelect={field.onChange}
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
                            <div className="bg-white rounded-t-3xl h-full">
                                <div className="flex justify-between px-6 pt-8">
                                    <FormField
                                        control={form.control}
                                        name="startTime"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col pb-6 w-fit">
                                                <FormLabel className="text-gray-500 font-base text-opacity-40">
                                                    Start Time
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="time"
                                                        className="bg-transparent border-b border-black border-opacity-10 font-semibold text-black text-lg "
                                                        {...field}
                                                        onChange={(e) =>
                                                            setStartTime(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="endTime"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col pb-6 w-fit">
                                                <FormLabel className="text-gray-500 font-base text-opacity-40">
                                                    End Time
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="time"
                                                        className="bg-transparent border-b border-black border-opacity-10 font-semibold text-black text-lg"
                                                        {...field}
                                                        onChange={(e) =>
                                                            setEndTime(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div>
                                    <FormField
                                        control={form.control}
                                        name="description"
                                        render={({ field }) => (
                                            <FormItem className=" px-6">
                                                <FormLabel className="text-gray-500 font-base text-opacity-40 ">
                                                    Description
                                                </FormLabel>
                                                <FormControl className="">
                                                    <Input
                                                        placeholder="Some text here for the description"
                                                        className="bg-transparent border-b border-black border-opacity-10 font-semibold text-black"
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
                                </div>

                                <div className="p-6">
                                    <h1 className="text-2xl font-semibold">
                                        Category
                                    </h1>

                                    <div className="w-full">
                                        {category?.map((category) => (
                                            <Button
                                                key={category.id}
                                                className="p-2 "
                                            >
                                                <h1>{category.name}</h1>
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* <Button type="submit">Submit</Button> */}
                        </form>
                    </Form>
                </div>
            </section>
            <section></section>
        </div>
    );
};

export default NewTaskPage;
