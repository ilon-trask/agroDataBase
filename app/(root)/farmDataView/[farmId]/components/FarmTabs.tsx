"use client";
import MyHeading from "@/components/ui/MyHeading";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import FarmInnovationSection from "./FarmInnovationsSection/FarmInnovationSection";
import FarmProcessSection from "./FarmProcessSection/FarmProcessSection";
import FarmDirectionSection from "./FarmDirectionSection/FarmDirectionSection";
import FarmOrganizationsSection from "./FarmOrganizationsSection/FarmOrganizationsSection";
import FarmEcologySection from "./FarmEcologySection/FarmEcologySection";
import FarmScientificProjectSection from "./FarmScientificProjectSection/FarmScientificProjectSection";

export default function FarmTabs() {
  return (
    <Tabs color={"red"}>
      <TabList>
        <Tab>Інновації</Tab>
        <Tab>Сертифікати</Tab>
        <Tab>Напрями</Tab>
        <Tab>Організації</Tab>
        <Tab>Екологічні заходи</Tab>
        <Tab>Наукові проекти</Tab>
        <Tab>Територіальні проекти</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <MyHeading>
            Перелік найважливіших впроваджених інновацій за останні три роки з
            коротким описом:
          </MyHeading>
          <FarmInnovationSection />
        </TabPanel>
        <TabPanel>
          <MyHeading>
            Перелік сертифікованих процесів (сертифікатів) з коротким описом:
          </MyHeading>
          <FarmProcessSection />
        </TabPanel>
        <TabPanel>
          <MyHeading>
            Перелік напрямів демонстраційної діяльності з коротким описом:
          </MyHeading>
          <FarmDirectionSection />
        </TabPanel>
        <TabPanel>
          <MyHeading>
            Перелік професійних організацій, членами яких є підприємство:
          </MyHeading>
          <FarmOrganizationsSection />
        </TabPanel>
        <TabPanel>
          <MyHeading>
            Перелік запроваджених екологічних програм/заходів/інновацій з
            коротким описом:
          </MyHeading>
          <FarmEcologySection />
        </TabPanel>
        <TabPanel>
          <MyHeading>
            Перелік спільних проектів з науковими та освітніми
            установами/дорадчими службами з коротким описом:
          </MyHeading>
          <FarmScientificProjectSection />
        </TabPanel>
        <TabPanel>
          <MyHeading>
            Перелік спільних проектів з територіальними громадами з коротким
            описом:
          </MyHeading>
          <FarmProcessSection />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
