import Button from '../atoms/button';
import React from 'react';
import headerData from '@/mockData/asideLinks';
import { getAPI } from '@/utils/api';

async function shopByIndustries() {
  const { data } = await getAPI('home-page');
  const products = data.attributes.shopByCategory.sub_categories.data.map((entry) => {
    return {
      id: entry.id,
      title: entry.attributes?.name || '',
      ImgSrc: entry.attributes?.image?.data?.attributes?.url || '',
    };
  });
  const header = headerData[0];
  const quickLinks = header?.quicklinks?.listItems || [];
  return (
    <div className="container py-9">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="md:col-span-1">
          <h2 className="text-black font-manrope font-semibold text-5xl tracking-tight leading-normal">
            {header?.heading1 || ''} <br /> {header?.heading2 || ''}
          </h2>
          <nav className="py-4">
            <ul className="text-lg list-none text-gray-800 font-manrope font-medium leading-2 capitalize">
              {quickLinks.map((link) => (
                <li key={link.id} className="py-1">
                  {link.navlink}
                </li>
              ))}
            </ul>
            {header?.linkData ? (
              <a
                href={header.linkData.url}
                className="text-gray-900 font-manrope text-3xl font-bold"
              >
                {header.linkData.label}
              </a>
            ) : null}
          </nav>
        </div>

        {products.map((product) => (
          <div
            key={product.id}
            className="w-[447px] h-[678px] lg:w-full p-2"
          >
            <div className="gap-2">
              <img
                src={product.ImgSrc}
                alt={product.title}
                className="w-[447px] h-[490px] lg:h-full gap-1 rounded"
              />

              <div className="flex justify-between pt-3">
                <h3 className="text-gray-900 font-manrope text-sm font-bold">
                  {product.title}
                </h3>
                <p className="font-manrope text-sm font-semibold text-gray-900 pr-3">
                  INR 5000
                </p>
              </div>
              <p className="text-gray-400 font-manrope text-xs font-medium pt-2 pb-2">
                full body resistance
              </p>
              <Button variant="primary" rounded="full">
                <p>enquire now</p>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default shopByIndustries;
