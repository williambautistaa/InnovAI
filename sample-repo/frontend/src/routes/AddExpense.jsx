import React from "react";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { toast } from "sonner";
import { format } from "date-fns";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { addExpense } from "@/api";

const CATEGORY_OPTIONS = [
  { value: "Food", label: "Food" },
  { value: "Transport", label: "Transport" },
  { value: "Utilities", label: "Utilities" },
  { value: "Other", label: "Other" },
];

function AddExpense() {
  const form = useForm({
    defaultValues: {
      amount: "",
      category: "",
      date: format(new Date(), "yyyy-MM-dd"),
    },
  });
  const onSubmit = async (data) => {
    try {
      await addExpense(data);
      toast("Expense added successfully", { description: "Your expense was saved." });
      form.reset();
    } catch (e) {
      toast("Error", { description: e.message, variant: "destructive" });
    }
  };

  return (
    <div className="w-full flex justify-start items-start py-8 px-4">
      <Card className="w-1/3 max-w-md overflow-hidden">
        <CardHeader>
          <CardTitle>Add Expense</CardTitle>
          <CardDescription>Log a new expense to track your spending.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <FormField
                control={form.control}
                name="amount"
                rules={{ required: "Amount is required", min: { value: 0.01, message: "Amount must be positive" } }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.01" min="0.01" placeholder="0.00" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                rules={{ required: "Category is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {CATEGORY_OPTIONS.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                rules={{ required: "Date is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit" variant="default" onClick={form.handleSubmit(onSubmit)}>
            Add Expense
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default AddExpense;
