"use client";
import DemonstrationActivitiesTable from "@/app/(root)/(components)/DemonstrationActivitiesTable";
import MyButton from "@/components/ui/MyButton";
import React, { useState } from "react";
import DemonstrationActivitiesDialog from "./DemonstrationActivitiesDialog/DemonstrationActivitiesDialog";

import { DemonstrationActivityWithUser } from "@/types/DemonstrationActivitiesTypes";
export default function DemonstrationActivitiesSection({
  activities,
}: {
  activities: DemonstrationActivityWithUser[];
}) {
  const [isUpdate, steIsUpdate] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <DemonstrationActivitiesTable
        isCabinet={true}
        setIsOpen={setIsOpen}
        setIsUpdate={steIsUpdate}
        activities={activities}
      />
      <MyButton onClick={() => setIsOpen(true)}>Добавити захід</MyButton>
      <DemonstrationActivitiesDialog
        isOpen={isOpen}
        isUpdate={isUpdate}
        setIsOpen={setIsOpen}
        setIsUpdate={steIsUpdate}
      />
    </>
  );
}
