"use client";
import React, { useEffect, useState } from "react";
import FarmDataTable from "../FarmDataTable";
import MyButton from "@/components/ui/MyButton";
import FarmDataDialog from "./component/FarmDataDialog/FarmDataDialog";
import { POU, Region, User as PrismaUser } from "@prisma/client";
import { POUWithSpecialization } from "@/types/DemonstrationFarmsTypes";
import { useFarmsData } from "@/hooks/use_farmsData";
import { User } from "@supabase/auth-helpers-nextjs";

function FarmDataSection({
  farm,
  regions,
  farmId,
  prismaUserData,
  user,
}: {
  farm: POUWithSpecialization;
  regions: Region[] | [];
  farmId: string;
  prismaUserData: PrismaUser | null;
  user: User | null;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [farmState, setFarmState] = useState(farm);
  const { farms } = useFarmsData();
  useEffect(() => {
    const farm = farms.find((el) => el.id == +farmId);
    if (farm) setFarmState(farm);
  }, [JSON.stringify(farms)]);
  return (
    <>
      <FarmDataTable
        farm={farmState}
        prismaUserData={prismaUserData}
        userData={user}
      />
      <MyButton onClick={() => setIsOpen(true)}>Редагувати</MyButton>
      <FarmDataDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        regions={regions}
        farm={farmState}
        enterprise={farmState.Enterprise}
      />
    </>
  );
}

export default FarmDataSection;
