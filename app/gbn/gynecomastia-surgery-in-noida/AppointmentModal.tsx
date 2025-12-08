"use client";

import { Modal } from "@mantine/core";
import { useState } from "react";
import AppointmentForm from "./AppointmentForm";

export default function AppointmentModal() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {/* TRIGGER BUTTON (REUSABLE) */}
      <button
        onClick={() => setOpened(true)}
        className="bg-[#14967F] text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
      >
        Book Now
      </button>

      {/* MODAL */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered
        size="lg"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        withCloseButton
        radius="lg"
        classNames={{
          body: "p-6",
        }}
      >
        <AppointmentForm pageName="Gynecomastia Surgery" />
      </Modal>
    </>
  );
}
