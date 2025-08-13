import getConfig from 'next/config';
import Layout from '@/components/Layout';

const { publicRuntimeConfig } = getConfig();
const { name } = publicRuntimeConfig.site;

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gray-50">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#0088cc] drop-shadow-md">
          {name}
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 text-center max-w-2xl">
          به وب‌سایت {name} خوش آمدید!  
          اینجا می‌توانید بهترین خدمات و تجربه را دریافت کنید.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <button className="px-6 py-3 bg-[#0088cc] text-white rounded-xl shadow hover:bg-[#0077b3] transition-all">
            شروع کنید
          </button>
          <button className="px-6 py-3 border border-[#0088cc] text-[#0088cc] rounded-xl shadow hover:bg-[#e6f7ff] transition-all">
            بیشتر بدانید
          </button>
        </div>

        <footer className="mt-12 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} {name}. همه حقوق محفوظ است.
        </footer>
      </div>
    </Layout>
  );
};

export default Home;
