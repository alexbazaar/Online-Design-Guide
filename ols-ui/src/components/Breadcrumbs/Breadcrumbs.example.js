import React from "react";
import { Breadcrumbs, BreadcrumbItem } from './index';

module.exports = (
  <Breadcrumbs>
    <BreadcrumbItem href="/">
      Home
    </BreadcrumbItem>
    <BreadcrumbItem href="/puppies">
      Puppies
    </BreadcrumbItem>
    <BreadcrumbItem>
      Pembroke Welsh Corgi
    </BreadcrumbItem>
  </Breadcrumbs>
);
