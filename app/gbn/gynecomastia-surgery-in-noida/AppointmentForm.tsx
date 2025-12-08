"use client";

import {
  Autocomplete,
  Box,
  Button,
  Text,
  TextInput,
} from "@mantine/core";

import classes from "../Appointment/Appointment.module.css";
import { useState } from "react";
import { useForm } from "@mantine/form";// YOU FORGOT THIS
import { useMediaQuery } from "@mantine/hooks";

interface AppointmentProps {
  pageName?: string | string[];
}

const AppointmentForm = ({ pageName }: AppointmentProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const mobile = useMediaQuery(`(min-width: 1000px)`);

  const form = useForm({
    initialValues: {
      name: "",
      phone: "",
      city: "",
    },
    validate: {
      name: (val) => (val.trim().length > 0 ? null : "Invalid name"),
      phone: (val) =>
        val.trim().length === 10 ? null : "Enter a valid 10-digit number",
      city: (val) => (val.trim().length > 0 ? null : "Select a city"),
    },
  });

  // FIX: Correct pageName handling
  const pageNameData =
    typeof pageName === "string" ? pageName : "gynecomastia-surgery-in-noida";

  const submitHandler = async () => {
    try {
      setIsLoading(true);
      setIsSubmitted(false);

      const response = await fetch("/api/post-appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.values.name,
          phone: form.values.phone,
          countryCode: "+91",
          disease: pageNameData,
          city: form.values.city,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error("Failed to submit form");
      }
    } catch (error: any) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box className="flex justify-center py-4">
      <Box className="flex-1">
        <form onSubmit={form.onSubmit(submitHandler)}>
          {/* NAME */}
          <TextInput
            label="Patient Name"
            {...form.getInputProps("name")}
            classNames={{ label: classes.label, input: classes.input__input }}
            radius="md"
            my={10}
          />

          {/* PHONE */}
          <TextInput
            label="Enter 10 digit mobile number"
            {...form.getInputProps("phone")}
            classNames={{ label: classes.label, input: classes.input__input }}
            radius="md"
            my={10}
            maxLength={10}
          />

          {/* CITY */}
          <Autocomplete
            label="Select City"
            {...form.getInputProps("city")}
            classNames={{ label: classes.label, input: classes.input__input }}
            maxDropdownHeight={200}
            my={10}
          />

          {/* SUBMIT */}
          <Button
            type="submit"
            radius="md"
            variant={isSubmitted ? "outline" : "filled"}
            disabled={isSubmitted}
            fullWidth
            mt={20}
            loading={isLoading}
            loaderProps={{ type: "dots" }}
          >
            {isSubmitted ? "Submitted" : "Book"}
          </Button>

          {isSubmitted && (
            <Text c="dimmed" fz={12} mt={5}>
              Thank you! We&apos;ll reach out to you shortly.
            </Text>
          )}
        </form>
      </Box>
    </Box>
  );
};

export default AppointmentForm;
