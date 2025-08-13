import getConfig from "next/config";
import Head from "next/head";
import { useRouter } from "next/router";

const { publicRuntimeConfig } = getConfig();

type LayoutProps = {
  title?: string;
  description?: string;
  date?: string;
  socialPreview?: string;
  children: React.ReactNode;
};

const Layout = ({ children, ...customMeta }: LayoutProps) => {
  const router = useRouter();
  const { asPath } = router;

  const { name, url, title, description, socialPreview } =
    publicRuntimeConfig.site;

  const meta = {
    name,
    url,
    title,
    description,
    socialPreview,
    ...customMeta,
  };

  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;
