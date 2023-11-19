"use client";
import Dialog from "@/components/ui/Dialog";
import Div from "@/components/ui/Div";
import ErrorText from "@/components/ui/ErrorText";
import MyText from "@/components/ui/MyText";
import {
  Button,
  Grid,
  Input,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Select,
} from "@chakra-ui/react";
import {
  DemonstrationFarm,
  Enterprise,
  Region,
  User as PrismaUser,
} from "@prisma/client";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import {
  useForm,
  Controller,
  useFieldArray,
  UseFormRegister,
  FieldErrors,
  UseFormHandleSubmit,
  Control,
} from "react-hook-form";
import onSubmit from "./onSubmit";
import { z } from "zod";
import { usePrismaUserData } from "@/hooks/use_prismaUserData ";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserData } from "@/hooks/use_userData";
import { useFarmsData } from "@/hooks/use_farmsData";
import { useRouter } from "next/navigation";
import { User } from "@supabase/auth-helpers-nextjs";
export interface FarmDataType {
  id?: number;
  code: number | string;
  regionId: number | string;
  district: string;
  village: string;
  contacts: {
    name: string;
    position: string | null;
    workPhone: string | null;
    phone: string | null;
    email: string;
  }[];
}
export function FarmDataDialogContent({
  register,
  prismaUser,
  errors,
  control,
  farm,
  user,
  regions,
}: {
  register: UseFormRegister<FarmDataType>;
  prismaUser: PrismaUser | null | undefined;
  errors: FieldErrors<FarmDataType>;
  control: Control<FarmDataType, any>;
  farm: DemonstrationFarm;
  user: User | null;
  regions: Region[] | [];
}) {
  return (
    <form>
      <Grid alignItems={"center"} templateColumns={"1fr 1fr"} mb={4} gap={3}>
        <MyText>Повна назва:</MyText> <MyText>{farm.name}</MyText>
      </Grid>
      <Div>
        <Grid alignItems={"center"} templateColumns={"1fr 1fr"} gap={3}>
          Код ЄДРПОУ/РНОКПП
          <Div>
            <Controller
              name="code"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  {...field}
                  type="number"
                  inputMode="numeric"
                  isInvalid={!!errors.code}
                />
              )}
            />
          </Div>
        </Grid>
        <ErrorText>{errors["code"] ? errors["code"].message : null}</ErrorText>
      </Div>
      <Div>
        <Grid alignItems={"center"} templateColumns={"1fr 1fr"} gap={3}>
          Область
          <Div>
            <Select
              {...register("regionId", {
                required: true,
              })}
            >
              <option value="" defaultChecked hidden>
                Виберіть опцію
              </option>
              {regions.map((el) => (
                <option value={+el.id} key={el.id}>
                  {el.name}
                </option>
              ))}
            </Select>
          </Div>
        </Grid>
        <ErrorText>
          {errors["regionId"] ? errors["regionId"].message : null}
        </ErrorText>
      </Div>
      <Div>
        <Grid alignItems={"center"} templateColumns={"1fr 1fr"} gap={3}>
          Район
          <Div>
            <Input {...register("district", { required: true })} />
          </Div>
        </Grid>
        <ErrorText>
          {errors["district"] ? errors["district"].message : null}
        </ErrorText>
      </Div>
      <Div>
        <Grid alignItems={"center"} templateColumns={"1fr 1fr"} gap={3}>
          Населений пункт
          <Div>
            <Input {...register("village", { required: true })} />
          </Div>
        </Grid>
        <ErrorText>
          {errors["village"] ? errors["village"].message : null}
        </ErrorText>
      </Div>
      {/* <Div>
        <Grid alignItems={"center"} templateColumns={"1fr 1fr"} gap={3}>
          Сторінки в Інтернеті
          <Div>
            <Input {...register("pagesOnInternet")} />
          </Div>
        </Grid>
        <ErrorText>
          {errors["pagesOnInternet"]
            ? errors["pagesOnInternet"].message
            : null}
        </ErrorText>
      </Div>
      <Div>
        <Grid alignItems={"center"} templateColumns={"1fr 1fr"} gap={3}>
          Сторінки в Соц. мережах
          <Div>
            <Input {...register("pagesOnNetworks")} />
          </Div>
        </Grid>
        <ErrorText>
          {errors["pagesOnNetworks"]
            ? errors["pagesOnNetworks"].message
            : null}
        </ErrorText>
      </Div> */}
      <Div>
        <MyText fontWeight={"bold"}>Контактні дані</MyText>
        {/* {fields.map((el, ind) => (
          <React.Fragment key={ind}> */}
        <Div>
          <Grid alignItems={"center"} templateColumns={"1fr 1fr"} gap={3}>
            <MyText>П.І.Б</MyText>
            <Div>{prismaUser?.firstName + " " + prismaUser?.secondName}</Div>
          </Grid>
        </Div>
        <Div>
          <Grid alignItems={"center"} templateColumns={"1fr 1fr"} gap={3}>
            <MyText> Посада контактної особи</MyText>
            <Div>{prismaUser?.position}</Div>
          </Grid>
        </Div>
        <Div>
          <Grid alignItems={"center"} templateColumns={"1fr 1fr"} gap={3}>
            <MyText> Робочий телефон</MyText>
            <Div>{prismaUser?.workPhone}</Div>
          </Grid>
        </Div>
        <Div>
          <Grid alignItems={"center"} templateColumns={"1fr 1fr"} gap={3}>
            <MyText>Телефон</MyText>
            <Div>{prismaUser?.phone}</Div>
          </Grid>
        </Div>
        <Div>
          <Grid alignItems={"center"} templateColumns={"1fr 1fr"} gap={3}>
            <MyText> Email</MyText>
            <Div>{user?.email}</Div>
          </Grid>
        </Div>
        {/* </React.Fragment>
        ))} */}
      </Div>
      <Div>
        <Grid></Grid>
      </Div>
    </form>
  );
}
export const FarmDataValidator = z.object({
  code: z
    .union([z.number(), z.string()])
    .refine(
      (el) => (el != null && el.toString().length != 0 ? true : false),
      "Код не може бути пустим"
    )
    .refine(
      (el) =>
        el.toString().length == 8 || el.toString().length == 10 ? true : false,
      "Поле може мати 8 або 10 цифр"
    ),
  regionId: z
    .union([z.number(), z.string()])
    .refine(
      (el) => (el != null && el.toString().length != 0 ? true : false),
      "Область не може бути пустим"
    ),
  district: z.string().nonempty("Район не може бути пустим"),
  village: z.string().nonempty("Село не може бути пустим"),
  // pagesOnInternet: z.string(),
  // pagesOnNetworks: z.string(),
  // contacts: z.array(
  //   z.object({
  //     name: z.string(),
  //     email: z.string().email("Не схоже не email"),
  //     phone: z.string().nonempty("Телефон не можу бути пустим"),
  //     workPhone: z.string().nonempty("Телефон не можу бути пустим"),
  //     position: z.string().nonempty("Посада не можу бути пуста"),
  //   })
  // ),
});
export default function FarmDataDialog({
  isOpen,
  setIsOpen,
  regions,
  farm,
  enterprise,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  regions: Region[] | [];
  farm: DemonstrationFarm;
  enterprise?: Enterprise | null;
}) {
  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FarmDataType>({
    defaultValues: {
      code: "",
      regionId: "",
      district: "",
      village: "",
    },
    //@ts-ignore
    values: enterprise
      ? { ...enterprise, contacts: [] }
      : {
          code: "",
          regionId: "",
          district: "",
          village: "",
        },
    resolver: zodResolver(FarmDataValidator),
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "contacts",
  });
  const { prismaUser } = usePrismaUserData();
  const { user } = useUserData();
  const { updateFarm } = useFarmsData();
  useEffect(() => {
    if (!prismaUser) return;
    remove(0);
    if (user)
      append({
        name: prismaUser.firstName + " " + prismaUser.secondName,
        email: user.email!,
        phone: prismaUser.phone,
        workPhone: prismaUser.workPhone,
        position: prismaUser.position,
      });
  }, [JSON.stringify(prismaUser)]);
  const router = useRouter();
  const ClientSubmit = async (data: FarmDataType) => {
    console.log(data);
    if (!prismaUser) throw new Error("нема прізма юзера");
    const res = await onSubmit(
      {
        ...data,
        code: +data.code,
        regionId: +data.regionId,
        id: enterprise?.id,
      },
      prismaUser.id,
      farm.id
    );
    if (res) updateFarm(res);
    // router.refresh();
    setIsOpen(false);
    reset();
  };
  return (
    <Dialog
      isOpen={isOpen}
      onClose={() => {
        setIsOpen(false);
        reset();
      }}
    >
      <ModalHeader>Загальна інформація</ModalHeader>
      <ModalBody>
        <FarmDataDialogContent
          control={control}
          errors={errors}
          farm={farm}
          prismaUser={prismaUser}
          regions={regions}
          register={register}
          user={user}
        />
      </ModalBody>
      <ModalFooter>
        <Button onClick={handleSubmit(ClientSubmit)}>Збегерти</Button>
      </ModalFooter>
    </Dialog>
  );
}
