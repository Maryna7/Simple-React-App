import React from "react";
import styles from "./App.module.scss";
import { Header } from "../Header/Header";
import { Banner } from "../Banner/Banner";
import { ServicesList } from "../ServicesList/ServicesList";
import { ProjectList } from "../ProjectList/ProjectList";
import { AboutList } from "../AboutList/AboutList";
import { TeamList } from "../TeamList/TeamList";
import { PortfolioSlider } from "../PortfolioSlider/PortfolioSlider";
import { BlogList } from "../BlogList/BlogList";
import { Contacts } from "../Contacts/Contacts";
import { Footer } from "../Footer/Footer";
import data from "../../Data/Data.json";
import { TeamMember } from "../../types/TeamData";
import { Service } from "../../types/ServicesData";
import { AboutColumn } from "../../types/AboutData";
import { Contact } from "../../types/ContactData";

const App = () => {
  return (
    <div className={styles.app}>
      <Header data={data.NavData} />
      <main>
        <Banner data={data.BannerData} />
        <ServicesList data={data.ServiceData as Service[]} />
        <ProjectList
          sortData={data.SortProjectListData}
          data={data.ProjectListData}
        />
        <AboutList data={data.AboutSectionData as AboutColumn[]} />
        <TeamList data={data.TeamSectionData as TeamMember[]} />
        <PortfolioSlider data={data.PortfolioData} />
        <BlogList data={data.BlogListData} />
        <Contacts data={data.ContactData as Contact[]} />
      </main>
      <Footer />
    </div>
  );
};

export { App };
