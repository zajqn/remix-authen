import { Outlet } from "@remix-run/react";

import Navigation from "~/layouts/Navigation";
import marketingStyles from "~/styles/marketing.css"


export default function MarketingLayout() {
  return(
    <>
      <Navigation />
      <Outlet />
    </>
  ) 
}

export function links() {
  return [{rel: 'stylesheet', href: marketingStyles}]
}