"use client";
import Div from "@/components/ui/Div";
import MyButton from "@/components/ui/MyButton";
import MyText from "@/components/ui/MyText";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  TabProps,
  Table,
  Tbody,
  Tr,
  Td,
  BoxProps,
  Checkbox,
  Input,
  HStack,
  Tag,
  Select,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import {
  FarmDataDialogContent,
  FarmDataType,
} from "../../../../farmDataView/[farmId]/components/FarmDataSection/component/FarmDataDialog/FarmDataDialog";
import { DemonstrationFarm, Region, User as PrismaUser } from "@prisma/client";
import { User } from "@supabase/auth-helpers-nextjs";
import MyHeading from "@/components/ui/MyHeading";

import MyDeleteIcon from "@/components/ui/Icons/MyDeleteIcon";
function Buttons({
  screen,
  setScreen,
}: {
  setScreen: Dispatch<SetStateAction<number>>;
  screen: number;
}) {
  return (
    <Div display={"flex"}>
      {screen > 0 ? (
        <MyButton onClick={() => setScreen((prev) => prev - 1)}>Назад</MyButton>
      ) : (
        <></>
      )}
      {screen < 6 ? (
        <MyButton
          ml={"auto"}
          mr={0}
          onClick={() => setScreen((prev) => prev + 1)}
        >
          Далі
        </MyButton>
      ) : (
        <MyButton ml={"auto"} mr={0}>
          Зберегти
        </MyButton>
      )}
    </Div>
  );
}
const MyTab = (props: TabProps) => (
  <Tab
    display={"block"}
    _selected={{ backgroundColor: "#cae9b7" }}
    {...props}
    cursor={"default"}
  >
    {props.children}
  </Tab>
);
const Round = (props: BoxProps) => (
  <Div
    mx={"auto"}
    border={"1px"}
    borderRadius={"100px"}
    h={7}
    w={7}
    display="flex"
    justifyContent={"center"}
  >
    {props.children}
  </Div>
);
export const Specializations = [
  "М’ясо ВРХ",
  "М’ясо свиней",
  "Молоко",
  "Птиця",
  "Аквакультура",
  "Мед",
  "Ягоди",
  "Фрукти",
  "Овочі",
  "Кондитерська продукція",
];

export default function Quiz({
  farm,
  regions,
  prismaUser,
  user,
}: {
  farm: DemonstrationFarm;
  regions: Region[] | [];
  prismaUser: PrismaUser | null;
  user: User | null;
}) {
  const [screen, setScreen] = useState(0);
  //   const farmDataForm = useMemo(() => useForm<FarmDataType>(), []);
  const farmDataForm = useForm<FarmDataType>();
  const [addedRow, setAddedRow] = useState(false);
  const [activeAddedRow, setActiveAddedRow] = useState(true);
  return (
    <Div>
      <Tabs variant="soft-rounded" index={screen}>
        <TabList>
          <MyTab>
            <Round>1</Round>
            <MyText>Загальні дані</MyText>
          </MyTab>
          <MyTab>
            <Round>2</Round>
            Спеціалізація
          </MyTab>
          <MyTab>
            <Round>3</Round>
            Ефективність
          </MyTab>
          <MyTab>
            <Round>4</Round>
            Маркетинг
          </MyTab>
          <MyTab>
            <Round>5</Round>
            Інновації та сертифікати
          </MyTab>
          <MyTab>
            <Round>6</Round>
            Участь у спільноті
          </MyTab>
          <MyTab>
            <Round>7</Round>
            Бізнес-план
          </MyTab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <MyHeading>Загальна інформація</MyHeading>
            <FarmDataDialogContent
              control={farmDataForm.control}
              errors={farmDataForm.formState.errors}
              register={farmDataForm.register}
              farm={farm}
              regions={regions}
              prismaUser={prismaUser}
              user={user}
            />
            <Buttons screen={screen} setScreen={setScreen} />
          </TabPanel>
          <TabPanel>
            <MyHeading>Спеціалізація</MyHeading>
            <Table size={"sm"}>
              <Tbody>
                <Tr borderWidth={"2px"}>
                  <Td>
                    Сектор, в яких здійснює
                    <br /> діяльність господарство
                  </Td>
                  <Td>Позначка</Td>
                  <Td>Площа (га), поголів'я (голів)</Td>
                  <Td>Обсяг виробництва за {}р.,грн</Td>
                </Tr>
                {/* <Tr borderWidth={"2px"}>
                  <Td>М’ясо ВРХ</Td>
                  <Td>
                    <Checkbox />
                  </Td>
                  <Td></Td>
                  <Td></Td>
                </Tr> */}
                {Specializations.map((el) => {
                  const [active, setActive] = useState(false);

                  return (
                    <Tr borderWidth={"2px"} key={el}>
                      <Td>{el}</Td>
                      <Td>
                        <Checkbox onChange={() => setActive((prev) => !prev)} />
                      </Td>
                      <Td>
                        <Input size={"sm"} isDisabled={!active} />
                      </Td>
                      <Td>
                        <Input size={"sm"} isDisabled={!active} />
                      </Td>
                    </Tr>
                  );
                })}
                {addedRow ? (
                  (() => {
                    return (
                      <Tr borderWidth={"2px"}>
                        <Td>
                          <Input size={"sm"} isDisabled={!activeAddedRow} />
                        </Td>
                        <Td>
                          <Checkbox
                            isChecked={activeAddedRow}
                            onChange={() => setActiveAddedRow((prev) => !prev)}
                          />
                        </Td>
                        <Td>
                          <Input size={"sm"} isDisabled={!activeAddedRow} />
                        </Td>
                        <Td>
                          <Input size={"sm"} isDisabled={!activeAddedRow} />
                        </Td>
                      </Tr>
                    );
                  })()
                ) : (
                  <Tr borderWidth={"2px"}>
                    <Td>
                      Інші види діяльності{" "}
                      <MyButton
                        size={"sm"}
                        ml={2}
                        onClick={() => setAddedRow(true)}
                      >
                        Додати
                      </MyButton>
                    </Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                  </Tr>
                )}
                <Tr borderWidth={"2px"}>
                  <Td colSpan={2}>Загальна площа землекористування, га</Td>

                  <Td>
                    <Input size={"sm"} />
                  </Td>
                  <Td></Td>
                </Tr>
                <Tr borderWidth={"2px"} fontSize={"sm"}>
                  <Td colSpan={2}>У т.ч. орендована земля, га</Td>

                  <Td>
                    <Input size={"sm"} />
                  </Td>
                  <Td></Td>
                </Tr>
                <Tr borderWidth={"2px"} fontSize={"sm"}>
                  <Td colSpan={2}>
                    Середній (основний) строк договорів <br />
                    оренди земельних ділянок, роки
                  </Td>

                  <Td>
                    <Input size={"sm"} />
                  </Td>
                  <Td></Td>
                </Tr>
              </Tbody>
            </Table>
            <Buttons screen={screen} setScreen={setScreen} />
          </TabPanel>
          <TabPanel>
            <MyHeading>Ефективність</MyHeading>
            {(() => {
              const year = new Date().getFullYear();
              const [thisYear, setThisYear] = useState(year);
              const defaultData = {
                employees: 0,
                profit: 0,
                cost: 0,
              };
              const [data, setData] = useState<{
                employees: number | string;
                profit: number | string;
                cost: number | string;
              }>(defaultData);
              return (
                <>
                  <HStack spacing={4} justifyContent={"center"}>
                    {(() => {
                      return [year - 1, year - 2, year - 3].map((el) => (
                        <Tag
                          key={el}
                          cursor={"pointer"}
                          variant="solid"
                          onClick={() => {
                            setThisYear(el);
                            setData(defaultData);
                          }}
                        >
                          {el}
                        </Tag>
                      ));
                    })()}
                  </HStack>
                  <Table size="sm">
                    <Tbody>
                      <Tr borderWidth={"2px"}>
                        <Td>Звітний рік</Td>
                        <Td>
                          <MyText>{thisYear}</MyText>
                        </Td>
                      </Tr>
                      <Tr borderWidth={"2px"}>
                        <Td>Кількість працівників</Td>
                        <Td>
                          <Input
                            size={"sm"}
                            value={data.employees}
                            onChange={(e) =>
                              setData((prev) => ({
                                ...prev,
                                employees: e.target.value,
                              }))
                            }
                          />
                        </Td>
                      </Tr>
                      <Tr borderWidth={"2px"}>
                        <Td>Річний дохід за {},грн</Td>
                        <Td>
                          <Input
                            size={"sm"}
                            value={data.profit}
                            onChange={(e) =>
                              setData((prev) => ({
                                ...prev,
                                profit: e.target.value,
                              }))
                            }
                          />
                        </Td>
                      </Tr>
                      <Tr borderWidth={"2px"}>
                        <Td>
                          Вартість активів підприємства <br />
                          станом на кінець {}року,грн
                        </Td>
                        <Td>
                          <Input
                            size={"sm"}
                            value={data.cost}
                            onChange={(e) =>
                              setData((prev) => ({
                                ...prev,
                                cost: e.target.value,
                              }))
                            }
                          />
                        </Td>
                      </Tr>
                      <Tr borderWidth={"2px"}>
                        <Td>
                          <MyText>Рентабельність виробництва,%</MyText>
                        </Td>
                        <Td>
                          <Input size={"sm"} defaultValue={"0"} />
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </>
              );
            })()}
            <Buttons screen={screen} setScreen={setScreen} />
          </TabPanel>
          <TabPanel>
            <MyHeading>Маркетинг</MyHeading>
            <Table size={"sm"}>
              <Tbody>
                <Tr borderWidth={"2px"}>
                  <Td colSpan={2}>
                    <MyText>Система маркетингу на підприємстві</MyText>
                  </Td>
                  <Td colSpan={2}>
                    <Select>
                      <option defaultChecked hidden>
                        Виберіть опцію
                      </option>
                      <option value="">Працює маркетинговий відділ</option>
                      <option value="">Є фахівець з маркетингу</option>
                      <option value="">
                        Маркетингом займається керівник господарства
                      </option>
                    </Select>
                  </Td>
                </Tr>
                <Tr borderWidth={"2px"}>
                  <Td colSpan={2}>
                    <MyText>Підприємство/господарство</MyText>
                  </Td>
                  <Td colSpan={2}>
                    <Select>
                      <option defaultChecked hidden>
                        Виберіть опцію
                      </option>
                      <option value="">
                        Здійскює переробку виробленої продукції
                      </option>
                      <option value="">
                        Робить перепродажну підготовку (фасування, пакування)
                        виробленої продукції
                      </option>
                      <option value="">
                        Продає вироблену продукцію виключно як сировину
                      </option>
                    </Select>
                  </Td>
                </Tr>
                <Tr borderWidth={"2px"}>
                  <Td colSpan={2}>
                    <MyText>Підприємство/господарство</MyText>
                  </Td>
                  <Td colSpan={2}>
                    <Select>
                      <option defaultChecked hidden>
                        Виберіть опцію
                      </option>
                      <option value="">
                        Постачаєбільшість вироблениї ним продукції на експорт
                      </option>
                      <option value="">
                        Постачає частину виробленої ним продукції на експорт, а
                        частину реалізує на внутрішньому ринку
                      </option>
                      <option value="">
                        Реалізує власну продукцію тільки на внутрішньому ринку
                      </option>
                    </Select>
                  </Td>
                </Tr>
                <Tr borderWidth={"2px"}>
                  <Td colSpan={2}>
                    <MyText>Система збуту товарів/виробленої продукції</MyText>
                  </Td>
                  <Td colSpan={2}>
                    <Select>
                      <option defaultChecked hidden>
                        Виберіть опцію
                      </option>
                      <option value="">
                        Продукція поставляєтьс,в основному, на організовані
                        ринки(оптові покупці, торгівельні мережі, магазини) за
                        довгостроковими контрактами
                      </option>
                      <option value="">
                        Продукція поставляється часткова на організовані рики,
                        але здебільшого прямим покупцям (прямий збут)
                      </option>
                      <option value="">
                        Продукція безпосередньо збувається прямим покупцям
                      </option>
                    </Select>
                  </Td>
                </Tr>
                <Tr borderWidth={"2px"}>
                  <Td colSpan={2}>
                    <MyText>
                      Досвід демонстраційної діяльності підприємства
                    </MyText>
                  </Td>
                  <Td colSpan={2}>
                    <Select>
                      <option defaultChecked hidden>
                        Виберіть опцію
                      </option>
                      <option value="">
                        Демонстрації проводяться регулярно (планова) - 4 і
                        більше разів на рік
                      </option>
                      <option value="">
                        Демонстрації продвяться 1-2 рази на рік
                      </option>
                      <option value="">
                        Демонстраційна діяльність не здійснюється
                      </option>
                    </Select>
                  </Td>
                </Tr>
                {(() => {
                  const [data, setData] = useState<
                    {
                      name: string;
                      description: string;
                    }[]
                  >([]);
                  return (
                    <>
                      {data.map((el, ind) => (
                        <Tr borderWidth={"2px"} key={ind}>
                          <Td width={"1%"}>{ind + 1}</Td>
                          <Td>
                            <Input
                              size={"sm"}
                              value={el.name}
                              onChange={(e) =>
                                setData((prev) => {
                                  prev[ind].name = e.target.value;
                                  return JSON.parse(JSON.stringify(prev));
                                })
                              }
                            />
                          </Td>
                          <Td>
                            <Input
                              size={"sm"}
                              value={el.description}
                              onChange={(e) =>
                                setData((prev) => {
                                  prev[ind].description = e.target.value;
                                  return JSON.parse(JSON.stringify(prev));
                                })
                              }
                            />
                          </Td>
                          <Td w={"1%"}>
                            <MyDeleteIcon
                              onClick={() =>
                                setData((prev) => {
                                  prev.splice(ind, ind);
                                  return JSON.parse(JSON.stringify(prev));
                                })
                              }
                            />
                          </Td>
                        </Tr>
                      ))}
                      {data.length < 5 && (
                        <Tr borderWidth={"2px"}>
                          <Td colSpan={2}>
                            <MyButton
                              size={"sm"}
                              onClick={() =>
                                setData((prev) => [
                                  ...prev,
                                  { name: "", description: "" },
                                ])
                              }
                            >
                              Додати напрям
                            </MyButton>
                          </Td>
                          <Td></Td>
                        </Tr>
                      )}
                    </>
                  );
                })()}
                <Tr borderWidth={"2px"}>
                  <Td colSpan={2}>
                    <MyText>База для демонстраціної діяльності</MyText>
                  </Td>
                  <Td colSpan={2}>
                    <Select>
                      <option defaultChecked hidden>
                        Виберіть опцію
                      </option>
                      <option value="">
                        Є спеціально підготволені/обладнанні для демонстраційної
                        діяльності ділянки поля, ферми цехи з спеціальними
                        інформаційними та навчальними матеріалами
                      </option>
                      <option value="">
                        Окремі ділянки господарства часткова облаштовані для
                        демонстаційних показів
                      </option>
                      <option value="">
                        Для демонстрацій використовуються існуючі поля, ферми
                        без додатково спецального облаштування
                      </option>
                    </Select>
                  </Td>
                </Tr>
                <Tr borderWidth={"2px"}>
                  <Td colSpan={2}>
                    <MyText>Готовність приймати відвідувачів</MyText>
                  </Td>
                  <Td colSpan={2}>
                    <Select>
                      <option defaultChecked hidden>
                        Виберіть опцію
                      </option>
                      <option value="">
                        Декілька разів на місяць за попередньо узгоджеим планом
                        демонстраційних покзів
                      </option>
                      <option value="">Не частіше 1 разу на місяць</option>
                      <option value="">
                        Не частіше 1 разу в квартал (три місяці)
                      </option>
                    </Select>
                  </Td>
                </Tr>
                <Tr borderWidth={"2px"}>
                  <Td colSpan={2}>
                    <MyText>
                      Присутність підприєиства в Інтернет-просторі
                    </MyText>
                  </Td>
                  <Td colSpan={2}>
                    <Select>
                      <option defaultChecked hidden>
                        Виберіть опцію
                      </option>
                      <option value="">
                        Інтернет-сторінка, сторінки у соціальних мережах
                        ведуться з високою активністю
                      </option>
                      <option value="">
                        Інтернет-сторінка, сторінки у соціальних мережах є, але
                        вони ведуться нерегулярно
                      </option>
                      <option value="">
                        Відсутня Інтернет-сторінка, сторінки у соціальних
                        мережах
                      </option>
                    </Select>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
            <Buttons screen={screen} setScreen={setScreen} />
          </TabPanel>
          <TabPanel>
            <MyHeading>Іннновації та сертифікати</MyHeading>
            <Table size="sm">
              <Tbody>
                <Tr borderWidth={"2px"}>
                  <Td colSpan={2}>
                    <MyText>Технологічний рівень виробництва</MyText>
                  </Td>
                  <Td colSpan={2}>
                    <Select>
                      <option defaultChecked hidden>
                        Виберіть опцію
                      </option>
                      <option value="">
                        Щорічно впроваджується декілька інновацій, в тому числі
                        SMART-технології
                      </option>
                      <option value="">
                        Впроваджено декілька інновацій, та, як првило,
                        використовуються типові технологічні процеси
                      </option>
                      <option value="">
                        Використовуються традиційні/типові технологічні процеси,
                        методи і забоси виробництва
                      </option>
                    </Select>
                  </Td>
                </Tr>
                {(() => {
                  const [data, setData] = useState<
                    {
                      name: string;
                      description: string;
                    }[]
                  >([]);
                  return (
                    <>
                      {data.map((el, ind) => (
                        <Tr borderWidth={"2px"} key={ind}>
                          <Td width={"1%"}>{ind + 1}</Td>
                          <Td>
                            <Input
                              size={"sm"}
                              value={el.name}
                              onChange={(e) =>
                                setData((prev) => {
                                  prev[ind].name = e.target.value;
                                  return JSON.parse(JSON.stringify(prev));
                                })
                              }
                            />
                          </Td>
                          <Td>
                            <Input
                              size={"sm"}
                              value={el.description}
                              onChange={(e) =>
                                setData((prev) => {
                                  prev[ind].description = e.target.value;
                                  return JSON.parse(JSON.stringify(prev));
                                })
                              }
                            />
                          </Td>
                          <Td w={"1%"}>
                            <MyDeleteIcon
                              onClick={() =>
                                setData((prev) => {
                                  prev.splice(ind, ind);
                                  return JSON.parse(JSON.stringify(prev));
                                })
                              }
                            />
                          </Td>
                        </Tr>
                      ))}
                      {data.length < 5 && (
                        <Tr borderWidth={"2px"}>
                          <Td colSpan={2}>
                            <MyButton
                              size={"sm"}
                              onClick={() =>
                                setData((prev) => [
                                  ...prev,
                                  { name: "", description: "" },
                                ])
                              }
                            >
                              Додати інновацію
                            </MyButton>
                          </Td>
                          <Td></Td>
                        </Tr>
                      )}
                    </>
                  );
                })()}
                <Tr borderWidth={"2px"}>
                  <Td colSpan={2}>
                    <MyText>Сертифікація на підприємстві</MyText>
                  </Td>
                  <Td colSpan={2}>
                    <Select>
                      <option defaultChecked hidden>
                        Виберіть опцію
                      </option>
                      <option value="">
                        Більшість виробничих процесів охоплена сертифікацією
                        (GlobalGap, HACCP, ISO, тощо)
                      </option>
                      <option value="">Є окремі сертифіковані процеси</option>
                      <option value="">
                        Сертифікація виробничих процесів у планах підприємства
                      </option>
                    </Select>
                  </Td>
                </Tr>
                {(() => {
                  const [data, setData] = useState<
                    {
                      name: string;
                      description: string;
                    }[]
                  >([]);
                  return (
                    <>
                      {data.map((el, ind) => (
                        <Tr borderWidth={"2px"} key={ind}>
                          <Td width={"1%"}>{ind + 1}</Td>
                          <Td>
                            <Input
                              size={"sm"}
                              value={el.name}
                              onChange={(e) =>
                                setData((prev) => {
                                  prev[ind].name = e.target.value;
                                  return JSON.parse(JSON.stringify(prev));
                                })
                              }
                            />
                          </Td>
                          <Td>
                            <Input
                              size={"sm"}
                              value={el.description}
                              onChange={(e) =>
                                setData((prev) => {
                                  prev[ind].description = e.target.value;
                                  return JSON.parse(JSON.stringify(prev));
                                })
                              }
                            />
                          </Td>
                          <Td w={"1%"}>
                            <MyDeleteIcon
                              onClick={() =>
                                setData((prev) => {
                                  prev.splice(ind, ind);
                                  return JSON.parse(JSON.stringify(prev));
                                })
                              }
                            />
                          </Td>
                        </Tr>
                      ))}
                      {data.length < 5 && (
                        <Tr borderWidth={"2px"}>
                          <Td colSpan={2}>
                            <MyButton
                              size={"sm"}
                              onClick={() =>
                                setData((prev) => [
                                  ...prev,
                                  { name: "", description: "" },
                                ])
                              }
                            >
                              Додати сертифікацію
                            </MyButton>
                          </Td>
                          <Td></Td>
                        </Tr>
                      )}
                    </>
                  );
                })()}
              </Tbody>
            </Table>
            <Buttons screen={screen} setScreen={setScreen} />
          </TabPanel>
          <TabPanel>
            <MyHeading>Участь у спільноті </MyHeading>
            <Table size="sm">
              <Tbody>
                <Tr borderWidth={"2px"}>
                  <Td colSpan={2}>
                    <MyText>
                      Членство в професійних організаціях, в тому числі в
                      кооперативах
                    </MyText>
                  </Td>
                  <Td colSpan={2}>
                    <Select>
                      <option defaultChecked hidden>
                        Виберіть опцію
                      </option>
                      <option value="">
                        Підприємство (в особі його керівників) є лідером однієї
                        чи декількох професійних організації
                      </option>
                      <option value="">
                        Підприємство є членом громадської організації
                      </option>
                      <option value="">
                        Підприємство не є членом професійних організацій
                      </option>
                    </Select>
                  </Td>
                </Tr>
                {(() => {
                  const [data, setData] = useState<
                    {
                      name: string;
                      description: string;
                    }[]
                  >([]);
                  return (
                    <>
                      {data.map((el, ind) => (
                        <Tr borderWidth={"2px"} key={ind}>
                          <Td width={"1%"}>{ind + 1}</Td>
                          <Td>
                            <Input
                              size={"sm"}
                              value={el.name}
                              onChange={(e) =>
                                setData((prev) => {
                                  prev[ind].name = e.target.value;
                                  return JSON.parse(JSON.stringify(prev));
                                })
                              }
                            />
                          </Td>
                          <Td>
                            <Input
                              size={"sm"}
                              value={el.description}
                              onChange={(e) =>
                                setData((prev) => {
                                  prev[ind].description = e.target.value;
                                  return JSON.parse(JSON.stringify(prev));
                                })
                              }
                            />
                          </Td>
                          <Td w={"1%"}>
                            <MyDeleteIcon
                              onClick={() =>
                                setData((prev) => {
                                  prev.splice(ind, ind);
                                  return JSON.parse(JSON.stringify(prev));
                                })
                              }
                            />
                          </Td>
                        </Tr>
                      ))}
                      {data.length < 3 && (
                        <Tr borderWidth={"2px"}>
                          <Td colSpan={2}>
                            <MyButton
                              size={"sm"}
                              onClick={() =>
                                setData((prev) => [
                                  ...prev,
                                  { name: "", description: "" },
                                ])
                              }
                            >
                              Додати організацію
                            </MyButton>
                          </Td>
                          <Td></Td>
                        </Tr>
                      )}
                    </>
                  );
                })()}
                <Tr borderWidth={"2px"}>
                  <Td colSpan={2}>
                    <MyText>Еколонічність підприєиства</MyText>
                  </Td>
                  <Td colSpan={2}>
                    <Select>
                      <option defaultChecked hidden>
                        Виберіть опцію
                      </option>
                      <option value="">
                        Запроваджено екологічні програми/заходи/інновацій, що
                        стосуються усього циклу виробництва чи більшої його
                        частини (наприклад, стандарт ISO 14001 / ДСТУ ISO
                        14001:2015)
                      </option>
                      <option value="">
                        Запроваджено природозберігаючі заходи/інновацій, що
                        стосуються усього окремих етапів виробництва.
                      </option>
                      <option value="">
                        Підприємство дотримується вимог екологічного
                        законодавства. Планується запровадження екологічних
                        програм/заходів/інновацій
                      </option>
                    </Select>
                  </Td>
                </Tr>
                {(() => {
                  const [data, setData] = useState<
                    {
                      name: string;
                      description: string;
                    }[]
                  >([]);
                  return (
                    <>
                      {data.map((el, ind) => (
                        <Tr borderWidth={"2px"} key={ind}>
                          <Td width={"1%"}>{ind + 1}</Td>
                          <Td>
                            <Input
                              size={"sm"}
                              value={el.name}
                              onChange={(e) =>
                                setData((prev) => {
                                  prev[ind].name = e.target.value;
                                  return JSON.parse(JSON.stringify(prev));
                                })
                              }
                            />
                          </Td>
                          <Td>
                            <Input
                              size={"sm"}
                              value={el.description}
                              onChange={(e) =>
                                setData((prev) => {
                                  prev[ind].description = e.target.value;
                                  return JSON.parse(JSON.stringify(prev));
                                })
                              }
                            />
                          </Td>
                          <Td w={"1%"}>
                            <MyDeleteIcon
                              onClick={() =>
                                setData((prev) => {
                                  prev.splice(ind, ind);
                                  return JSON.parse(JSON.stringify(prev));
                                })
                              }
                            />
                          </Td>
                        </Tr>
                      ))}
                      {data.length < 5 && (
                        <Tr borderWidth={"2px"}>
                          <Td colSpan={2}>
                            <MyButton
                              size={"sm"}
                              onClick={() =>
                                setData((prev) => [
                                  ...prev,
                                  { name: "", description: "" },
                                ])
                              }
                            >
                              Додати еколонічний захід/програму/іннновацію
                            </MyButton>
                          </Td>
                          <Td></Td>
                        </Tr>
                      )}
                    </>
                  );
                })()}
                <Tr borderWidth={"2px"}>
                  <Td colSpan={2}>
                    <MyText>
                      Співпраця з науковими та освітніми установами, дорадчими
                      службами
                    </MyText>
                  </Td>
                  <Td colSpan={2}>
                    <Select>
                      <option defaultChecked hidden>
                        Виберіть опцію
                      </option>
                      <option value="">
                        Підприємство реалізує спільні проекти з науковими та
                        освітніми установами/дорадчими службами на постійній
                        основі
                      </option>
                      <option value="">
                        Підприємство час від часу співпрацює з науковими та
                        освітніми установами/дорадчими службами
                      </option>
                      <option value="">
                        Підприємство ще не має досвіду співпраці науковими та
                        освітніми установами/дорадчими службами
                      </option>
                    </Select>
                  </Td>
                </Tr>
                {(() => {
                  const [data, setData] = useState<
                    {
                      name: string;
                      description: string;
                    }[]
                  >([]);
                  return (
                    <>
                      {data.map((el, ind) => (
                        <Tr borderWidth={"2px"} key={ind}>
                          <Td width={"1%"}>{ind + 1}</Td>
                          <Td>
                            <Input
                              size={"sm"}
                              value={el.name}
                              onChange={(e) =>
                                setData((prev) => {
                                  prev[ind].name = e.target.value;
                                  return JSON.parse(JSON.stringify(prev));
                                })
                              }
                            />
                          </Td>
                          <Td>
                            <Input
                              size={"sm"}
                              value={el.description}
                              onChange={(e) =>
                                setData((prev) => {
                                  prev[ind].description = e.target.value;
                                  return JSON.parse(JSON.stringify(prev));
                                })
                              }
                            />
                          </Td>
                          <Td w={"1%"}>
                            <MyDeleteIcon
                              onClick={() =>
                                setData((prev) => {
                                  prev.splice(ind, ind);
                                  return JSON.parse(JSON.stringify(prev));
                                })
                              }
                            />
                          </Td>
                        </Tr>
                      ))}
                      {data.length < 3 && (
                        <Tr borderWidth={"2px"}>
                          <Td colSpan={2}>
                            <MyButton
                              size={"sm"}
                              onClick={() =>
                                setData((prev) => [
                                  ...prev,
                                  { name: "", description: "" },
                                ])
                              }
                            >
                              Додати спільний проект з науковими та освітніми
                              установами
                            </MyButton>
                          </Td>
                          <Td></Td>
                        </Tr>
                      )}
                    </>
                  );
                })()}
                <Tr borderWidth={"2px"}>
                  <Td colSpan={2}>
                    <MyText>Співпраця з територіальними громадами</MyText>
                  </Td>
                  <Td colSpan={2}>
                    <Select>
                      <option defaultChecked hidden>
                        Виберіть опцію
                      </option>
                      <option value="">
                        Підприємство реалізує спільні проекти територіальними
                        громадами на постійній основі
                      </option>
                      <option value="">
                        Підприємство час від часу допомагає вирішувати окремі
                        проблеми територіальних громад
                      </option>
                      <option value="">
                        Підприємство ще не має досвіду співпраці з
                        територіальними громадами
                      </option>
                    </Select>
                  </Td>
                </Tr>
                {(() => {
                  const [data, setData] = useState<
                    {
                      name: string;
                      description: string;
                    }[]
                  >([]);
                  return (
                    <>
                      {data.map((el, ind) => (
                        <Tr borderWidth={"2px"} key={ind}>
                          <Td width={"1%"}>{ind + 1}</Td>
                          <Td>
                            <Input
                              size={"sm"}
                              value={el.name}
                              onChange={(e) =>
                                setData((prev) => {
                                  prev[ind].name = e.target.value;
                                  return JSON.parse(JSON.stringify(prev));
                                })
                              }
                            />
                          </Td>
                          <Td>
                            <Input
                              size={"sm"}
                              value={el.description}
                              onChange={(e) =>
                                setData((prev) => {
                                  prev[ind].description = e.target.value;
                                  return JSON.parse(JSON.stringify(prev));
                                })
                              }
                            />
                          </Td>
                          <Td w={"1%"}>
                            <MyDeleteIcon
                              onClick={() =>
                                setData((prev) => {
                                  prev.splice(ind, ind);
                                  return JSON.parse(JSON.stringify(prev));
                                })
                              }
                            />
                          </Td>
                        </Tr>
                      ))}
                      {data.length < 3 && (
                        <Tr borderWidth={"2px"}>
                          <Td colSpan={2}>
                            <MyButton
                              size={"sm"}
                              onClick={() =>
                                setData((prev) => [
                                  ...prev,
                                  { name: "", description: "" },
                                ])
                              }
                            >
                              Додати спільний проект з територіальними громадами
                            </MyButton>
                          </Td>
                          <Td></Td>
                        </Tr>
                      )}
                    </>
                  );
                })()}
              </Tbody>
            </Table>
            <Buttons screen={screen} setScreen={setScreen} />
          </TabPanel>
          <TabPanel>
            <MyHeading>Бізнес-план </MyHeading>
            <Table size="sm">
              <Tbody>
                <Tr borderWidth={"2px"}>
                  <Td>
                    <MyText>
                      Планування розвитку підприємства/господарства
                    </MyText>
                  </Td>
                  <Td>
                    <Select>
                      <option defaultChecked hidden>
                        Виберіть опцію
                      </option>
                      <option value="">
                        Затверджена стратегія розвитку підприємства на 5 років і
                        більше та план її реалізації
                      </option>
                      <option value="">
                        Затверджений план розвитку підприємства на 3-5 років
                      </option>
                      <option value="">
                        Підприємство практикує річне планування
                      </option>
                    </Select>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Назва бізнес-плану</Td>
                  <Td>
                    <Input size={"sm"} />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Дата початку</Td>
                  <Td>
                    <Input size={"sm"} type="date" />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Плановий період, років</Td>
                  <Td>
                    {" "}
                    <Input size={"sm"} type="number" inputMode="numeric" />
                  </Td>
                </Tr>
              </Tbody>
            </Table>
            <Buttons screen={screen} setScreen={setScreen} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Div>
  );
}
