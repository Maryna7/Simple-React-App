import React from "react";
import { Title } from "../Title/Title";
import { ColumnsTitle } from "../Columns/ColumnsTitle";
import { ColumnsIcon } from "../Columns/ColumnsIcon";
import { Link } from "../Link/Link";
import { Maps } from "./Map";
import { Contact } from "../../types/ContactData";
import styles from "./Contacts.module.scss";

type ContactDataProp = {
  data: Contact[];
};

const Contacts = ({ data }: ContactDataProp) => {
  return (
    <section className={styles.contactsSection}>
      <Title>Contacts</Title>
      <div className={styles.contactsMap}>
        <Maps />
      </div>
      <div className="container">
        <ul className={styles.contactList}>
          {data.map((item) => (
            <li className={styles.contactItem} key={item.id}>
              <ColumnsIcon icon={item.icon} />
              <ColumnsTitle>{item.heading}</ColumnsTitle>
              <Link className={styles.contactLink} href={item.href}>
                {item.linkText}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Contacts };
