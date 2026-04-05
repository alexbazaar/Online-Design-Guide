import React from "react";
import Accordion, {
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemBody
} from './index';

module.exports = (
  <Accordion>
    <AccordionItem>
      <AccordionItemTrigger>First Amendment</AccordionItemTrigger>
      <AccordionItemBody>
        <p>
          Congress shall make no law respecting an establishment of
          religion, or prohibiting the free exercise thereof; or
          abridging the freedom of speech, or of the press; or the
          right of the people peaceably to assemble, and to petition
          the Government for a redress of grievances.
        </p>
      </AccordionItemBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTrigger>Second Amendment</AccordionItemTrigger>
      <AccordionItemBody>
        <p>
          A well regulated Militia, being necessary to the security
          of a free State, the right of the people to keep and bear
          Arms, shall not be infringed.
        </p>
      </AccordionItemBody>
    </AccordionItem>
  </Accordion>
);


